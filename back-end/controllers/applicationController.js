// controllers/applicationController.js
import applicationModel from "../models/applicationModel.js";

export const applyJob = async (req, res) => {
  try {
    const { jobId, resume } = req.body;
    const newApplication = new Application({
      candidate: req.user.userId,
      job: jobId,
      resume,
    });
    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
















/*import Application from "../models/applicationModel.js"; 
import { authMiddleware } from "../middlewares/authMiddleware.js";
// Ensure correct import
import Job from "../models/job.js"; // Assuming you have a Job model

// Apply for a job
export const applyForJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { status } = req.body; // Allow setting status, e.g., "Applied", "Shortlisted", etc.

    // Check if the job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    // Create the application
    const application = new Application({
      candidate: req.user._id,
      job: jobId,
      status: status || 'Applied', // Default to 'Applied' if no status is provided
    });

    await application.save();

    return res.status(201).json({ success: true, application });
  } catch (error) {
    console.error('Error applying for job:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

// Get applications for a specific job
export const getApplications = async (req, res) => {
  try {
    const { jobId } = req.params;

    // Get all applications for the job
    const applications = await Application.find({ job: jobId }).populate('candidate', 'name email');

    if (applications.length === 0) {
      return res.status(404).json({ success: false, message: 'No applications found for this job' });
    }

    return res.status(200).json({ success: true, applications });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};*/