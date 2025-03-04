"use client";

import { useState } from "react";
import { FaSortUp, FaSortDown, FaEllipsisH, FaSearch } from "react-icons/fa";

const jobData = [
    {
        jobApplied: "Business Consultant",
        companyName: "McKinsey & Company",
        status: "Under Review",
        jobId: 26,
        applyOn: "6/3/22",
      },
      {
        jobApplied: "Management Trainee",
        companyName: "Bain & Company",
        status: "Under Review",
        jobId: 35,
        applyOn: "12/2/22",
      },
      {
        jobApplied: "Strategy Analyst",
        companyName: "",
        status: "Rejected",
        jobId: 48,
        applyOn: "4/19/23",
      },
      {
        jobApplied: "Operations Manager",
        companyName: "Goldman Sachs",
        status: "Shortlisted",
        jobId: 90,
        applyOn: "1/2/23",
      },
      {
        jobApplied: "Business Development",
        companyName: "",
        status: "Shortlisted",
        jobId: 67,
        applyOn: "9/4/23",
      },
      {
        jobApplied: "Project Manager",
        companyName: "Morgan Stanley",
        status: "Rejected",
        jobId: 35,
        applyOn: "6/3/22",
      },
      {
        jobApplied: "Marketing Manager",
        companyName: "Deutsche Bank",
        status: "Rejected",
        jobId: 48,
        applyOn: "12/2/22",
      },
      {
        jobApplied: "Sales Manager",
        companyName: "Microsoft",
        status: "Under Review",
        jobId: 90,
        applyOn: "4/19/23",
      },
      {
        jobApplied: "Product Manager",
        companyName: "Johnson & Johnson",
        status: "Shortlisted",
        jobId: 67,
        applyOn: "1/2/23",
      },
];

export default function JobApplications() {
  const [search, setSearch] = useState("");
  const [sortedBy, setSortedBy] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  const sortData = (key) => {
    setIsAscending(sortedBy === key ? !isAscending : true);
    setSortedBy(key);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 px-4">
        <h2 className="text-lg font-semibold mb-2 md:mb-0">Job Applications</h2>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border px-3 py-2 pl-8 rounded-md focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-2 top-3 text-gray-400" />
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-white border rounded-lg shadow-lg">
          <thead className="bg-gray-100 text-sm text-gray-600">
            <tr>
              {["Job Applied", "Company Name", "Status", "Job ID", "Apply On", "Options"].map((heading, index) => (
                <th key={index} className="px-4 py-3 text-left whitespace-nowrap">
                  <button
                    onClick={() => sortData(heading.toLowerCase().replace(/ /g, ""))}
                    className="flex items-center gap-1 hover:text-gray-800"
                  >
                    {heading}
                    {sortedBy === heading.toLowerCase().replace(/ /g, "") && (
                      isAscending ? <FaSortUp /> : <FaSortDown />
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {jobData.map((job, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
                  <input type="radio" className="accent-gray-600" /> {job.jobApplied}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{job.companyName || "N/A"}</td>
                <td className={`px-4 py-3 whitespace-nowrap font-semibold ${
                  job.status === "Under Review"
                    ? "text-blue-600"
                    : job.status === "Rejected"
                    ? "text-red-500"
                    : "text-green-600"
                }`}>
                  {job.status}
                </td>
                <td className="px-4 py-3 text-center whitespace-nowrap">{job.jobId}</td>
                <td className="px-4 py-3 whitespace-nowrap">{job.applyOn}</td>
                <td className="px-4 py-3 text-center">
                  <FaEllipsisH className="text-gray-600 cursor-pointer hover:text-gray-800" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden">
        {jobData.map((job, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-md p-4 mb-3">
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg">{job.jobApplied}</h3>
              <FaEllipsisH className="text-gray-500 cursor-pointer hover:text-gray-700" />
            </div>
            <p className="text-sm text-gray-600">{job.companyName || "N/A"}</p>
            <p className={`text-sm font-semibold ${
              job.status === "Under Review"
                ? "text-blue-600"
                : job.status === "Rejected"
                ? "text-red-500"
                : "text-green-600"
            }`}>
              {job.status}
            </p>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <p>Job ID: {job.jobId}</p>
              <p>Applied On: {job.applyOn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
