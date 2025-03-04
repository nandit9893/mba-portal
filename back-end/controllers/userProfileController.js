import UserProfile from "../models/userProfileModel.js";

// Create User Profile
export const createUserProfile = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, gender, dob, highestDegree, university, passingYear, skills, experience } = req.body;

    const profilePicture = req.files["profilePicture"] ? req.files["profilePicture"][0].path : null;
    const resume = req.files["resume"] ? req.files["resume"][0].path : null;

    const newProfile = await UserProfile.create({
      firstName, lastName, email, phone, gender, dob,
      profilePicture,
      education: { highestDegree, university, passingYear, skills, experience },
      resume
    });

    res.status(201).json({ success: true, data: newProfile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ email: req.params.email });
    if (!profile) {
      return res.status(404).json({ success: false, message: "Profile not found" });
    }
    res.json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update User Profile
export const updateUserProfile = async (req, res) => {
  try {
    const updatedProfile = await UserProfile.findOneAndUpdate(
      { email: req.params.email },
      { $set: req.body },
      { new: true }
    );
    res.json({ success: true, data: updatedProfile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};