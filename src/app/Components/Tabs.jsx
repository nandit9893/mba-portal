"use client";
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Today");

  const tabs = ["Today", "Yesterday", "Week", "Month"];

  return (
    <div className="bg-green-100 rounded-xl p-2 w-full max-w-3xl mx-auto mt-6 overflow-hidden">
      <div className="flex overflow-x-auto md:flex-nowrap flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 min-w-[80px] md:min-w-0 text-center py-2 px-4 rounded-xl text-black font-medium transition-all 
              ${activeTab === tab ? "bg-gray-300" : "hover:bg-gray-200"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;