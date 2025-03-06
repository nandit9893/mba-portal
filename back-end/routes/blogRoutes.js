import express from "express";
import { createBlog,getAllBlogs,getBlogById,updateBlog,deleteBlog} from "../controllers/blogController.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/createBlog", protectAdmin, createBlog);
router.put("/updateBlog/:id", protectAdmin, updateBlog);
// Route to get all blogs (Public)
router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlogById/:id", getBlogById);
router.delete("/deleteBlog/:id", deleteBlog);

export default router;
