import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    category: { type: String, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    experience: { type: String, required: true },
    jobDescription: { type: String, required: true },
    skills: { type: [String], required: true },
    jobTitle: { type: String, required: true },
    jobPackage: { type: Number, required: false },
    company: { type: String, required: true },
    companyLogo: { type: String, required: false }, 
    keyResponsibilities: { type: [String], required: false }, 
    createdAt: { type: Date, default: Date.now },

    // ✅ Add `createdBy` to track which admin posted the job
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true }
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
