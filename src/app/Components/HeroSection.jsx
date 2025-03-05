"use client"
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SidebarFilter = () => {
  const router = useRouter();
  const [filters, setFilters] = useState({
    jobtitle: "",
    company: "",
    location: "",
    category: "",
  });

  const [jobTitles, setJobTitles] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/job/listAllJobs`;
        const response = await axios.get(url);
        if (response.data.success) {
          const jobs = response.data.jobs;
          setJobTitles([...new Set(jobs.map((job) => job.jobTitle))]);
          setCompanies([...new Set(jobs.map((job) => job.company))]);
          setLocations([...new Set(jobs.map((job) => job.location))]);
          setCategories([...new Set(jobs.map((job) => job.category))]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobData();
  }, []);

  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    if (!filters.jobtitle && !filters.company && !filters.location && !filters.category) {
      toast.error("Please select at least one filter");
      return;
    }
    const searchParams = new URLSearchParams(filters);
    router.push(`/Jobs?${searchParams.toString()}`);
  };

  return (
    <div className="w-64 bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Filter Jobs</h2>
      {[
        { name: "jobtitle", label: "Job Title", options: jobTitles },
        { name: "company", label: "Company", options: companies },
        { name: "location", label: "Location", options: locations },
        { name: "category", label: "Category", options: categories },
      ].map(({ name, label, options }) => (
        <div key={name} className="mb-3">
          <label className="block text-sm font-medium mb-1">{label}</label>
          <input
            type="text"
            name={name}
            value={filters[name]}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            placeholder={`Search ${label}`}
            list={name + "-list"}
          />
          <datalist id={name + "-list"}>
            {options.map((option, index) => (
              <option key={index} value={option} />
            ))}
          </datalist>
        </div>
      ))}
      <button onClick={applyFilters} className="w-full bg-[#309689] text-white p-2 rounded-lg flex items-center justify-center gap-2">
        <FaSearch /> Search
      </button>
    </div>
  );
};

export default SidebarFilter;
