import { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const JobFilterSidebar = () => {
  const categories = [
    "Commerce",
    "Telecommunications",
    "Hotels & Tourism",
    "Education",
    "Financial Services",
  ];

  const jobTypes = [
    "Full Time",
    "Part Time",
    "Freelance",
    "Seasonal",
    "Fixed-Price",
  ];
  const experienceLevels = [
    "No-experience",
    "Fresher",
    "Intermediate",
    "Expert",
  ];
  const datePostedOptions = [
    "All",
    "Last Hour",
    "Last 24 Hours",
    "Last 7 Days",
    "Last 30 Days",
  ];
  const tags = [
    "Operations",
    "Consulting",
    "Operations",
    "marketing",
    "management",
    "IT",
    "International Business",
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
  const [selectedDatePosted, setSelectedDatePosted] = useState([]);
  const [salary, setSalary] = useState([0, 9999]);

  const toggleSelection = (item, setter, selectedItems) => {
    setter((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg w-72">
      <h2 className="font-semibold text-lg mb-3">Search by Job Title</h2>
      <div className="relative mb-4">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Job title or company"
          className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      <h2 className="font-semibold text-lg mb-3">Location</h2>
      <div className="relative mb-4">
        <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
        <select className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300">
          <option>Choose city</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
        </select>
      </div>

      <h2 className="font-semibold text-lg mb-3">Category</h2>
      {categories.map((category, index) => (
        <label key={index} className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() =>
                toggleSelection(
                  category,
                  setSelectedCategories,
                  selectedCategories
                )
              }
              className="mr-2"
            />
            {category}
          </div>
          <span className="bg-gray-200 px-2 py-1 rounded text-sm">10</span>
        </label>
      ))}

      <button className="w-full bg-teal-600 text-white py-2 rounded-md mt-2 hover:bg-teal-700">
        Show More
      </button>

      <h2 className="font-semibold text-lg mt-4 mb-3">Job Type</h2>
      {jobTypes.map((type, index) => (
        <label key={index} className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={selectedJobTypes.includes(type)}
              onChange={() =>
                toggleSelection(type, setSelectedJobTypes, selectedJobTypes)
              }
              className="mr-2"
            />
            {type}
          </div>
          <span className="bg-gray-200 px-2 py-1 rounded text-sm">10</span>
        </label>
      ))}

      <h2 className="font-semibold text-lg mt-4 mb-3">Salary</h2>
      <input
        type="range"
        min="0"
        max="9999"
        value={salary[1]}
        onChange={(e) => setSalary([0, e.target.value])}
        className="w-full"
      />
      <p className="mt-2">
        Salary: ${salary[0]} - ${salary[1]}
      </p>
      <button className="w-full bg-teal-600 text-white py-2 rounded-md mt-2 hover:bg-teal-700">
        Apply
      </button>

      <h2 className="font-semibold text-lg mt-4 mb-3">Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobFilterSidebar;
