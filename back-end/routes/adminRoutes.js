import express from 'express';
import { loginAdmin, registerAdmin, logoutAdmin } from '../controllers/adminController.js';

const router = express.Router();

// Admin Authentication Routes
router.post('/login', loginAdmin);
router.post('/register', registerAdmin);
router.post('/logout', logoutAdmin);

export default router;
