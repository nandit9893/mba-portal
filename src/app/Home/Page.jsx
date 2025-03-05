"use client";
import React from "react";
 
import HomeJobsAvailable from "../Components/HomeJobsAvailable";
import JobsCategory from "../Components/JobsCategory";
import GoodCompanyOverview from "../Components/GoodCompanyOverview";
import CTA from "../Components/CTA";
import NewsBlog from "../Components/NewsBlog";
import Testinomials from "../Components/Testinomials";
import HeroSection from "../Components/HeroSection";

const HomePage = () => {
  
  return (
    <div>
      <HeroSection/>
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
