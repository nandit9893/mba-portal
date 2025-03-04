import Admin from "../models/Admin.js";  // Importing Admin model
import jwt from "jsonwebtoken";  // Importing jsonwebtoken to generate the JWT token
import userModel from "../models/userModel.js";  // Importing User model
import Job from "../models/Job.js";  // Correct import
// Importing Job model

// Dashboard Data (total users and jobs)
export const getDashboardData = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalJobs = await Job.countDocuments();
        res.json({ totalUsers, totalJobs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Admin Login
export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });

        if (admin && (await admin.matchPassword(password))) {
            res.json({
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                token: generateToken(admin._id),
            });
        } else {
            res.status(401).json({ error: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin Registration
export const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const adminExists = await Admin.findOne({ email });

        if (adminExists) {
            return res.status(400).json({ error: "Admin already exists" });
        }

        const admin = await Admin.create({ name, email, password });

        if (admin) {
            res.status(201).json({
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                token: generateToken(admin._id),
            });
        } else {
            res.status(400).json({ error: "Invalid admin data" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
