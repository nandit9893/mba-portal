import express from "express";
import { 
    applyForJob, 
    listAllApplications, 
    listApplicationsByUserId, 
    listApplicationsByAdmin 
} from "../controllers/applicationController.js";
import { authenticateUser } from "../middlewares/applicationMiddleware.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";  // Import protectAdmin middleware

const router = express.Router();

router.post("/applyForJob", authenticateUser, applyForJob);
router.get("/listAllApplications", listAllApplications);
router.get("/listApplicationsByUserId", authenticateUser, listApplicationsByUserId);
router.get("/admin/listApplicationsByAdmin", protectAdmin, listApplicationsByAdmin); // Use protectAdmin

export default router;
