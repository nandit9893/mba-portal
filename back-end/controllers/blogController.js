import Blog from "../models/Blog.js";
import path from "path";
import multer from "multer";
import moment from "moment";
// Create a new blog
// Import Blog model
import fs from "fs";
// import Admin from '../models/Admin.js';
// Create a new blog
// Ensure upload directory exists
// Ensure upload directory exists
const uploadPath = path.join("public", "uploads");
fs.mkdirSync(uploadPath, { recursive: true });

// Multer storage setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).single("image");

export const createBlog = async (req, res, next) => {
    try {
        // Ensure admin is authenticated
        if (!req.admin) {
            return res.status(401).json({ success: false, message: "Not authorized" });
        }

        upload(req, res, async function (err) {
            if (err) return res.status(500).json({ success: false, error: err.message });

            try {
                const { title, category, content, status, scheduledDate } = req.body;

                // Validate required fields
                if (!title || !category || !content) {
                    return res.status(400).json({ success: false, message: "Title, category, and content are required" });
                }

                // Construct image URL if file is uploaded
                let imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

                // Create a new blog
                const newBlog = await Blog.create({
                    title,
                    category,
                    content,
                    image: imageUrl,
                    status: status || "Draft",
                    scheduledDate: status === "Scheduled" ? moment(scheduledDate).toDate() : null,
                    author: req.admin._id, // Admin ID from token
                    createdAt: moment().utcOffset("+05:30").toDate(),
                });

                res.status(201).json({
                    success: true,
                    message: "Blog created successfully",
                    blog: newBlog,
                });
            } catch (error) {
                next(error);
            }
        });
    } catch (error) {
        next(error);
    }
};



// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Get a single blog
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    res.status(200).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Update blog
export const updateBlog = async (req, res) => {
  try {
      upload(req, res, async function (err) {
          if (err) return res.status(500).json({ success: false, error: err.message });

          try {
              const { title, category, content, status, scheduledDate } = req.body;
              const { id } = req.params; // Get ID from URL parameters

              // Find the existing blog by ID
              let blog = await Blog.findById(id);
              if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

              // Update fields if new values are provided
              blog.title = title || blog.title;
              blog.category = category || blog.category;
              blog.content = content || blog.content;
              blog.status = status || blog.status;
              blog.scheduledDate = status === "Scheduled" ? moment(scheduledDate).toDate() : blog.scheduledDate;

              // If a new image is uploaded, update the image path
              if (req.file) {
                  blog.image = `/uploads/${req.file.filename}`;
              }

              await blog.save();
              res.status(200).json({ success: true, message: "Blog updated successfully", blog });
          } catch (error) {
              res.status(500).json({ success: false, message: "Server error", error: error.message });
          }
      });
  } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};


// Delete blog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params; // Get ID from URL params

    if (!id) {
      return res.status(400).json({ success: false, message: "Blog ID is required" });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    await blog.deleteOne();
    res.status(200).json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

