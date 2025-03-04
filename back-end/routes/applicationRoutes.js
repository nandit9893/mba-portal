// routes/applicationRoutes.js
import express from "express";
import { applyJob } from "../controllers/applicationController.js";
import { authenticateUser } from "../middlewares/applicationMiddleware.js";


const router = express.Router();

router.post("/apply", authenticateUser, applyJob);

export default router;