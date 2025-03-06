import express from "express";
import { uploadProfile, createProfile,getProfile } from "../controllers/profileController.js";
// import { authenticateUser } from "../middleware/authMiddleware.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";
const router = express.Router();

// Profile Route with File Upload
// ✅ Protect profile creation with authentication
router.post("/profile", authenticateUser, uploadProfile, createProfile);
// router.post("/profile", uploadProfile, createProfile);
router.get("/getProfile", authenticateUser, getProfile);
export default router;