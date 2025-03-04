"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function User() {
  const employeesData = [
    { name: "Mharde Marshall", role: "Marketing Consultant", status: "Active", id: 26, joinDate: "6/3/22" },
    { name: "Caesar Vance", role: "Operations Manager", status: "Active", id: 35, joinDate: "12/2/22" },
    { name: "Grill Ross", role: "Investment Banker", status: "Inactive", id: 48, joinDate: "4/19/23" },
    { name: "Brielle Williamson", role: "Finance Manager", status: "Suspended", id: 90, joinDate: "1/2/23" },
    { name: "Bradley Greer", role: "Head of Marketing", status: "Active", id: 67, joinDate: "9/4/23" },
    { name: "Ashton Cox", role: "Director of Management", status: "Active", id: 35, joinDate: "6/3/22" },
    { name: "MaDai Rios", role: "IT Manager", status: "Active", id: 48, joinDate: "12/2/22" },
    { name: "Colleen ", role: "Chief Financial Officer", status: "Inactive", id: 90, joinDate: "4/4/23" },
  ];

  const [search, setSearch] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const filteredEmployees = employeesData.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold">User Management</h1>

      <div className="bg-white p-4 mt-4 rounded-lg shadow-lg">
        {/* Header with Toggle Button */}
        <div className="flex justify-between items-center border-b pb-2">
          <p className="font-semibold text-lg">Employees Details...</p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-lg bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300 transition"
          >
            {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>

        {/* Search & Filters */}
        {isExpanded && (
          <>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              {/* Search Bar */}
              <div className="flex items-center bg-gray-100 p-2 rounded-md w-full sm:w-auto">
                <FaSearch className="text-gray-400 mx-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent outline-none w-full"
                />
              </div>

              {/* Sortable Buttons with Proper Spacing */}
              <div className="grid grid-cols-4 gap-6 w-full sm:w-auto">
                {['Status', 'User ID', 'Join Us On', 'Options'].map((label, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-center bg-gray-200 px-6 py-3 mx-3 rounded-lg text-sm font-semibold shadow-md hover:bg-gray-300 transition"
                  >
                    {label}
                    <span className="ml-2 flex flex-col">
                      <IoIosArrowUp className="text-xs" />
                      <IoIosArrowDown className="text-xs" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Employee List */}
            <div className="mt-4">
              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((emp, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-5 items-center border-b py-3 px-4 text-sm sm:text-base"
                  >
                    {/* Employee Name & Role with Radio */}
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="employee"
                        value={emp.name}
                        checked={selectedEmployee === emp.name}
                        onChange={() => setSelectedEmployee(emp.name)}
                        className="cursor-pointer"
                      />
                      <div>
                        <p className="font-semibold">{emp.name}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{emp.role}</p>
                      </div>
                    </div>
                    <p className="text-center">{emp.status}</p>
                    <p className="text-center">{emp.id}</p>
                    <p className="text-center">{emp.joinDate}</p>
                    <p className="text-center">...</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 mt-4">No employees found</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
