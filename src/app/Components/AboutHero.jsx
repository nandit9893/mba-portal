import React from "react";

const AboutHero = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4 lg:px-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-800">
            Empowering MBA & BBA Careers
          </h1>
          <p className="mt-4 text-gray-600">
            Welcome to Job Portal, the ultimate career hub designed exclusively
            for MBA and BBA graduates. We bridge the gap between top-tier
            business talent and leading companies, helping aspiring
            professionals find the right opportunities to thrive in the
            corporate world.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <img
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
            src="./home_about_bg.png"
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
