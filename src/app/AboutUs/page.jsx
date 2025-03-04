import React from "react";
import AboutHero from "../Components/AboutHero";
import HowItWork from "../Components/HowItWork";
import VideoSection from "../Components/VideoSection";
import FaqSection from "../Components/FaqSection";
import BestSection from "../Components/BestSection";
import NewsBlog from "../Components/NewsBlog";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <HowItWork />
      <VideoSection />
      <FaqSection />
      <BestSection />
      <NewsBlog />
    </div>
  );
};

export default AboutUs;
