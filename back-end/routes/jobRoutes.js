import express from "express";
import { createJob,updateJob,listAllJobs,listJobById,deleteJobById,searchJobs,filterJobs} from "../controllers/jobController.js";

const router = express.Router();

// Route for creating a job
router.post("/createJob", createJob);
router.put("/updateJob/:jobId", updateJob);
router.get("/listAllJobs", listAllJobs);
router.get("/listJobById/:jobId", listJobById);
router.delete("/deleteJobById/:jobId", deleteJobById);
router.get("/jobs/search", searchJobs);
router.get("/jobs/filter", filterJobs);
export default router;
