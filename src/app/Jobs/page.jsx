"use client";
import React from "react";
import JobList from "../Components/Comp";
import Hero from "../Components/Upper";
import JobFilterSidebar from "../Components/Sidebar";
import CompanyCarousel from "../Components/Last";

const JobsPage = () => {
  return (
    <div>
      
      <Hero />

       
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
        
        <aside className="w-full md:w-1/4">
          <JobFilterSidebar />
        </aside>

         
        <main className="w-full md:w-3/4">
          <JobList />
        </main> 

      </div>
      
      <CompanyCarousel/>
    </div>
  );
};

export default JobsPage;