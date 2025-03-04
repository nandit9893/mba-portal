// models/Application.js
import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    resume: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "shortlisted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Application", ApplicationSchema);