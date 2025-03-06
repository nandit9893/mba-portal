import nodemailer from "nodemailer";
import crypto from "crypto";
import multer from "multer";
import userModel from "../models/userModel.js";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

dotenv.config();

export const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  //validate
  if (!name) {
    next("name is required");
  }
  if (!email) {
    next("email is required");
  }
  if (!password) {
    next("password is required and greater than 6 character");
  }
  const exisitingUser = await userModel.findOne({ email });
  if (exisitingUser) {
    next("Email Already Register Please Login");
  }
  const user = await userModel.create({ name, email, password });
  //token
  const token = user.createJWT();
  res.status(201).send({
    sucess: true,
    message: "User Created Successfully",
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

//Logout Function (Invalidate Token)
export const logoutUser = async (req, res) => {
  try {
    // ✅ Option 1: Just send success response (For stateless JWT authentication)
    res.status(200).json({ message: "User logged out successfully!" });

    // ✅ Option 2: If using token blacklisting (Optional)
    // Add token to a blacklist or remove from database
    // await TokenBlacklist.create({ token: req.token });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ message: "Logout failed", error: error.message });
  }
};

// Middleware to Check if Token is Blacklisted
export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  if (blacklistedTokens.includes(token)) {
    return res
      .status(401)
      .json({ message: "Token is invalid. Please log in again." });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
//login Controller
export const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  //validation
  if (!email || !password) {
    next("Please Provide All Fields");
  }
  //find user by email
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    next("Invalid Useraname or password");
  }
  //compare password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid Useraname or password");
  }
  user.password = undefined;
  const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Login Successfully",
    user,
    token,
  });
};
//request reset password
export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  // Check if the email exists in the database
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(404)
      .json({
        success: false,
        message: "User with this email does not exist.",
      });
  }

  // Generate a password reset token
  const resetToken = crypto.randomBytes(32).toString("hex");
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour

  await user.save();

  // Send email with reset token
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  const resetURL = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: "Password Reset Request",
    text: `You requested a password reset. Click the link below to reset your password:\n\n${resetURL}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Failed to send email. Please try again.",
        });
    }

    res.status(200).json({
      success: true,
      message: "Password reset email sent successfully.",
    });
  });
};

//reset password
export const resetPassword = async (req, res) => {
  const { resetToken, newPassword } = req.body;

  // Find the user by the reset token and check if the token has expired
  const user = await User.findOne({
    passwordResetToken: resetToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid or expired reset token" });
  }

  // Hash the new password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newPassword, salt);

  // Clear reset token and expiration
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  // Save the user with the new password
  await user.save();

  res.status(200).json({
    success: true,
    message: "Password has been reset successfully.",
  });
};

// ⬇️ Configure Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID, // Your Google Client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Your Google Client Secret
      callbackURL: "/api/auth/google/callback", // Redirect URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { email, name, picture } = profile._json;

        // Check if user already exists in the database
        let user = await userModel.findOne({ email });

        if (!user) {
          return done(null, false, {
            message: "Email is not registered. Please sign up first.",
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

// ⬇️ Google OAuth Login Route
export const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

// ⬇️ Google OAuth Callback Route
export const googleAuthCallback = (req, res) => {
  passport.authenticate("google", async (err, user, info) => {
    if (err)
      return res
        .status(500)
        .json({ success: false, message: "Server error", error: err.message });

    if (!user) {
      return res
        .status(400)
        .json({
          success: false,
          message: info?.message || "Google authentication failed.",
        });
    }

    // Generate JWT Token for the authenticated user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user,
      token,
    });
  })(req, res);
};

export const loginWithGoogleMail = async (req, res) => {
  const { name, email } = req.body;
  try {
    const existedUser = await userModel.findOne({ email });

    if (existedUser) {
      const token = existedUser.createJWT();
      return res.status(200).json({
        success: true,
        message: "Login Successfully",
        user: existedUser,
        token,
      });
    }

    // Generate a random password
    const generatedPassword = Math.random().toString(36).slice(-8);

    const newUser = await userModel.create({
      password: generatedPassword, // This will be hashed automatically in userModel
      name,
      email,
    });

    const token = newUser.createJWT();

    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user: newUser,
      token,
      password: generatedPassword, // Send the generated password in the response
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while registering the user",
      error: error.message,
    });
  }
};
