import express from 'express';
import { login, register, logout } from '../controllers/adminController.js';

const router = express.Router();

// Admin Authentication Routes
router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);

export default router;
