"use client"
import React, { useEffect, useState } from "react";
import { FaBuilding, FaSearch, FaUser } from "react-icons/fa";
import { BiChevronDown, BiShoppingBag } from "react-icons/bi";
import { motion } from "framer-motion";
import { jobTitles, jobLocations, companyNames, jobCategory } from "../../../public/Assets/jobs";

const HeroSection = () => {
  const [companyLists, setCompanyLists] = useState(false);
  const [locationLists, setLocationLists] = useState(false);
  const [categoryLists, setCategoryJobLists] = useState(false);

  const [formData, setFormData] = useState({
    companyjobtitle: "",
    location: "",
    category: "",
  });

  useEffect(() => {
    if (formData.companyjobtitle.length > 0) {
      setCompanyLists(true);
    } else {
      setCompanyLists(false);
    }
  }, [formData.companyjobtitle]); 
  

  const inputChangeHandler = (event) => {
    const {name, value} = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  };

  return (
    <div className="relative opacity-100 h-[800px] sm:h-[700px] w-full bg-cover bg-center flex flex-col gap-2 sm:gap-8 items-center justify-center" style={{ backgroundImage: "url('/home_hero_bg.png')" }}>
      <div className="flex flex-col items-center gap-4 sm:p-0 px-2 w-full">
        <h3 className="text-white text-3xl text-center sm:text-5xl md:text-6xl lg:text-7xl font-semibold">Find Your Dream Job Today!</h3>
        <p className="text-gray-300 text-lg text-center">Connecting Talent with Opportunity: Your Gateway to Career Success</p>
      </div>
      <div className="flex sm:h-20 flex-col sm:flex-row h-auto">
        <div className="sm:rounded-l-xl sm:bg-white px-7 py-3.5 flex flex-col sm:flex-row sm:gap-3 gap-5">
          <input value={formData.companyjobtitle} onChange={inputChangeHandler} name="companyjobtitle" type="text" className="border-none sm:rounded-none rounded-2xl sm:p-0 p-3 outline-none text-lg placeholder:text-lg" placeholder="Job Title or Company" />
          <hr className="w-[1px] h-full bg-gray-500 hidden sm:block" />
          <input value={formData.location} onChange={inputChangeHandler} name="location" type="text" className="border-none sm:rounded-none rounded-2xl outline-none sm:p-0 p-3 text-lg placeholder:text-lg" placeholder="Select Location" />
          <hr className="w-[1px] h-full bg-gray-500 hidden sm:block" />
          <input value={formData.category} onChange={inputChangeHandler} name="category" type="text" className="border-none sm:rounded-none rounded-2xl outline-none sm:p-0 p-3 text-lg placeholder:text-lg" placeholder="Select Category" />
        </div>
        <button className="rounded-2xl sm:rounded-r-xl sm:rounded-l-none flex items-center gap-5 bg-[#309689] sm:px-7 sm:py-3.5 p-3">
          <FaSearch className="text-white text-lg" />
          <p className="text-white text-lg font-semibold">Search Job</p>
        </button>
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
    </div>
  );
};

export default HeroSection;
