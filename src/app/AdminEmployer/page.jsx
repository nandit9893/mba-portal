"use client"
import React, { useState } from "react";
import AdminSideBar from "../Components/AdminSideBar";
import AdminMainContent from "../Components/AdminMainContent";

const AdminEmployerPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="px-5 py-2 flex-col min-h-screen w-full">
      <div className="flex justify-between w-full gap-5 min-h-screen">
        <AdminSideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <AdminMainContent isCollapsed={isCollapsed} />
      </div>
    </div>
  );
};

export default AdminEmployerPage;
