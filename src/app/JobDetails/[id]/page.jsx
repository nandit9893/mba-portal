"use client";
import React, { useEffect, useState } from "react";
import {
  FaHotel,
  FaClock,
  FaMoneyBillWave,
  FaLocationArrow,
} from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";
import { useParams } from "next/navigation";

const JobDetailsPage = () => {
  const { id } = useParams();
  const [specificJob, setSpecificJob] = useState(null);
  console.log(specificJob);
  const jobsArray = [
    {
      _id: 1,
      job_title: "HR Manager",
      company_name: "GenXhire and Co",
      posted_time: "10",
      assets: [
        {
          _id: 11,
          icon: <FaHotel className="text-xl text-[#309689]" />,
          title: "Hotel & Tourism",
        },
        {
          _id: 12,
          icon: <FaClock className="text-xl text-[#309689]" />,
          title: "Full Time",
        },
        {
          _id: 13,
          icon: <FaMoneyBillWave className="text-xl text-[#309689]" />,
          title: "$40000 - $42000",
        },
        {
          _id: 14,
          icon: <FaLocationArrow className="text-xl text-[#309689]" />,
          title: "New-York, USA",
        },
      ],
    },
    {
      _id: 2,
      job_title: "HR Operations",
      company_name: "Polymed Solutions",
      posted_time: "20",
      assets: [
        {
          _id: 11,
          icon: <FaHotel className="texl text-[#309689]" />,
          title: "Media",
        },
        {
          _id: 12,
          icon: <FaClock className="texl text-[#309689]" />,
          title: "Part Time",
        },
        {
          _id: 13,
          icon: <FaMoneyBillWave className="texl text-[#309689]" />,
          title: "$28000 - $32000",
        },
        {
          _id: 14,
          icon: <FaLocationArrow className="texl text-[#309689]" />,
          title: "Los-Angeles, USA",
        },
      ],
    },
    {
      _id: 3,
      job_title: "Senior Human Resources Executive",
      company_name: "Mraz, Quiley and Feest Inc.",
      posted_time: "15",
      assets: [
        {
          _id: 11,
          icon: <FaHotel className="texxl text-[#309689]" />,
          title: "Construction",
        },
        {
          _id: 12,
          icon: <FaClock className="texxl text-[#309689]" />,
          title: "Full Time",
        },
        {
          _id: 13,
          icon: <FaMoneyBillWave className="texxl text-[#309689]" />,
          title: "$48000 - $52000",
        },
        {
          _id: 14,
          icon: <FaLocationArrow className="texxl text-[#309689]" />,
          title: "Texas, USA",
        },
      ],
    },
    {
      _id: 4,
      job_title: "Sr. Executive HR ops & Payroll",
      company_name: "VonRueden - Weber Co.",
      posted_time: "30",
      assets: [
        {
          _id: 11,
          icon: <FaHotel className="textxl text-[#309689]" />,
          title: "Hotel & Tourism",
        },
        {
          _id: 12,
          icon: <FaClock className="textxl text-[#309689]" />,
          title: "Full Time",
        },
        {
          _id: 13,
          icon: <FaMoneyBillWave className="textxl text-[#309689]" />,
          title: "$42000 - $48000",
        },
        {
          _id: 14,
          icon: <FaLocationArrow className="textxl text-[#309689]" />,
          title: "Florida, USA",
        },
      ],
    },
    {
      _id: 5,
      job_title: "Retail Sales Executive/Senior Sales Executive",
      company_name: "Flatley Inc.",
      posted_time: "5",
      assets: [
        {
          _id: 11,
          icon: <FaHotel className="text-xl text-[#309689]" />,
          title: "Hotel & Tourism",
        },
        {
          _id: 12,
          icon: <FaClock className="text-xl text-[#309689]" />,
          title: "Full Time",
        },
        {
          _id: 13,
          icon: <FaMoneyBillWave className="text-xl text-[#309689]" />,
          title: "$40000 - $42000",
        },
        {
          _id: 14,
          icon: <FaLocationArrow className="text-xl text-[#309689]" />,
          title: "New-York, USA",
        },
      ],
    },
  ];

  useEffect(() => {
    if (id) {
      const job = jobsArray.find((item) => item._id === Number(id));
      setSpecificJob(job);
    }
  }, [id]);

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <Head>
          <title>Job Details</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
        </Head>
        <header className="bg-black text-white text-center py-4">
          <h1 className="text-3xl font-bold">Job Details</h1>
        </header>
        <main className="max-w-7xl mx-auto p-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3">
                <div className="flex items-center mb-4">
                  <Image
                    src="/hrimg.png"
                    width={50}
                    height={50}
                    alt="Company Logo"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-bold">
                      {specificJob?.job_title}
                    </h2>
                    <p className="text-gray-600">{specificJob?.company_name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 ml-4">Commerce</span>
                  <span className="text-gray-600 ml-4">Full time</span>
                  <span className="text-gray-600">$40000-$42000</span>
                  <span className="text-gray-600 ml-4">New York, USA</span>
                  <button className="bg-teal-700 text-white mr-2 px-4 py-0.5 rounded">
                    Apply Job
                  </button>
                </div>
                <h3 className="text-xl font-bold mb-2">Job Description</h3>
                <p className="text-gray-700 mb-4">
                  We are seeking a highly motivated and experienced Senior Human
                  Resources Executive to lead and implement strategic HR
                  initiatives that align with our organization's goals and
                  culture. This role requires a proactive and people-oriented
                  leader who can drive talent acquisition, employee engagement,
                  performance management, and HR policy development.
                </p>
                <h3 className="text-xl font-bold mb-2">Key Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>
                    Talent Acquisition & Onboarding: Oversee recruitment,
                    hiring, and onboarding to attract top talent.
                  </li>
                  <li>
                    HR Policies & Compliance: Ensure adherence to labor laws,
                    company policies, and best HR practices.
                  </li>
                  <li>
                    Training & Development: Organize employee training programs
                    to enhance skills and productivity.
                  </li>
                  <li>
                    Compensation & Benefits: Manage payroll, incentives, and
                    employee welfare programs.
                  </li>
                  <li>
                    Employee Relations: Address employee concerns, mediate
                    conflicts, and maintain a positive work culture.
                  </li>
                  <li>
                    HR Data & Analytics: Use HR metrics to improve workforce
                    planning and decision-making.
                  </li>
                </ul>
                <h3 className="text-xl font-bold mb-2">
                  Preferred Skills and Requirements
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>
                    Bachelor's/Master's degree in Human Resources, Business
                    Administration, or related field.
                  </li>
                  <li>
                    5+ years of HR experience, preferably in a leadership role.
                  </li>
                  <li>
                    Excellent communication, leadership, and problem-solving
                    skills.
                  </li>
                  <li>
                    Strong knowledge of labor laws, HR software, and industry
                    best practices and performance management tools.
                  </li>
                  <li>
                    Ability to handle confidential information with integrity
                    and professionalism.
                  </li>
                </ul>
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">Tags:</h3>
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                    Full time
                  </span>
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                    Commerce
                  </span>
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                    New York
                  </span>
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                    Corporate
                  </span>
                  <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                    Location
                  </span>
                </div>
                <div className="flex items-center mb-6">
                  <span className="mr-2">Share Job:</span>
                  <a
                    href="#"
                    className="text-gray-600 mr-2">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 mr-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-600">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 lg:pl-6">
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">Job Overview</h3>
                  <ul className="text-gray-700">
                    <li className="mb-2">
                      {" "}
                      <strong>Job Title:</strong> Executive Solutions
                    </li>
                    <li className="mb-2">
                      <strong>Job Type:</strong> Full time
                    </li>
                    <li className="mb-2">
                      <strong>Category:</strong> Commerce
                    </li>
                    <li className="mb-2">
                      <strong>Experience:</strong> 5+ Years
                    </li>
                    <li className="mb-2">
                      <strong>Offered Salary:</strong> $40000-$42000
                    </li>
                    <li className="mb-2">
                      <strong>Location:</strong> New York, USA
                    </li>
                  </ul>
                  {/* <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62239.35697276339!2d77.61550395!3d12.912139999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151c9d05f3c7%3A0x7b69aa7e2c0418cd!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1706301453151!5m2!1sen!2sin"
                    allowfullscreen
                    loading="lazy"
                  ></iframe> */}
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                  <form>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="w-full mb-2 p-2 border rounded-md"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full mb-2 p-2 border rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full mb-2 p-2 border rounded-md"
                    />
                    <textarea
                      placeholder="Your Message"
                      className="w-full mb-2 p-2 border rounded-md"></textarea>
                    <button
                      type="submit"
                      className="bg-teal-700 text-white px-4 py-2 rounded-md w-full">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Jobs</h2>
            <p className="text-gray-600 mb-6">
              Latest Job Openings Matching Your Skills
            </p>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <div className="flex items-center mb-4">
                <Image
                  src="/operation.jpg"
                  width={50}
                  height={50}
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">
                    {specificJob?.job_title}
                  </h3>
                  <p className="text-gray-600">{specificJob?.company_name}</p>
                </div>
              </div>
              <p className="text-gray-600">
                {specificJob?.posted_time}
                {"mins ago"}
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <div className="flex items-center mb-4">
                <Image
                  src="/intranet.png"
                  width={50}
                  height={50}
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">
                    {specificJob?.job_title}
                  </h3>
                  <p className="text-gray-600">{specificJob?.company_name} </p>
                </div>
              </div>
              <p className="text-gray-600">
                {specificJob?.posted_time}
                {"mins ago"}
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/sales.png"
                  width={50}
                  height={50}
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">
                    {specificJob?.job_title}
                  </h3>
                  <p className="text-gray-600">{specificJob?.company_name}</p>
                </div>
              </div>
              <p className="text-gray-600">
                {" "}
                {specificJob?.posted_time}
                {"mins ago"}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobDetailsPage;
