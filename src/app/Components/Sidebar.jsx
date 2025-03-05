"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const JobFilterSidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categories = ["Commerce", "Telecommunications", "Hotels & Tourism", "Education", "Financial Services"];
  const jobTypes = ["Full Time", "Part Time", "Freelance", "Seasonal", "Fixed-Price"];
  const experienceLevels = ["No-experience", "Fresher", "Intermediate", "Expert"];
  const tags = ["Operations", "Consulting", "Marketing", "Management", "IT", "International Business"];

  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCity, setSelectedCity] = useState(searchParams.get("city") || "");
  const [selectedCategories, setSelectedCategories] = useState(searchParams.getAll("category") || []);
  const [selectedJobTypes, setSelectedJobTypes] = useState(searchParams.getAll("jobType") || []);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState(searchParams.getAll("experience") || []);
  const [selectedTags, setSelectedTags] = useState(searchParams.getAll("tag") || []);
  const [salary, setSalary] = useState(searchParams.get("salary") || 9999);

  const updateFiltersInURL = () => {
    const params = new URLSearchParams();

    if (searchQuery) params.set("search", searchQuery);
    if (selectedCity) params.set("city", selectedCity);
    selectedCategories.forEach((cat) => params.append("category", cat));
    selectedJobTypes.forEach((type) => params.append("jobType", type));
    selectedExperienceLevels.forEach((exp) => params.append("experience", exp));
    selectedTags.forEach((tag) => params.append("tag", tag));
    if (salary) params.set("salary", salary);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const toggleSelection = (item, setter, selectedItems) => {
    setter((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xs mx-auto">
      {/* 🔍 Job Search */}
      <h2 className="font-semibold text-lg mb-3">Search by Job Title</h2>
      <div className="relative mb-4">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Job title or company"
          className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-teal-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* 📍 Location Filter */}
      <h2 className="font-semibold text-lg mb-3">Location</h2>
      <div className="relative mb-4">
        <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
        <select
          className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-teal-400"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Choose city</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </select>
      </div>

      {/* 📌 Category */}
      <h2 className="font-semibold text-lg mb-3">Category</h2>
      {categories.map((category, index) => (
        <label key={index} className="flex items-center justify-between mb-2 cursor-pointer">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => toggleSelection(category, setSelectedCategories, selectedCategories)}
              className="mr-2 accent-teal-500"
            />
            {category}
          </div>
        </label>
      ))}

      {/* 📌 Job Type */}
      <h2 className="font-semibold text-lg mt-4 mb-3">Job Type</h2>
      {jobTypes.map((type, index) => (
        <label key={index} className="flex items-center justify-between mb-2 cursor-pointer">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={selectedJobTypes.includes(type)}
              onChange={() => toggleSelection(type, setSelectedJobTypes, selectedJobTypes)}
              className="mr-2 accent-teal-500"
            />
            {type}
          </div>
        </label>
      ))}

      {/* 🎯 Experience Level */}
      <h2 className="font-semibold text-lg mt-4 mb-3">Experience Level</h2>
      {experienceLevels.map((level, index) => (
        <label key={index} className="flex items-center justify-between mb-2 cursor-pointer">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={selectedExperienceLevels.includes(level)}
              onChange={() => toggleSelection(level, setSelectedExperienceLevels, selectedExperienceLevels)}
              className="mr-2 accent-teal-500"
            />
            {level}
          </div>
        </label>
      ))}

      {/* 💰 Salary Range */}
      <h2 className="font-semibold text-lg mt-4 mb-3">Salary</h2>
      <input
        type="range"
        min="0"
        max="9999"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        className="w-full accent-teal-500"
      />
      <p className="mt-2 text-gray-700">Salary: ${salary}</p>

      {/* 📌 Tags */}
      <h2 className="font-semibold text-lg mt-4 mb-3">Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-full text-sm transition ${
              selectedTags.includes(tag) ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => toggleSelection(tag, setSelectedTags, selectedTags)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 🎯 Apply Button */}
      <button
        className="w-full bg-teal-600 text-white py-2 rounded-md mt-4 hover:bg-teal-700 transition duration-200"
        onClick={updateFiltersInURL}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default JobFilterSidebar;
