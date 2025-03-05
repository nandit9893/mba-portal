import express from "express";
import { uploadProfile, createProfile } from "../controllers/profileController.js";

const router = express.Router();

// Profile Route with File Upload
router.post("/profile", uploadProfile, createProfile);

export default router;