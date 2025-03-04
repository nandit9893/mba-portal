import express from "express";
import { updateUserController } from "../controllers/userController.js";
import userAuth from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routes
// GET USERS || GET

// UPDATE USER || PUT
router.put("/update-user", userAuth, updateUserController);
<<<<<<< HEAD
=======

export default router;
>>>>>>> 3907a04e3d9b602bbb87b7defc49d693bb290a63

export default router;