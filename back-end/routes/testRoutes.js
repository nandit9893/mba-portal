import express from "express";
import { testPostController } from "../controllers/testController.js";
import userAuth from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routes
router.post("/test-post", userAuth, testPostController);

//export
<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> 3907a04e3d9b602bbb87b7defc49d693bb290a63
