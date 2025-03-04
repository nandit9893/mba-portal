import mongoose from "mongoose";

// Define the schema for the Job model
const jobSchema = new mongoose.Schema({
    category: { type: String, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    experience: { type: String, required: true },
    jobDescription: { type: String, required: true },
    skills: { type: [String], required: true },
    jobTitle: { type: String, required: true },
    jobPackage: { type: String, required: false },
    company: { type: String, required: true },
    companyLogo: { type: String, required: false },
    keyResponsibilities: { type: [String], required: false },
   
    createdAt: { type: Date, default: Date.now },
});

// Check if the model already exists before defining it again
const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;

