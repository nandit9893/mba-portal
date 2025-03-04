import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const Testinomials = () => {
  const testinomialsArray = [
    {
      _id: 1,
      comment: "Amazing services",
      description: "Range of services to help professionals find the right career opportunities and employers discover top talent.",
      image: "/testinomial_1.jpeg",
      name: "Marco Klhn",
      subtitle: "Happy Client",
    },
    {
      _id: 2,
      comment: "Everything simple",
      description: "Very simple and easy to use. The interface is clean, navigation is smooth, and job listings are well-organized. It takes just a few clicks to find relevant MBA opportunities without any unnecessary complexity",
      image: "/testinomial_2.jpeg",
      name: "Kristin Hester",
      subtitle: "Happy Client",
    },
    {
      _id: 3,
      comment: "Awesome, thank you!",
      description: "The application process is straightforward, and the platform ensures a hassle-free experience for job seekers. If you're looking for a no-fuss, efficient job search, this portal is a great choice",
      image: "/testinomial_3.jpeg",
      name: "Zion Cisneors",
      subtitle: "Happy Client",
    },
  ]

  return (
    <div className="bg-green-50 sm:p-20 p-5">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h4 className="sm:text-5xl text-4xl font-semibold text-black text-center">Testinomials from Our Customers</h4>
          <p className="text-lg font-normal text-black">See what the community has to say</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center mx-auto justify-center">
          {
            testinomialsArray.map((item) => (
              <div className="bg-white w-[320px] sm:w-80 lg:w-96 h-[400px] rounded-2xl shadow-2xl flex flex-col gap-0 sm:gap-4 p-10" key={item._id}>
                <div className="flex gap-2">
                  <FaStar className="text-orange-500 text-lg"/>
                  <FaStar className="text-orange-500 text-lg"/>
                  <FaStar className="text-orange-500 text-lg"/>
                  <FaStar className="text-orange-500 text-lg"/>
                  <FaStar className="text-orange-500 text-lg"/>
                </div>
                <div className="flex flex-col gap-8">
                  <h4 className="text-2xl font-semibold text-black">{item.comment}</h4>
                  <p className="text-[15px] font-medium text-gray-600" style={{fontStyle: "italic"}}>{item.description.slice(0, 125)}...</p>
                </div>
                <div className="flex justify-end text-7xl text-[#309689]">’’</div>
                <div className="flex gap-5 items-center">
                <Image src={item.image} width={50} height={50} alt="Picture of the author" className="rounded-full"/>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-lg font-semibold text-black">{item.name}</p>
                    <p className="text-xs text-gray-600 font-semibold">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Testinomials;
