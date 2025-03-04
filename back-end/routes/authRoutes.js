import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
import { requestPasswordReset, resetPassword, logout, verifyToken } from '../controllers/authController.js';


import rateLimit from "express-rate-limit";

//ip limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});






//router object
const router = express.Router();




// REGISTER || POPST
router.post("/register", limiter, registerController);


// LOGIN || POST
router.post("/login", limiter, loginController);

// Request Password Reset (POST)
router.post('/request-password-reset', requestPasswordReset);

// Reset Password (POST)
router.post('/reset-password', resetPassword);

router.post('/logout', verifyToken, logout); // Protect logout route


//export
export default router;