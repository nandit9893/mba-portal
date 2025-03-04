import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });

        if (admin && (await bcrypt.compare(password, admin.password))) {
            const token = jwt.sign(
                { 
                    id: admin._id, 
                    username, 
                    mobileNumber: admin.mobileNumber, 
                    position: admin.position, 
                    salary: admin.salary 
                }, 
                process.env.JWT_SECRET, 
                { expiresIn: '1d' }  // Token expires in 1 day
            );
            res.json({ token, mobileNumber: admin.mobileNumber, position: admin.position, salary: admin.salary });
        } else {
            res.status(401).json({ message: 'Invalid Credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const register = async (req, res) => {
    const { username, password, mobileNumber, position, salary } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({
            username,
            password: hashedPassword,
            mobileNumber,
            position,
            salary
        });
        await newAdmin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// ✅ Logout API
export const logout = async (req, res) => {
    try {
        // The client should remove the token from local storage or session
        res.json({ message: "Logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
