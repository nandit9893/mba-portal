import path from "path";
import fs from "fs";
import multer from "multer";
import { fileURLToPath } from "url";
import userModel from "../models/userModel.js";

// ✅ Corrected __filename and __dirname
const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

// ✅ Ensure "uploads" directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true }); // Recursive ensures parent dirs exist
}

// ✅ Configure Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save files in "uploads" folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix); // Generate unique filename
  },
});

const upload = multer({ storage: storage });

// ✅ Middleware for Profile Picture Upload
export const uploadProfile = upload.single("profilePicture");

// ✅ Create Profile Controller
export const createProfile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Profile picture is required!" });
    }

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
      dob,
      highestDegree,
      university,
      passingYear,
      skills,
      experience,
    } = req.body;

    // ✅ Simulate Saving to Database (Replace with actual DB logic)
    const profileData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
      dob,
      highestDegree,
      university,
      passingYear,
      skills: skills ? skills.split(",") : [], // Convert skills to array
      experience,
      profilePicture: `/uploads/${req.file.filename}`, // Save relative file path
    };

    res
      .status(201)
      .json({ message: "Profile created successfully!", profile: profileData });
  } catch (error) {
    console.error("Error creating profile:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

