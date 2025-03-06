// routes/applicationRoutes.js
import express from "express";
import { applyForJob,listAllApplications,listApplicationsByUserId } from "../controllers/applicationController.js";
import { authenticateUser } from "../middlewares/applicationMiddleware.js";


const router = express.Router();

router.post("/applyForJob", authenticateUser, applyForJob);
router.get("/listAllApplications", listAllApplications);
<<<<<<< HEAD
router.get("/listApplicationsByUserId/:userId", authenticateUser, listApplicationsByUserId);
=======
// router.get("/listApplicationsByUserId", authenticateUser, listApplicationsByUserId);
router.get("/listApplicationsByUserId", authenticateUser, listApplicationsByUserId);

>>>>>>> 044491d212a181c46638902fa982346c15bc9d54
export default router;