import React from "react";
import Image from "next/image";
import { FaHotel, FaClock, FaMoneyBillWave, FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { Bookmark } from "lucide-react";

const HomeJobsAvailable = () => {
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

  return (
    <div className="bg-white sm:p-20 p-5 flex flex-col gap-4">
      <h4 className="sm:text-4xl text-3xl text-black font-semibold text-left">MBA/BBA Jobs Available</h4>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center">
          <p className="text-lg text-black sm:text-left text-center">Elite jobs for elite minds - start your journey!</p>
          <p className="text-[#309689] text-lg font-semibold underline sm:mt-0 mt-3">View all</p>
        </div>
        <div className="flex flex-col gap-8">
            {
                jobsArray.slice(0, 6).map((item) => (
                    <div className="sm:p-10 p-5 flex flex-col gap-4 w-full shadow-2xl rounded-2xl" key={item._id}>
                        <div className="flex justify-between items-center w-full">
                            <p className="text-[#309689] bg-green-100 px-4 py-2 rounded-2xl">{item.posted_time} min ago</p>
                            <Bookmark className="text-black text-2xl"/>
                        </div>
                        <div className="flex items-center gap-5">
                            <Image src="/job.jpeg" className="rounded-full" width={40} height={40} style={{width: "auto"}} alt="Picture of the author"/>
                            <div className="flex flex-col gap-1">
                                <p className="text-xl font-semibold">{item.job_title}</p>
                                <p className="text-xs font-medium">{item.company_name}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 gap-5">
                                {
                                    item.assets.map((itemAssests) => (
                                        <div className="flex gap-3 items-center" key={itemAssests._id}>
                                            {itemAssests.icon}
                                            <p className="text-gray-600">{itemAssests.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <Link href="/JobDetails" className="text-white bg-[#309689] px-4 py-2 rounded-2xl">Job Details</Link>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default HomeJobsAvailable;
