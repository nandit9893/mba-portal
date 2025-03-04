import express from "express";
import { createUserProfile, getUserProfile, updateUserProfile } from "../controllers/userProfileController.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/", upload.fields([{ name: "profilePicture" }, { name: "resume" }]), createUserProfile);
router.get("/:email", getUserProfile);
router.put("/:email", updateUserProfile);

export default router;