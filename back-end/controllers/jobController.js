
import path from "path";
import multer from "multer";
import moment from "moment";
import Job from "../models/job.js";
import fs from "fs";
// Multer storage configuration
// Multer storage configuration
const uploadPath = path.join("public", "uploads");

// Ensure the upload directory exists
fs.mkdirSync(uploadPath, { recursive: true });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

export const createJob = (req, res, next) => {
    upload.single("companyLogo")(req, res, async function (err) {
        if (err) return res.status(500).json({ success: false, error: err.message });

        try {
            const { category, location, jobType, experience, jobDescription, skills, jobTitle, jobPackage, company, keyResponsibilities } = req.body;

            // Validate required fields
            if (!category || !location || !jobType || !experience || !jobDescription || !skills || !jobTitle || !company) {
                return res.status(400).json({ success: false, message: "All required fields must be filled" });
            }

            // Construct image URL if file is uploaded
            let imageUrl = null;
            if (req.file) {
                imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
            }

            // Convert `skills` and `keyResponsibilities` to arrays if they are JSON strings
            const skillsArray = Array.isArray(skills) ? skills : JSON.parse(skills || "[]");
            const keyResponsibilitiesArray = Array.isArray(keyResponsibilities) ? keyResponsibilities : JSON.parse(keyResponsibilities || "[]");

            // Create a new job listing
            const newJob = await Job.create({
                category,
                location,
                jobType,
                experience,
                jobDescription,
                skills: skillsArray,
                jobTitle,
                jobPackage,
                company,
                keyResponsibilities: keyResponsibilitiesArray,
                companyLogo: imageUrl,
                created_date: moment().utcOffset("+05:30").format("DD MMM, YYYY hh:mm a"),
                updated_date: moment().utcOffset("+05:30").format("DD MMM, YYYY hh:mm a"),
            });

            res.status(201).json({
                success: true,
                message: "Job created successfully",
                job: newJob
            });
        } catch (error) {
            next(error);
        }
    });
};



export const updateJob = (req, res) => {
    upload.single("companyLogo")(req, res, async function (err) {
        if (err) return res.status(500).json({ error: err.message });

        try {
            const { jobId } = req.params; // Assuming jobId is passed in URL params
            const body = req.body;
            console.log("Update Request Body:", body);

            // Find the existing job
            const existingJob = await Job.findById(jobId);
            if (!existingJob) {
                return res.status(404).json({ success: false, message: "Job not found" });
            }

            // Construct image URL if a new file is uploaded, else retain the old one
            const imageUrl = req.file 
                ? `${req.protocol}://${req.get("host")}/public/uploads/${req.file.filename}`
                : existingJob.companyLogo;

            // Convert `skills` and `keyResponsibilities` to arrays if they're JSON strings
            const skillsArray = Array.isArray(body.skills) ? body.skills : JSON.parse(body.skills || "[]");
            const keyResponsibilitiesArray = Array.isArray(body.keyResponsibilities) ? body.keyResponsibilities : JSON.parse(body.keyResponsibilities || "[]");

            // Update job fields
            existingJob.category = body.category || existingJob.category;
            existingJob.location = body.location || existingJob.location;
            existingJob.jobType = body.jobType || existingJob.jobType;
            existingJob.experience = body.experience || existingJob.experience;
            existingJob.jobDescription = body.jobDescription || existingJob.jobDescription;
            existingJob.skills = skillsArray.length > 0 ? skillsArray : existingJob.skills;
            existingJob.jobTitle = body.jobTitle || existingJob.jobTitle;
            existingJob.jobPackage = body.jobPackage || existingJob.jobPackage;
            existingJob.company = body.company || existingJob.company;
            existingJob.keyResponsibilities = keyResponsibilitiesArray.length > 0 ? keyResponsibilitiesArray : existingJob.keyResponsibilities;
            existingJob.companyLogo = imageUrl;
            existingJob.updated_date = moment().utcOffset("+05:30").format("DD MMM, YYYY hh:mm a");

            // Save updated job
            await existingJob.save();

            res.json({ success: true, message: "Job updated successfully", job: existingJob });
        } catch (error) {
            console.error("Error in updateJob:", error);
            res.status(500).json({ error: error.message || "Failed to update job" });
        }
    });
};

