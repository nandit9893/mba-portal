import { Briefcase, Building, FileText, Users } from "lucide-react";
import React from "react";

const BestSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side - Images Grid */}
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
        <div
          className="h-64 bg-gray-300 rounded-xl"
          style={{ backgroundImage: "url('/home_about_bg.png')" }}
        ></div>
        <div
          className="h-64 bg-gray-300 rounded-xl"
          style={{ backgroundImage: "url('/nb_img_1.png')" }}
        ></div>
        <div
          className="h-64 bg-gray-300 rounded-xl col-span-2"
          style={{ backgroundImage: "url('/nb_img_2.png')" }}
        ></div>
      </div>

      {/* Right Side - Text & Icons */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          We’re Only Working <br /> With The Best
        </h2>
        <p className="text-gray-600 text-base">
          We connect top talent with leading employers, ensuring only the best
          opportunities for ambitious professionals like you.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Quality Job */}
          <div className="flex items-center space-x-3">
            <Briefcase className="w-6 h-6 text-primaryGreen" />
            <span className="text-black font-medium">Quality Job</span>
          </div>

          {/* Resume Builder */}
          <div className="flex items-center space-x-3">
            <FileText className="w-6 h-6 text-primaryGreen" />
            <span className="text-black font-medium">Resume Builder</span>
          </div>

          {/* Top Companies */}
          <div className="flex items-center space-x-3">
            <Building className="w-6 h-6 text-primaryGreen" />
            <span className="text-black font-medium">Top Companies</span>
          </div>

          {/* Top Talents */}
          <div className="flex items-center space-x-3">
            <Users className="w-6 h-6 text-primaryGreen" />
            <span className="text-black font-medium">Top Talents</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSection;
