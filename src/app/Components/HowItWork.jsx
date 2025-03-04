import React from "react";

const HowItWork = () => {
  const steps = [
    {
      icon: "👤", // Replace with actual SVG or icon component if you want
      title: "Create Account",
      description: "Create account & unlock opportunities!",
    },
    {
      icon: "📤",
      title: "Upload Resume",
      description: "Upload resume & get hired!",
    },
    {
      icon: "🔎",
      title: "Find Jobs",
      description: "Find jobs, apply easily, and grow your career fast!",
    },
    {
      icon: "✅",
      title: "Apply Job",
      description: "Apply for jobs and get hired!",
    },
  ];

  return (
    <section className="bg-white py-12 font-sans">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">How it works</h2>
        <p className="text-darkGray mt-2">
          Finding your dream job has never been easier! Follow these simple
          steps to kickstart your career with Job Portal.
        </p>

        {/* Card Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-lightGray border rounded-lg shadow-soft p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-primaryGreen text-4xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-darkGray mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
