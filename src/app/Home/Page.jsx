"use client";
import React from "react";
 
import HomeJobsAvailable from "../Components/HomeJobsAvailable";
import JobsCategory from "../Components/JobsCategory";
import GoodCompanyOverview from "../Components/GoodCompanyOverview";
import CTA from "../Components/CTA";
import NewsBlog from "../Components/NewsBlog";
import Testinomials from "../Components/Testinomials";

const HomePage = () => {
  
  return (
    <div>
       
      <HomeJobsAvailable />
      <JobsCategory />
      <GoodCompanyOverview />
      <CTA />
      <Testinomials />
      <NewsBlog />
    </div>
  );
};

export default HomePage;
