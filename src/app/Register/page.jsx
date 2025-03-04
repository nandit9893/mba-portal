"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const RegisterPage = () => {
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password: ""
  })

  return (
    <div className="bg-[#0F0F0F] sm:px-20 sm:py-10 p-5">
      <div className="flex flex-col sm:flex-row sm:gap-0 gap-5 justify-between w-full min-h-screen relative">
        <div className="flex flex-col items-center justify-center gap-5 sm:w-2/3 w-full h-full mt-[10%]">
          <h4 className="text-white sm:text-7xl text-6xl font-semibold text-center">Welcome Back .!</h4>
          <div className="sm:flex hidden justify-end gap-1 absolute left-[425px] top-60">
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
            <div className="w-5 h-[2px] bg-[#4D4D4D]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center sm:w-1/3 w-full h-full border-[1px] border-white shadow-2xl p-8 rounded-2xl">
          <p className="text-white text-2xl font-semibold text-center">Sign up</p>
          <div className="flex flex-col gap-3 w-full">
              <input type="text" placeholder="Name" className="text-white text-[16px] border-[1px] border-white rounded-xl px-4 py-3 bg-black w-full placeholder:text-white placeholder:text-lg"/>
              <input type="text" placeholder="Email / Phone" className="text-white text-[16px] border-[1px] border-white rounded-xl px-4 py-3 bg-black w-full placeholder:text-white placeholder:text-lg"/>
              <input type="text" placeholder="Password" className="text-white text-[16px] border-[1px] border-white rounded-xl px-4 py-3 bg-black w-full placeholder:text-white placeholder:text-lg"/>
              <input type="text" placeholder="Confirm Password" className="text-white text-[16px] border-[1px] border-white rounded-xl px-4 py-3 bg-black w-full placeholder:text-white placeholder:text-lg"/>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <button className="bg-[#309689] rounded-2xl text-white p-2 text-xl font-semibold text-center w-full">Sign up</button>
          </div>
          <div className="flex gap-3 items-center w-full">
            <div className="w-full h-[1px] bg-gray-400"></div>
            <p className="text-gray-400">Or</p>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <Image src="/google_icon.jpeg" width={50} height={50} alt="Picture of the author" className="w-10 h-10 rounded-full bg-[#0F0F0F]"/>
            <Image src="/facebook_icon.png" width={50} height={50} alt="Picture of the author" className="w-10 h-10 rounded-full bg-[#0F0F0F]"/>
            <Image src="/github_icon.png" width={50} height={50} alt="Picture of the author" className="w-10 h-10 rounded-full bg-[#0F0F0F]"/>
          </div>
          <p className="text-white text-center text-[14px]">Already Register? Login</p>
          <div className="flex gap-10 items-center justify-center">
            <p className="text-white text-[14px] font-semibold">Terms & Conditions</p>
            <p className="text-white text-[14px] font-semibold">Support</p>
            <p className="text-white text-[14px] font-semibold">Customer Care</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
