"use client";
import React, { useState } from "react";

const ProfileForm = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [resume, setResume] = useState(null);

  const handleProfileChange = (event) => {
    setProfilePic(event.target.files[0]);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleUpload = (type) => {
    if (type === "profile" && profilePic) {
      alert(`Profile Picture Uploaded: ${profilePic.name}`);
    } else if (type === "resume" && resume) {
      alert(`Resume Uploaded: ${resume.name}`);
    } else {
      alert("Please select a file to upload.");
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-300 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
       

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["First Name", "Last Name"].map((label, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center md:space-x-4">
                <label className="text-black font-medium w-40 text-right">{label} :</label>
                <input type="text" className="p-2 w-full bg-white border rounded-full shadow-sm" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Email ID", "Phone Number", "Date of Birth", "Gender"].map((label, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center md:space-x-4">
                <label className="text-black font-medium w-40 text-right">{label} :</label>
                {label === "Date of Birth" ? (
                  <input type="date" className="p-2 w-full bg-white border rounded-full shadow-sm" />
                ) : label === "Gender" ? (
                  <select className="p-2 w-full bg-white border rounded-full shadow-sm">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <input type="text" className="p-2 w-full bg-white border rounded-full shadow-sm" />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-x-4 mt-4">
            <label className="text-black font-medium w-32">Profile Picture :</label>
            <input
              type="file"
              onChange={handleProfileChange}
              className="block w-full md:w-60 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
            <button
              type="button"
              onClick={() => handleUpload("profile")}
              className="bg-green-400 text-black px-4 py-2 rounded-md hover:bg-green-500 transition duration-300"
            >
              Upload
            </button>
          </div>
        </form>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-bold text-center mb-6">Education Details</h2>

        <form className="space-y-4">
          {["Highest Degree", "University", "Passing Year", "Skills", "Experience"].map((label, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <label className="text-black font-medium w-40 text-right">{label} :</label>
              <input type="text" className="p-2 w-full bg-white border rounded-full shadow-sm" />
            </div>
          ))}

          <div className="flex flex-col md:flex-row md:items-center space-x-4 mt-4">
            <label className="text-black font-medium w-32">Upload Resume :</label>
            <input
              type="file"
              onChange={handleResumeChange}
              className="block w-full md:w-60 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
            <button
              type="button"
              onClick={() => handleUpload("resume")}
              className="bg-green-400 text-black px-4 py-2 rounded-md hover:bg-green-500 transition duration-300"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;