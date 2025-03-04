<<<<<<< HEAD

=======
>>>>>>> 3907a04e3d9b602bbb87b7defc49d693bb290a63
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import multer from 'multer';
import userModel from "../models/userModel.js";
import dotenv from 'dotenv';

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
export const logout = async (req, res) => {
    try {
        const token = req.header("Authorization");
        if (!token) return res.status(400).json({ message: "Token required" });

        blacklistedTokens.push(token);
        res.json({ message: "Logged out successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Middleware to Check if Token is Blacklisted
export const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access Denied" });

    if (blacklistedTokens.includes(token)) {
        return res.status(401).json({ message: "Token is invalid. Please log in again." });
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
    message: "Login SUccessfully",
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
      return res.status(404).json({ success: false, message: 'User with this email does not exist.' });
  }

  // Generate a password reset token
  const resetToken = crypto.randomBytes(32).toString('hex');
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour

  await user.save();

  // Send email with reset token
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL_USER, // Your email
          pass: process.env.EMAIL_PASS, // Your email password
      },
  });

  const resetURL = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

  const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Password Reset Request',
      text: `You requested a password reset. Click the link below to reset your password:\n\n${resetURL}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
          return res.status(500).json({ success: false, message: 'Failed to send email. Please try again.' });
      }

      res.status(200).json({
          success: true,
          message: 'Password reset email sent successfully.',
      });
  });
};





//reset password
export const resetPassword = async (req, res) => {
  const { resetToken, newPassword } = req.body;

  // Find the user by the reset token and check if the token has expired
  const user = await User.findOne({ passwordResetToken: resetToken, passwordResetExpires: { $gt: Date.now() } });

  if (!user) {
    return res.status(400).json({ success: false, message: 'Invalid or expired reset token' });
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
    message: 'Password has been reset successfully.',
  });
};
