import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import crypto from "crypto";

// REGISTER CONTROLLER
export const registerController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password || password.length < 6) {
            return res.status(400).json({ success: false, message: "Invalid input fields" });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already registered" });
        }

        // Hash password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = await userModel.create({ name, email, password: hashedPassword });

        // Generate token
        const token = user.createJWT();

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                name: user.name,
                lastName: user.lastName || "",
                email: user.email,
                location: user.location || "",
            },
            token,
        });
    } catch (error) {
        next(error);
    }
};

// LOGIN CONTROLLER
export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate input fields
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Please provide email and password" });
        }

        // Check if user exists
        const user = await userModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        // Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        // Generate token
        const token = user.createJWT();

        // Remove password from response
        user.password = undefined;

        res.status(200).json({
            success: true,
            message: "Login successful",
            user,
            token,
        });
    } catch (error) {
        next(error);
    }
};

// forget password cotroller
export const forgotPasswordController = async (req, res, next) => {
    try {
        const { email } = req.body;

        //check if user exist
        const user = await userModel.findOne({ email });
        if (!user) {
            return next(new Error("User not found with this email"));
        }

        //generate reset token
        const resetToken = user.getResetPasswordToken();
        await user.save();

        //send email (configure nodemailer)
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        //email message
        const resetURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
        const message = `You requested a password reset. Click on the link below to reset your password:\n\n${resetUrl}\n\nThis link is valid for 15 minutes only.`;

        //send email
        await WebTransportError.sendMail({
            from: process.env.SMTP_EMAIL,
            to: user.email,
            subject: "Password Reset Request",
            text: message,
        });

        res.status(200).json({
            success: true,
            message: "Reset password link sent to your email.",
        });
    } catch (error) {
        next(error);
    }
};
// const resetPasswordController = (req, res) => {
//     // Your reset password logic here
//   };
  
//   module.exports = {
//     resetPasswordController,
//   };
