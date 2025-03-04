import express from 'express';
import { applyForJob, getApplications } from '../controllers/applicationController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { checkAlreadyApplied } from '../middlewares/applicationMiddleware.js';

const router = express.Router();

// Route for candidates to apply for a job
router.post('/apply-job/:jobId', authMiddleware, checkAlreadyApplied, applyForJob);

// Route for employers to view applicants for a particular job
router.get('/applications/:jobId', authMiddleware, getApplications);

export default router;
