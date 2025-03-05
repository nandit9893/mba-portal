"use client"
import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { FaSearch } from "react-icons/fa";
=======
import { FaBuilding, FaSearch, FaUser } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { motion } from "framer-motion";
>>>>>>> b1de31043248c0419fceb3996b97075529313229
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

<<<<<<< HEAD
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
=======
const HeroSection = () => {
  const router = useRouter();
  const [jobLists, setJobLists] = useState(false);
  const [companyLists, setCompanyLists] = useState(false);
  const [locationLists, setLocationLists] = useState(false);
  const [categoryLists, setCategoryLists] = useState(false);
  const [locationArray, setLocationArray] = useState([]);
  const [companyArray, setCompanyArray] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);
  const [jobtitleArray, setJobtitleArray] = useState([]);

  const [formData, setFormData] = useState({
    company: "",
    location: "",
    category: "",
    jobtitle: "",
  });

  useEffect(() => {
    const fetchLocationsJobsCompanyLocations = async () => {
      const url = `${process.env.NEXT_PUBLIC_STRAPI_SERVER_BASE_URL}/api/v1/job/listAllJobs`;
      try {
        const response = await axios.get(url);
        if (response.data.success) {
          const jobs = response.data.jobs;
          const uniqueLocations = [...new Set(jobs.map((job) => job.location))];
          const uniqueCompanies = [...new Set(jobs.map((job) => job.company))];
          const uniqueCategories = [...new Set(jobs.map((job) => job.category))];
          const uniqueJobTitles = [...new Set(jobs.map((job) => job.jobTitle))];
          setLocationArray(uniqueLocations);
          setCompanyArray(uniqueCompanies);
          setCategoryArray(uniqueCategories);
          setJobtitleArray(uniqueJobTitles);
>>>>>>> b1de31043248c0419fceb3996b97075529313229
        }
      } catch (error) {
        console.log(error);
      }
    };
<<<<<<< HEAD
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
=======
    fetchLocationsJobsCompanyLocations();
  }, []);

  const inputChangeHandler = (event) => {
    const {name, value} = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  };

  useEffect(() => {
    if (formData.jobtitle.length > 0) {
      setJobLists(true);
    } else {
      setJobLists(false);
    }
  }, [formData.jobtitle]);

  useEffect(() => {
    if (formData.company.length > 0) {
      setCompanyLists(true);
    } else {
      setCompanyLists(false);
    }
  }, [formData.company]);

  useEffect(() => {
    if (formData.location.length > 0) {
      setLocationLists(true);
    } else {
      setLocationLists(false);
    }
  }, [formData.location]); 

  useEffect(() => {
    if (formData.category.length > 0) {
      setCategoryLists(true);
    } else {
      setCategoryLists(false);
    }
  }, [formData.category]); 
  
  const setJobInput = (title) => {
    setFormData((prev) => {
      return { ...prev, jobtitle: title };
    });
    setTimeout(() => setJobLists(false), 0); 
  };

  const setCompanyInput = (title) => {
    setFormData((prev) => {
      return { ...prev, company: title };
    });
    setTimeout(() => setCompanyLists(false), 0); 
  };

  const setLocationInput = (title) => {
    setFormData((prev) => {
      return { ...prev, location: title };
    });
    setTimeout(() => setLocationLists(false), 0); 
  };

  const setCategoryInput = (title) => {
    setFormData((prev) => {
      return { ...prev, category: title };
    });
    setTimeout(() => setCategoryLists(false), 0); 
  };

  const navigateToJobPage = () => {
    if (!formData.category || !formData.company || !formData.jobtitle || !formData.location) {
      toast.error("Please select all the fields");
      return;
    }
    const searchTerm = `${formData.category} ${formData.location} ${formData.jobtitle} ${formData.company}`;
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", searchTerm);
    router.push(`/Jobs?${urlParams.toString()}`);
  };
  
  return (
    <div className="opacity-100 h-[800px] sm:h-[700px] w-full bg-cover bg-center flex flex-col gap-2 sm:gap-8 items-center justify-center" style={{ backgroundImage: "url('/home_hero_bg.png')" }}>
      <div className="flex flex-col items-center gap-4 sm:p-0 px-2 w-full">
        <h3 className="text-white text-3xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-semibold">Find Your Dream Job Today!</h3>
        <p className="text-gray-300 text-lg text-center">Connecting Talent with Opportunity: Your Gateway to Career Success</p>
      </div>
      <div className="relative flex sm:h-20 flex-col sm:flex-row h-auto">
        <div className="sm:rounded-l-xl sm:bg-white px-7 py-3.5 flex flex-col sm:flex-row sm:gap-3 gap-5">
          <input value={formData.jobtitle} onChange={inputChangeHandler} name="jobtitle" type="text" className="border-none sm:rounded-none rounded-2xl sm:p-0 p-3 outline-none text-lg placeholder:text-lg" placeholder="Job Title" />
          <hr className="w-[1px] h-full bg-gray-500 hidden sm:block" />
          <input value={formData.company} onChange={inputChangeHandler} name="company" type="text" className="border-none sm:rounded-none rounded-2xl sm:p-0 p-3 outline-none text-lg placeholder:text-lg" placeholder="Company" />
          <hr className="w-[1px] h-full bg-gray-500 hidden sm:block" />
          <input value={formData.location} onChange={inputChangeHandler} name="location" type="text" className="border-none sm:rounded-none rounded-2xl outline-none sm:p-0 p-3 text-lg placeholder:text-lg" placeholder="Select Location" />
          <hr className="w-[1px] h-full bg-gray-500 hidden sm:block" />
          <input value={formData.category} onChange={inputChangeHandler} name="category" type="text" className="border-none sm:rounded-none rounded-2xl outline-none sm:p-0 p-3 text-lg placeholder:text-lg" placeholder="Select Category" />
        </div>
        <button onClick={navigateToJobPage} className="rounded-2xl justify-center sm:w-auto w-56 sm:ml-0 ml-7 sm:rounded-r-xl sm:rounded-l-none flex items-center gap-5 bg-[#309689] sm:px-7 sm:py-3.5 p-3">
          <FaSearch className="text-white text-lg" />
          <p className="text-white text-lg font-semibold">Search Job</p>
        </button>
        {
          jobLists ? 
          (
            <div className="absolute left-7 sm:left-2 top-[68px] sm:top-[85px] w-56 bg-white p-2 rounded-xl overflow-y-auto h-auto">
              {
                jobtitleArray.map((title, index) => (
                  <p key={index} onClick={() => setJobInput(title)}  className="text-black text-lg py-2 px-3 transition-colors duration-300 cursor-pointer hover:text-white hover:bg-black bg-white rounded-xl">{title}</p>
                ))
              }
            </div>
          ) : null
        }
        {
          companyLists ? 
          (
            <div className="absolute left-8 sm:left-[245px] top-36 sm:top-[85px] w-56 bg-white p-2 rounded-xl overflow-y-auto h-auto">
              {
                companyArray.map((title, index) => (
                  <p key={index} onClick={() => setCompanyInput(title)}  className="text-black text-lg py-2 px-3 transition-colors duration-300 cursor-pointer hover:text-white hover:bg-black bg-white rounded-xl">{title}</p>
                ))
              }
            </div>
          ) : null
        }
         {
          locationLists ? 
          (
            <div className="absolute left-7 sm:left-[475px] top-56 sm:top-[85px] w-56 bg-white p-2 rounded-xl overflow-y-auto h-auto">
              {
                locationArray.map((title, index) => (
                  <p key={index} onClick={() => setLocationInput(title)}  className="text-black text-lg py-2 px-3 transition-colors duration-300 cursor-pointer hover:text-white hover:bg-black bg-white rounded-xl">{title}</p>
                ))
              }
            </div>
          ) : null
        }
         {
          categoryLists ? 
          (
            <div className="absolute right-8 sm:right-48 top-72 sm:top-[85px] w-56 bg-white p-2 rounded-xl overflow-y-auto h-auto">
              {
                categoryArray.map((title, index) => (
                  <p key={index} onClick={() => setCategoryInput(title)}  className="text-black text-lg py-2 px-3 transition-colors duration-300 cursor-pointer hover:text-white hover:bg-black bg-white rounded-xl">{title}</p>
                ))
              }
            </div>
          ) : null
        }
      </div>
      <div className="w-full flex flex-col sm:flex-row sm:w-[600px] justify-between items-center mt-20 gap-5 sm:gap-0">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} viewport={{ once: false, amount: 0.2 }}  className="sm:w-40 w-52 flex sm:gap-3 gap-8 items-center justify-center">
          <div className="sm:p-4 p-2 bg-[#309689] rounded-full">
            <BiShoppingBag className="text-white text-2xl sm:text-3xl" />
          </div>
          <div className="flex flex-col sm:gap-1 gap-0">
            <p className="text-white font-semibold text-lg sm:text-xl">25, 850</p>
            <span className="sm:text-lg text-[14px] text-gray-300">Jobs</span>
          </div>
        </motion.div>
        <div className="sm:w-40 w-52 flex sm:gap-3 gap-8 items-center justify-center">
          <div className="sm:p-4 p-2 bg-[#309689] rounded-full">
            <FaUser className="text-white text-2xl sm:text-3xl" />
          </div>
          <div className="flex flex-col sm:gap-1 gap-0">
            <p className="text-white font-semibold text-lg sm:text-xl">10, 250</p>
            <span className="sm:text-lg text-[14px] text-gray-300">Candidates</span>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} viewport={{ once: false, amount: 0.2 }} className="sm:w-40 w-52 flex sm:gap-3 gap-8 items-center justify-center">
          <div className="sm:p-4 p-2 bg-[#309689] rounded-full">
            <FaBuilding className="text-white text-2xl sm:text-3xl" />
          </div>
          <div className="flex flex-col sm:gap-1 gap-0">
            <p className="text-white font-semibold text-lg sm:text-xl">18, 400</p>
            <span className="sm:text-lg text-[14px] text-gray-300">Companies</span>
          </div>
        </motion.div>
      </div>
>>>>>>> b1de31043248c0419fceb3996b97075529313229
    </div>
  );
};

<<<<<<< HEAD
export default SidebarFilter;
=======
export default HeroSection;
>>>>>>> b1de31043248c0419fceb3996b97075529313229
