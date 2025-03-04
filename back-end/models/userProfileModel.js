import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    profilePicture: { type: String },
    education: {
      highestDegree: { type: String, required: true },
      university: { type: String, required: true },
      passingYear: { type: Number, required: true },
      skills: [{ type: String }],
      experience: { type: String, required: true },
    },
    resume: { type: String },
  },
  { timestamps: true }
);

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;