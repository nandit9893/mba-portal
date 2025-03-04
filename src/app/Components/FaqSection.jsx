"use client";
import { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";

import React from "react";

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(1); // Default open FAQ item (first one)

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "Can I upload a CV?",
      answer:
        "Yes! You can upload your CV to showcase your skills and experience, making it easier for recruiters to find you.",
      isOpen: true, // Open by default (first item open)
    },
    {
      id: 2,
      question: "How long will the recruitment process take?",
      answer: "",
    },
    {
      id: 3,
      question: "Do you recruit for Graduates, Apprentices and Students?",
      answer: "",
    },
    {
      id: 4,
      question: "What does the recruitment and selection process involve?",
      answer: "",
    },
    {
      id: 5,
      question:
        "Can I receive notifications for any future jobs that may interest me?",
      answer: "",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Find answers to common job portal queries below
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`border border-gray-200 rounded-lg overflow-hidden 
                    ${
                      openFaq === faq.id ? "bg-primaryGreen bg-opacity-10" : ""
                    }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg text-gray-800">
                    0{faq.id}
                  </span>
                  <span
                    className={`font-semibold ${
                      openFaq === faq.id ? "text-primaryGreen" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                {openFaq === faq.id ? (
                  <MinusCircleIcon className="w-6 h-6 text-primaryGreen" />
                ) : (
                  <PlusCircleIcon className="w-6 h-6 text-primaryGreen" />
                )}
              </button>

              {openFaq === faq.id && faq.answer && (
                <div className="px-4 pb-4 text-gray-700 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
