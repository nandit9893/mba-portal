import express from 'express';
import User from '../models/userModel.js'; // Import the User model and generateToken function
import bcrypt from 'bcryptjs';
import {registerUser, loginUser, getUserProfile, updateUserProfile} from '../controllers/userController.js';
import { protectUser } from '../models/userModel.js'; // Import the auth middleware

const router = express.Router();

// User Signup
router.post("/register", registerUser);

// User Login
router.post("/login", loginUser);

// Get User Profile
router.get("/profile", protectUser, getUserProfile);

// Update User Profile
router.put("/profile", protectUser, updateUserProfile);

// Export the router to be used in the main server file
export default router;