"use client";
import React from "react";
import User from "../Components/Userdetails";
import Nav from "../Components/out";
import PaymentStatus from "../Components/Lastone";
 
import Side from "../Components/Emailx";

const UserManagementPage = () => {
  return (
    <div className="flex min-h-screen">
 
      <Side />

 
      <div className="flex-1 p-4">
      <Nav/>
        <User />
        <PaymentStatus/>
      </div>
    </div>
  );
};

export default UserManagementPage;


 