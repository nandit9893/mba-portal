// import Job from "../models/job.js";

// export const createJob = async (req, res, next) => {
//     try {
//         const { category, location, jobType, experience, jobDescription, skills, jobTitle, jobPackage, company, workingMode } = req.body;

//         // Validate required fields
//         if (!category || !location || !jobType || !experience || !jobDescription || !skills || !jobTitle || !company || !workingMode) {
//             return res.status(400).json({ success: false, message: "All required fields must be filled" });
//         }

//         // Create a new job listing
//         const newJob = await Job.create({
//             category,
//             location,
//             jobType,
//             experience,
//             jobDescription,
//             skills,
//             jobTitle,
//             jobPackage,
//             company,
//             workingMode
//         });

//         res.status(201).json({
//             success: true,
//             message: "Job created successfully",
//             job: newJob
//         });
//     } catch (error) {
//         next(error); // Pass error to global error handler middleware
//     }
// };
import path from "path";
import multer from "multer";
import moment from "moment";
import Job from "../models/job.js";

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join("public", "uploads");
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
            if (!category || !location || !jobType || !experience || !jobDescription || !skills || !jobTitle || !company ) {
                return res.status(400).json({ success: false, message: "All required fields must be filled" });
            }

            // Construct image URL if file is uploaded
            const imageUrl = req.file ? `${req.protocol}://${req.get("host")}/public/uploads/${req.file.filename}` : null;

            // Convert `skills` and `keyResponsibilities` to arrays if they're JSON strings
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

