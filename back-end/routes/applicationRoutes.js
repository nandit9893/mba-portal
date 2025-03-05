// routes/applicationRoutes.js
import express from "express";
import { applyForJob } from "../controllers/applicationController.js";
import { authenticateUser } from "../middlewares/applicationMiddleware.js";


const router = express.Router();

router.post("/applyForJob", authenticateUser, applyForJob);

export default router;