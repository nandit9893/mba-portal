"use client";
import React from "react";
import { FaRegBookmark, FaBell } from "react-icons/fa";
import { BsToggleOn } from "react-icons/bs";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="bg-teal-600 p-4 flex justify-between items-center rounded-xl shadow-md text-white">
      {/* Left Section */}
      <div>
        <p className="text-sm font-medium">Welcome Divya Sain👋</p>
        <p className="text-xs">Here’s what happening with you today.</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <FaRegBookmark className="text-lg cursor-pointer" />
        <BsToggleOn className="text-2xl cursor-pointer" />
        <FaBell className="text-lg cursor-pointer" />
        
        {/* Profile Image */}
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
          <img
            src="logo.jpg" // Change this to the actual image path
            alt="Profile"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav ;
