import Job from "../models/job.js";
import moment from "moment";

export const jobDisplay = async (req, res) => {
    try {
        // Fetch all jobs from the database
        const jobs = await Job.find({}, "jobTitle createdAt");

        // Map jobs to include calculated endDate (30 days after createdAt)
        const jobData = jobs.map(job => ({
            jobTitle: job.jobTitle,
            createdAt: moment(job.createdAt).format("DD MMM, YYYY"),
            endDate: moment(job.createdAt).add(30, 'days').format("DD MMM, YYYY")
        }));

        res.json({ success: true, jobs: jobData });
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ success: false, message: "Failed to fetch job data" });
    }
};





export const jobSearch = async (req, res) => {
    try {
        const { jobTitle, company, createdAt, endDate } = req.query;

        let filter = {};

        if (jobTitle) {
            filter.jobTitle = { $regex: jobTitle, $options: "i" };
        } else if (company) {
            filter.company = { $regex: company, $options: "i" };
        } else if (createdAt) {
            filter.createdAt = { 
                $gte: new Date(createdAt), 
                $lt: new Date(new Date(createdAt).setDate(new Date(createdAt).getDate() + 1)) 
            };
        } else if (endDate) {
            const startDate = moment(endDate, "YYYY-MM-DD").subtract(30, "days").toDate();
            filter.createdAt = { 
                $gte: startDate, 
                $lt: new Date(new Date(startDate).setDate(startDate.getDate() + 1))
            };
        } else {
            return res.status(400).json({ success: false, message: "Please provide either jobTitle, company, createdAt, or endDate to search." });
        }

        // Search for jobs based on the selected field
        const jobs = await Job.find(filter).select("_id jobTitle company createdAt");

        if (jobs.length === 0) {
            return res.status(404).json({ success: false, message: "No jobs found" });
        }

        // Add endDate (30 days after createdAt) and shorten jobId
        const jobResults = jobs.map(job => ({
            jobId: job._id.toString().substring(0, 4),  // Extract only first 4 characters of _id
            jobTitle: job.jobTitle,
            company: job.company,
            createdAt: moment(job.createdAt).format("YYYY-MM-DD"),
            endDate: moment(job.createdAt).add(30, "days").format("YYYY-MM-DD")
        }));

        res.json({ success: true, jobs: jobResults });
    } catch (error) {
        console.error("Error in jobSearch:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
