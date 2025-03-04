'use client';

import { useState } from 'react';
import { FaSortUp, FaSortDown, FaEllipsisH, FaSearch } from 'react-icons/fa';

const jobData = [
  {
    jobApplied: 'Business Consultant',
    companyName: 'McKinsey & Company',
    status: 'under review',
    jobId: 26,
    applyOn: '6/3/22',
  },
  {
    jobApplied: 'Management Trainee',
    companyName: 'Bain & Company',
    status: 'under review',
    jobId: 35,
    applyOn: '12/2/22',
  },
  {
    jobApplied: 'Strategy Analyst',
    companyName: '',
    status: 'rejected',
    jobId: 48,
    applyOn: '4/19/23',
  },
  {
    jobApplied: 'Operations Manager',
    companyName: 'Goldman Sachs',
    status: 'shortlisted',
    jobId: 90,
    applyOn: '1/2/23',
  },
  {
    jobApplied: 'Business Development',
    companyName: '',
    status: 'shortlisted',
    jobId: 67,
    applyOn: '9/4/23',
  },
  {
  jobApplied: 'Project Manager',
  companyName: 'Morgan Stanley',
  status: 'rejected',
  jobId: 35,
  applyOn: '6/3/22',
},
{
  jobApplied: 'Marketing Manager',
  companyName: 'Deutsche Bank',
  status: 'rejected',
  jobId: 48,
  applyOn: '12/2/22',
},
{
  jobApplied: 'Sales Manager',
  companyName: 'Microsoft',
  status: 'under review',
  jobId: 90,
  applyOn: '4/19/23',
},
{
  jobApplied: 'Product Manager',
  companyName: 'Johnson & Johnson',
  status: 'shortlisted',
  jobId: 67,
  applyOn: '1/2/23',
}
];

export default function JobApplications() {
  const [search, setSearch] = useState('');
  const [sortedBy, setSortedBy] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  const sortData = (key) => {
    setIsAscending(sortedBy === key ? !isAscending : true);
    setSortedBy(key);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-lg font-semibold">Job Application...</h2>
        <div className="relative w-48">
          <input
            type="text"
            placeholder="Search"
            className="w-full border px-3 py-2 pl-8 rounded-md focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-2 top-3 text-gray-400" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-100 text-sm text-gray-600">
              {['Job Applied', 'Company Name', 'Status', 'JOB ID', 'Apply On', 'Options'].map((heading, index) => (
                <th key={index} className="px-4 py-3 text-left whitespace-nowrap">
                  <button
                    onClick={() => sortData(heading.toLowerCase().replace(/ /g, ''))}
                    className="flex items-center gap-1 hover:text-gray-800"
                  >
                    {heading}
                    {sortedBy === heading.toLowerCase().replace(/ /g, '') && (
                      isAscending ? <FaSortUp /> : <FaSortDown />
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {jobData.map((job, index) => (
              <tr key={index} className="border-t text-sm">
                <td className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
                  <input type="radio" className="accent-gray-600" /> {job.jobApplied}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">{job.companyName}</td>
                <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{job.status}</td>
                <td className="px-4 py-3 text-center whitespace-nowrap">{job.jobId}</td>
                <td className="px-4 py-3 whitespace-nowrap">{job.applyOn}</td>
                <td className="px-4 py-3 text-center">
                  <FaEllipsisH className="text-gray-600 cursor-pointer hover:text-gray-800" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}