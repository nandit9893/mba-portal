import React from "react";
import Image from "next/image";
import Head from "next/head";

const JobDetailsPage = () => {
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
                      Senior Human Resources Executive
                    </h2>
                    <p className="text-gray-600">Laffler and Sons</p>
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
                  <a href="#" className="text-gray-600 mr-2">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-600 mr-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-600">
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
                  <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62239.35697276339!2d77.61550395!3d12.912139999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151c9d05f3c7%3A0x7b69aa7e2c0418cd!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1706301453151!5m2!1sen!2sin"
                    allowfullscreen
                    loading="lazy"
                  ></iframe>
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
                      className="w-full mb-2 p-2 border rounded-md"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-teal-700 text-white px-4 py-2 rounded-md w-full"
                    >
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
                  <h3 className="text-xl font-bold">Operations Coordinator</h3>
                  <p className="text-gray-600">Green Group</p>
                </div>
              </div>
              <p className="text-gray-600">23 mins ago</p>
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
                    District Intranet Director
                  </h3>
                  <p className="text-gray-600">Vandervort - Walter Co</p>
                </div>
              </div>
              <p className="text-gray-600">23 mins ago</p>
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
                    Sales Manager MBA/B-TECH(Not pursuing)
                  </h3>
                  <p className="text-gray-600">
                    Cormier, Turner and Feeney Inc
                  </p>
                </div>
              </div>
              <p className="text-gray-600">23 mins ago</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobDetailsPage;
