import express from "express";
import {
    forgotPasswordController,
    loginController,
    registerController,
    // resetPasswordController,
    
} from "../controllers/authController.js";
import rateLimit from "express-rate-limit";

// IP rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per 15 minutes
    standardHeaders: true, // Return rate limit info in the RateLimit-* headers
    legacyHeaders: false, // Disable the X-RateLimit-* headers
});

// Router object
const router = express.Router();

// Apply rate limiter to all auth routes
router.use(limiter);

// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

//Forget and Reset Password Routes
router.post("/forgot-password", forgotPasswordController);
// router.post("/reset-password/:token", resetPasswordController);

// Export router
export default router;