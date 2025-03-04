"use client";
import React, { useState } from "react";
import { FaTachometerAlt, FaUsersCog, FaBriefcase, FaCreditCard, FaBlog, FaSearch, FaQuestionCircle, FaFileAlt, FaEnvelope, FaCog, FaTicketAlt, FaQuestion, FaSignOutAlt } from "react-icons/fa";

const Side = () => {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <div className="w-64 bg-teal-600 text-white p-4 flex flex-col min-h-screen">
      {/* Logo */}
      <div className="flex items-center text-lg font-bold mb-6">
        <span className="mr-2">💼</span> JOB PORTAL
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-4">
        <a href="#" className="flex items-center space-x-2 text-white hover:opacity-75">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-white hover:opacity-75">
          <FaUsersCog />
          <span>User Management</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-white hover:opacity-75">
          <FaBriefcase />
          <span>Job Management</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-white hover:opacity-75">
          <FaCreditCard />
          <span>Payment</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-white hover:opacity-75">
          <FaBlog />
          <span>Blog</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-white hover:opacity-75">
          <FaSearch />
          <span>Job Search</span>
        </a>

        {/* Help and Support Section */}
        <button onClick={() => setIsHelpOpen(!isHelpOpen)} className="flex items-center space-x-2 text-white hover:opacity-75 w-full text-left">
          <FaQuestionCircle />
          <span>Help and Support</span>
          <span>{isHelpOpen ? "▲" : "▼"}</span>
        </button>
        {isHelpOpen && (
          <div className="flex flex-col space-y-2 mt-2 ml-4">
            <a href="#" className="flex items-center space-x-2 text-white hover:opacity-75">
              <FaFileAlt />
              <span>Reports</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-white hover:opacity-75">
              <FaEnvelope />
              <span>Email Support</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-white hover:opacity-75">
              <FaCog />
              <span>Settings</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-white hover:opacity-75">
              <FaTicketAlt />
              <span>Support Ticket</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-white hover:opacity-75">
              <FaQuestion />
              <span>FAQ</span>
            </a>
          </div>
        )}

        {/* Logout Button - Just Below FAQ */}
        <div className="flex justify-center items-center mt-6">
          <button className="bg-gray-300 hover:bg-gray-400 p-4 rounded-2xl flex items-center justify-center w-32 h-16 shadow-lg">
            <FaSignOutAlt className="text-black text-2xl" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Side;
