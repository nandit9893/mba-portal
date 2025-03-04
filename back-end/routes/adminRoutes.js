// adminRoutes.js

import express from "express";
import { getDashboardData } from "../controllers/adminController.js"; // Correctly import the named function
import { userAuth } from "../middlewares/authMiddleware.js"; // Make sure this is correct

const router = express.Router();

// Define the routes
router.get("/dashboard", userAuth, getDashboardData);  // Use getDashboardData directly

// Export the router
export default router;

