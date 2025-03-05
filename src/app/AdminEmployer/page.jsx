"use client"
import { Bell, Bookmark, Eye, User2Icon, UserIcon } from "lucide-react";
import { BiMoneyWithdraw, BiShoppingBag } from "react-icons/bi";
import { FaBlog, FaCog, FaEnvelope, FaLocationArrow, FaStar } from "react-icons/fa";
import { MdLiveHelp } from "react-icons/md";
import { HiOutlineDocument, HiOutlineMenu, HiOutlineQuestionMarkCircle, HiOutlineUser } from "react-icons/hi";
import React, { useState } from "react";
import AdminMainContent from "../Components/AdminMainContent";
import GeneralSettings from "../Components/GeneralSettings";

const AdminEmployerPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentSideTitle, setCurrentSideTitle] = useState("Dashboard");
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  const sideBarDashboard = [
    { _id: 1, title: "Dashboard", icon: <FaStar /> },
    { _id: 2, title: "User Management", icon: <UserIcon /> },
    { _id: 3, title: "Job Management", icon: <User2Icon /> },
    { _id: 4, title: "Payment", icon: <BiMoneyWithdraw /> },
    { _id: 5, title: "Blog", icon: <FaBlog /> },
    { _id: 6, title: "Job Search", icon: <HiOutlineUser /> },
    { _id: 7, title: "Help and Support", icon: <HiOutlineQuestionMarkCircle /> },
    { _id: 8, title: "Reports", icon: <HiOutlineDocument /> },
    { _id: 9, title: "Email Support", icon: <FaEnvelope /> },
    { _id: 10, title: "Settings", icon: <FaCog /> },
    { _id: 11, title: "Support Ticket", icon: <HiOutlineQuestionMarkCircle /> },
    { _id: 12, title: "FAQ", icon: <MdLiveHelp /> },
    { _id: 13, title: "Maps", icon: <FaLocationArrow /> },
  ];

  return (
    <div className="px-5 py-2 flex-col min-h-screen w-full">
      <div className="flex justify-between w-full gap-5 min-h-screen">
        <div className={`flex flex-col gap-5 rounded-2xl bg-gradient-to-tr from-slate-950 to-teal-500 ${isCollapsed ? "w-[70px]" : "w-1/5"} min-h-screen transition-all duration-300 ease-in-out`}>
          <div className="flex flex-col gap-2 p-5">
            <div className="flex justify-between items-center">
              {
                !isCollapsed && (
                  <div className="flex gap-2 items-center">
                    <p className="text-2xl font-semibold text-white">JOB PORTAL</p>
                    <BiShoppingBag className="text-2xl text-white font-semibold" />
                  </div>
                )
              }
              <div onClick={toggleSidebar} className="hover:bg-gray-500 transition-colors duration-300 ease-in-out p-1 rounded-2xl cursor-pointer">
                <HiOutlineMenu className="text-2xl text-white hover:text-black transition-colors duration-300 ease-in-out" />
              </div>
            </div>
            <hr className="w-full h-[2px] bg-white" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 mt-5">
              {
                sideBarDashboard.slice(0, 7).map((item) => (
                  <div onClick={()=>setCurrentSideTitle(item.title)} key={item._id} className="flex items-center gap-5 cursor-pointer hover:bg-gradient-to-br from-teal-800 to-teal-500 py-2 px-5 rounded-2xl">
                    <span className="text-lg font-semibold text-white">{item.icon}</span>
                    {!isCollapsed && <p className="text-lg font-semibold text-white">{item.title}</p>}
                  </div>
                ))
              }
            </div>
            <hr className="w-full h-[2px] bg-white" />
            <div className="flex flex-col gap-1">
              {
                sideBarDashboard.slice(7).map((item) => (
                  <div onClick={()=>setCurrentSideTitle(item.title)} key={item._id} className="flex items-center gap-5 cursor-pointer hover:bg-gradient-to-br from-teal-800 to-teal-500 py-2 px-5 rounded-2xl">
                    <span className="text-lg font-semibold text-white">{item.icon}</span>
                    {!isCollapsed && <p className="text-lg font-semibold text-white">{item.title}</p>}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        {currentSideTitle === "Dashboard" && (<AdminMainContent isCollapsed={isCollapsed} />)}
        {
          currentSideTitle === "Settings" && (
            <div className="flex-1 flex flex-col max-w-screen-xl mx-auto w-full">
            <div className="flex flex-wrap justify-between items-center bg-teal-700 text-white p-4 rounded-lg m-4">
              <div>
                <h1 className="text-sm font-semibold">Welcome Divya Sain 👋</h1>
                <p className="text-xs text-white/80">Here's what happening with you today.</p>
              </div>
              <div className="flex items-center gap-4">
                <Bookmark className="w-5 h-5 cursor-pointer hover:text-gray-200" />
                <Eye className="w-5 h-5 cursor-pointer hover:text-gray-200" />
                <Bell className="w-5 h-5 cursor-pointer hover:text-gray-200" />
                <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center border border-white">
                  <img src="user.png" alt="User" className="w-full h-full rounded-full" />
                </div>
              </div>
            </div>
            <main className="p-6">
              <SettingsHeading />
              <GeneralSettings />
            </main>
           </div>
          )
        }
        {currentSideTitle === "Payment" && (
          <div className="">
            
          </div>
        )} 
      </div>
    </div>
  );
};

export default AdminEmployerPage;

const SettingsHeading = () => (
  <div className="bg-gray-300 text-black text-lg md:text-xl font-bold text-center p-3 md:p-4 rounded-lg shadow-md w-full max-w-4xl mx-auto">
    Settings
  </div>
);