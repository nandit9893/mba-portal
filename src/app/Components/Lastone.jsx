"use client";
import { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

export default function PaymentStatus() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const paymentData = [
    { title: "Payment failed", value: 230, action: "Resume Upload", count: 36 },
    { title: "Payment Complete today", value: 46, action: "Resume Make", count: 24 },
  ];

  return (
    <div className="p-4 w-full">
      {paymentData.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between items-center px-6 py-3 rounded-lg shadow-md ${
            index % 2 === 0 ? "bg-white" : "bg-gray-100"
          } mb-2 w-full`}
        >
          <p className="font-medium">{item.title}</p>
          <p className="font-semibold">{item.value}</p>
          <p
            className={`${
              index % 2 !== 0 ? "text-green-600" : "text-black"
            } font-medium cursor-pointer`}
          >
            {item.action}
          </p>
          <p className="font-semibold">{item.count}</p>

          {/* Expand/Collapse Button */}
          <button
            onClick={() => toggleExpand(index)}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            {expanded === index ? <IoIosRemove size={20} /> : <IoIosAdd size={20} />}
          </button>
        </div>
      ))}
    </div>
  );
}
