import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Middleware for Authentication
export const protectUser = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await userModel.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            res.status(401).json({ error: "Not authorized, token failed" });
        }
    }
    if (!token) {
        res.status(401).json({ error: "Not authorized, no token" });
    }
};

// *User Registration Controller*
export const registerUser = async (req, res, next) => {
    try {
        const { name, lastName, email, password, location } = req.body;
        if (!name || !lastName || !email || !password || !location) {
            return next(new Error("Please provide all fields"));
        }

        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return next(new Error("User already exists"));
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            name,
            lastName,
            email,
            password: hashedPassword,
            location,
        });

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                _id: user._id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                location: user.location,
            },
            token: generateToken(user._id),
        });
    } catch (error) {
        next(error);
    }
};

// *User Login Controller*
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new Error("Please provide email and password"));
        }

        const user = await userModel.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return next(new Error("Invalid email or password"));
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                location: user.location,
            },
            token: generateToken(user._id),
        });
    } catch (error) {
        next(error);
    }
};

// *Get User Profile*
export const getUserProfile = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user.id);
        if (!user) {
            return next(new Error("User not found"));
        }

        res.status(200).json({
            success: true,
            user: {
                _id: user._id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                location: user.location,
            },
        });
    } catch (error) {
        next(error);
    }
};

// *Update User Profile*
export const updateUserProfile = async (req, res, next) => {
    try {
        const { name, lastName, email, location } = req.body;
        if (!name || !lastName || !email || !location) {
            return next(new Error("Please provide all fields"));
        }

        const user = await userModel.findById(req.user.id);
        if (!user) {
            return next(new Error("User not found"));
        }

        user.name = name;
        user.lastName = lastName;
        user.email = email;
        user.location = location;

        await user.save();
        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user: {
                _id: user._id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                location: user.location,
            },
            token,
        });
    } catch (error) {
        next(error);
    }
};