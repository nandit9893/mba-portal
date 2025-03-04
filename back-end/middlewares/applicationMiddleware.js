import Application from '../models/applicationModel.js';

// Middleware to check if the user has already applied for the job
export const checkAlreadyApplied = async (req, res, next) => {
  const jobId = req.params.jobId;

  // Check if the candidate has already applied for the job
  const existingApplication = await Application.findOne({ candidate: req.user._id, job: jobId });
  if (existingApplication) {
    return res.status(400).json({ message: 'You have already applied for this job' });
  }

  // If not applied, proceed to the next middleware/route
  next();
};
