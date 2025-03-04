import express from "express";
import { createJob,updateJob,listAllJobs,listJobById,deleteJobById } from "../controllers/jobController.js";

const router = express.Router();

// Route for creating a job
router.post("/createJob", createJob);
router.put("/updateJob/:jobId", updateJob);
router.get("/listAllJobs", listAllJobs);
router.get("/listJobById/:jobId", listJobById);
router.delete("/deleteJobById/:jobId", deleteJobById);


export default router;
