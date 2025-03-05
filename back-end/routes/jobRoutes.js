import express from "express";
import { createJob,updateJob,listAllJobs,listJobById,deleteJobById,searchJobs,filterJobs} from "../controllers/jobController.js";

import { jobDisplay,jobSearch } from "../controllers/jobdashboard.js"; 
const router = express.Router();

// Route for creating a job
router.post("/createJob", createJob);
router.put("/updateJob/:jobId", updateJob);
router.get("/listAllJobs", listAllJobs);
router.get("/listJobById/:jobId", listJobById);
router.delete("/deleteJobById/:jobId", deleteJobById);
router.get("/jobs/search", searchJobs);
router.get("/jobs/filter", filterJobs);

// ✅ Add a new route to display job details with calculated end date
router.get("/jobDisplay", jobDisplay);
router.get("/jobSearch", jobSearch);
export default router;
