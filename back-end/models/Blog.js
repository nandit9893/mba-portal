import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { 
        type: String, 
        required: true,
        enum: ["Technology", "Health", "Education", "Business"] // Add valid categories here
    },
    content: { type: String, required: true },
    image: { type: String, default: "" },
    status: { type: String, enum: ["Draft", "Published", "Scheduled"], default: "Draft" },
    scheduledDate: { type: Date },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
