import path from "path";
import Application from "../models/Application.js";
import Job from "../models/job.js";
import fs from "fs";
import multer from "multer";

// 🟢 Apply for a Job (Protected Route)
// Set up resume upload directory
const resumeUploadPath = path.join("public", "uploads", "resumes");

// Ensure the upload directory exists
fs.mkdirSync(resumeUploadPath, { recursive: true });

// Multer storage settings
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, resumeUploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Multer file filter to allow only PDF and Word files
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = [".pdf", ".docx", ".doc"];
    const ext = path.extname(file.originalname).toLowerCase();

    if (allowedFileTypes.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error("Only PDF and Word documents are allowed"), false);
    }
};

const uploadResume = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
}).single("resume");

export const applyForJob = async (req, res) => {
    uploadResume(req, res, async function (err) {
        if (err) return res.status(400).json({ success: false, error: err.message });

        try {
            const { jobId } = req.body;
            const candidateId = req.user.userId; // Extracted from authenticated user's token

            // Validate inputs
            if (!jobId) {
                return res.status(400).json({ success: false, message: "Job ID is required" });
            }

            // Fetch job details based on jobId
            const job = await Job.findById(jobId);
            if (!job) {
                return res.status(404).json({ success: false, message: "Job not found" });
            }

            // Prevent duplicate applications
            const existingApplication = await Application.findOne({ candidate: candidateId, job: jobId });
            if (existingApplication) {
                return res.status(400).json({ success: false, message: "You have already applied for this job" });
            }

            // Construct resume URL if a file is uploaded
            let resumeUrl = null;
            if (req.file) {
                resumeUrl = `${req.protocol}://${req.get("host")}/uploads/resumes/${req.file.filename}`;
            }

            // Create new job application
            const application = new Application({
                candidate: candidateId,
                job: jobId,
                resume: resumeUrl, // Store resume URL
                status: "pending",
            });

            await application.save();

            res.status(201).json({
                success: true,
                message: "Job application submitted successfully",
                application
            });
        } catch (error) {
            res.status(500).json({ success: false, message: "Server error", error: error.message });
        }
    });
};
