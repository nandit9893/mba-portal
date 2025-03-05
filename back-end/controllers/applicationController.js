import Application from "../models/Application.js";

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
