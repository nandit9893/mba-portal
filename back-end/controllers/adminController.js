import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const login = async (req, res) => {
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

// ✅ Exporting as an object
export default { login };
