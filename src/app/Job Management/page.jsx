'use client';

import { useState } from 'react';
import { FiBell, FiSearch, FiToggleRight } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { MdDashboard, MdEmail, MdEmojiObjects, MdFormatQuote, MdLogin, MdMap, MdPayment, MdReport, MdSettings, MdSupport, MdSupportAgent, MdWork } from 'react-icons/md';
import { BiSolidHelpCircle } from 'react-icons/bi';
import { AiOutlineBarChart } from 'react-icons/ai';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const data = [
    { name: 'Active', value: 62, color: '#309689' },
    { name: 'Pending', value: 13, color: '#FFC107' },
    { name: 'Shortlisted', value: 23, color: '#2196F3' }
  ];
  return (
    <div className="flex h-screen bg-[#d4edda] text-black">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-[#309689] text-white p-5 transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} md:translate-x-0`}>
        <h2 className="text-2xl font-bold">JOB PORTAL 📦</h2>
        <nav className="mt-5 space-y-4">
          <ul className="space-y-4">
            <li className="flex items-center space-x-2 cursor-pointer"><MdDashboard /><span>Dashboard</span></li>
            <li className="flex items-center space-x-2 cursor-pointer"><MdWork /><span>User Management</span></li>
            <li className="flex items-center space-x-2 cursor-pointer"><MdEmojiObjects /><span>Job Management</span></li>
            <li className="flex items-center space-x-2 cursor-pointer"><MdPayment /><span>Payment</span></li>
            <li className="flex items-center space-x-2 cursor-pointer"><AiOutlineBarChart /><span>Blog</span></li>
            <li className="flex items-center space-x-2 cursor-pointer"><MdSupport /><span>Job Search</span></li>
            <li className="flex items-center space-x-2 cursor-pointer"><BiSolidHelpCircle /><span>Help & Support</span></li>
            <li className="flex items-center space-x-2 cursor-pointer"><MdReport /><span>Reports</span></li>
            <li className="flex items-center space-x-2 cursor-pointer"><MdEmail /><span>Email Support</span></li>
            <li className="flex items-center space-x-2 cursor-pointer"><MdSettings /><span>Settings</span></li>
            <li className="flex items-center space-x-2 cursor-pointer"><MdSupportAgent /><span>Support Tickets</span></li>
            <li className="flex items-center space-x-2 cursor-pointer"><MdLogin /><span></span></li>
          </ul>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64 bg-[#d4edda] min-h-screen">
        {/* Top Navbar */}
        <div className="flex items-center justify-between bg-[#309689] p-4 text-white shadow-md">
          <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <HiOutlineMenu size={24} />
          </button>
          <p>Welcome Divya Sain! Here's what's happening today.</p>
          <div className="flex items-center space-x-4">
            <FiSearch size={20} />
            <FiBell size={20} />
            <FiToggleRight size={20} />
            <FaUserCircle size={24} />
          </div>
        </div>
        {/* Job Stats */}
        <div className="p-4 flex space-x-100">
          <div className="bg-white p-4 rounded-lg shadow-md text-black">Timeframe: <strong>All Time</strong></div>
          <div className="bg-white p-4 rounded-lg shadow-md text-black">Source: <strong>All</strong></div>
          <div className="bg-white p-4 rounded-lg shadow-md text-black">Medium: <strong>All</strong></div>
        </div>
        {/* Content Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center text-black md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Jobs</h3>
            <p className="text-3xl font-bold">4,209</p>
            <ResponsiveContainer width="100%" height={100}>
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" dataKey="value" label>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Job Stats */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center text-black">
              <h3 className="text-lg font-semibold">Pending</h3>
              <p className="text-3xl font-bold">500</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center text-black">
              <h3 className="text-lg font-semibold">Shortlisted</h3>
              <p className="text-3xl font-bold">230</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center text-black">
              <h3 className="text-lg font-semibold">Hired</h3>
              <p className="text-3xl font-bold">9,800</p>
            </div>
          </div>
        </div>
        {/* Job Listings Table */}
        <table className="min-w-full bg-white">
  <thead>
    <tr className="bg-gray-200">
      <th className="p-2 text-left">Job Posting Name</th>
      <th className="p-2 text-left">Start Date</th>
      <th className="p-2 text-left">End Date</th>
      <th className="p-2 text-left">Priority</th>
    </tr>
  </thead>
  <tbody className="bg-white"> {/* Added bg-white here */}
    {[
      { name: "Banking", start: "24-Jan-2025", end: "1-Feb-2025", priority: "High" },
      { name: "Finance Jobs", start: "07-March-2025", end: "NA", priority: "Medium" },
      { name: "IT Manager", start: "17-Feb-2025", end: "16-March-2025", priority: "High" },
      { name: "Operations Posting", start: "03-March-2025", end: "NA", priority: "Low" },
      { name: "Consulting Jobs", start: "26-Feb-2025", end: "20-March-2025", priority: "High" }
    ].map((job, index) => (
      <tr key={index} className="border-b bg-transparent "> {/* Ensuring white background */}
        <td className="p-3">{job.name}</td>
        <td className="p-3">{job.start}</td>
        <td className="p-3">{job.end}</td>
        <td className="p-3">{job.priority}</td>
      </tr>
    ))}
  </tbody>
</table>
         {/* Additional Insights */}
         <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-6 bg-white">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold border-b pb-2">Job Statistics & Insights</h3>
            <p>Total jobs Posted Monthly: <strong>900+</strong></p>
            <p>Active Jobs: <strong>560+</strong></p>
            <p>Expired Jobs: <strong>150</strong></p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold border-b pb-2">Companies & Hiring Insights</h3>
            <p>Top Hiring Companies: <strong>60+</strong></p>
            <p>List of Pending Jobs: <strong>NA</strong></p>
            <p>Candidate Hired Daily: <strong>10+</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}