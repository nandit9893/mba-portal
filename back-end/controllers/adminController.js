const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Register a new Admin
exports.register = async (req, res) => {
    const { username, password, mobileNumber, position, salary } = req.body;

    try {
        // Check if username exists
        let adminExists = await Admin.findOne({ username });
        if (adminExists) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Create new admin
        const admin = new Admin({
            username,
            password,
            mobileNumber,
            position,
            salary
        });

        await admin.save();

        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Login Admin (Already provided)
exports.login = async (req, res) => {
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
                { expiresIn: '1d' }
            );
            res.json({ token, mobileNumber: admin.mobileNumber, position: admin.position, salary: admin.salary });
        } else {
            res.status(401).json({ message: 'Invalid Credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