export const listAllJobs = async (req, res, next) => {
    try {
        // Fetch all jobs from the database
        const jobs = await Job.find();

        // Check if there are any jobs
        if (!jobs || jobs.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No jobs found"
            });
        }

        // Return the list of jobs
        res.status(200).json({
            success: true,
            jobs
        });
    } catch (error) {
        next(error);
    }
};

export const listJobById = async (req, res, next) => {
    try {
        const { jobId } = req.params; // Extract job ID from URL params

        // Find job by ID
        const job = await Job.findById(jobId);

        // Check if job exists
        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }

        // Return job details
        res.status(200).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    }
};

export const deleteJobById = async (req, res, next) => {
    try {
        const { jobId } = req.params; // Extract job ID from URL params

        // Find and delete the job
        const deletedJob = await Job.findByIdAndDelete(jobId);

        // Check if job exists
        if (!deletedJob) {
            return res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Job deleted successfully",
            job: deletedJob
        });
    } catch (error) {
        next(error);
    }
};
export const searchJobs = async (req, res, next) => {
    try {
        const { jobTitle, location, experience, jobPackage, category, jobType } = req.query;

        let filter = {};

        // 🔹 Apply text-based filters (case-insensitive)
        if (jobTitle) filter.jobTitle = { $regex: `^${jobTitle.trim()}$`, $options: "i" };
        if (location) filter.location = { $regex: `^${location.trim()}$`, $options: "i" };
        if (experience) filter.experience = { $regex: `^${experience.trim()}$`, $options: "i" };
        if (category) filter.category = { $regex: `^${category.trim()}$`, $options: "i" };
        if (jobType) filter.jobType = { $regex: `^${jobType.trim()}$`, $options: "i" };

        // ✅ Correct Salary Range Filtering
        if (jobPackage) {
            const salaryRange = jobPackage.split("-").map(Number);
            if (salaryRange.length === 2 && !isNaN(salaryRange[0]) && !isNaN(salaryRange[1])) {
                filter.jobPackage = { $gte: salaryRange[0], $lte: salaryRange[1] };
            } else {
                console.log("❌ Invalid salary range format:", jobPackage);
            }
        }

        console.log("🔎 Filter Used:", JSON.stringify(filter, null, 2));

        const jobs = await Job.find(filter);

        console.log("✅ Jobs Found:", jobs.length ? jobs : "No jobs found");

        if (!jobs.length) {
            return res.status(404).json({ success: false, message: "No jobs found" });
        }

        res.status(200).json({ success: true, jobs });
    } catch (error) {
        console.error("❌ Error:", error);
        next(error);
    }
};



export const filterJobs = async (req, res) => {
    try {
        const filterCriteria = req.query;
        const filter = {};

        if (filterCriteria.category) {
            filter.category = { $regex: `.*${filterCriteria.category.trim()}.*`, $options: "i" };
        }
        if (filterCriteria.jobType) {
            filter.jobType = { $regex: `.*${filterCriteria.jobType.trim()}.*`, $options: "i" };
        }
        if (filterCriteria.experience) {
            filter.experience = { $regex: `.*${filterCriteria.experience.trim()}.*`, $options: "i" };
        }
        if (filterCriteria.jobPackage) {
            filter.jobPackage = parseInt(filterCriteria.jobPackage);
        }
        if (filterCriteria.createdAt) {
            const [startDate, endDate] = filterCriteria.createdAt.split("to").map(date => new Date(date.trim()));
            if (!isNaN(startDate) && !isNaN(endDate)) {
                filter.createdAt = { $gte: startDate, $lte: endDate };
            }
        }

        console.log("Applying Filters:", JSON.stringify(filter, null, 2));

        // Fetch all fields but add a custom 'details' field
        const jobs = await Job.find(filter);

        if (!jobs.length) {
            return res.status(404).json({
                success: false,
                message: "No jobs found with the selected filters",
            });
        }

        console.log(" Filtered Jobs Found:", jobs.length);

        // Modify job data to include 'details' array
        const formattedJobs = jobs.map(job => ({
            ...job.toObject(), // Convert Mongoose document to plain object
            details: [
                job.category,
                job.jobType,
                `${job.jobPackage} LPA`, // Format job package
                job.location
            ]
        }));

        return res.status(200).json({
            success: true,
            jobs: formattedJobs
        });
    } catch (error) {
        console.error(" Error Filtering Jobs:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

