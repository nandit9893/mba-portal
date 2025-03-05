import { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import jsPDF from "jspdf";

const Reports = () => {
  const [isAscending, setIsAscending] = useState(true);

  // Sample Revenue Data
  const revenueData = {
    monthRevenue: "₹50,000",
    lastMonthRevenue: "₹45,000",
    growthRate: "+15%",
    subscriptionRevenue: "₹30,000",
    oneTimePayments: "₹20,000",
    pendingAmount: "₹10,000",
    overduePayments: "₹5,000",
    highestEarningMonth: "July ₹80,000",
    lowestEarningMonth: "January ₹30,000",
    jobPostingRevenue: "₹20,000",
  };

  // Toggle sorting order
  const toggleSort = () => {
    setIsAscending(!isAscending);
  };

  // Generate PDF Report
  const downloadReport = () => {
    const doc = new jsPDF();
    doc.text("Reports Dashboard", 20, 20);
    doc.text(`Month’s Revenue: ${revenueData.monthRevenue}`, 20, 30);
    doc.text(`Last Month’s Revenue: ${revenueData.lastMonthRevenue}`, 20, 40);
    doc.text(`Growth Rate: ${revenueData.growthRate}`, 20, 50);
    doc.text(`Subscription Revenue: ${revenueData.subscriptionRevenue}`, 20, 60);
    doc.text(`One-Time Payments: ${revenueData.oneTimePayments}`, 20, 70);
    doc.text(`Pending Amount: ${revenueData.pendingAmount}`, 20, 80);
    doc.text(`Overdue Payments: ${revenueData.overduePayments}`, 20, 90);
    doc.text(`Highest Earning Month: ${revenueData.highestEarningMonth}`, 20, 100);
    doc.text(`Lowest Earning Month: ${revenueData.lowestEarningMonth}`, 20, 110);
    doc.text(`Job Posting Revenue: ${revenueData.jobPostingRevenue}`, 20, 120);
    doc.save("JobPortal_Report.pdf");
  };  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md p-6 rounded-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Reports</h1>
          <button
            onClick={downloadReport}
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            <FaDownload className="mr-2" /> Download Report (PDF)
          </button>
        </div>

        {/* Reports Dashboard */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-200 p-4 rounded-lg">
            <p>📌 Total Jobs Posted: <b>500</b></p>
            <p>🏆 Total Applicants: <b>1,200</b></p>
            <p>❌ Rejected Applications: <b>300</b></p>
            <p>📜 Active Subscriptions: <b>120 Paid</b></p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p>📌 Total Job Applications: <b>12,500</b></p>
            <p>✅ Accepted Applications: <b>8,000</b></p>
            <p>❌ Rejected Applications: <b>3,500</b></p>
            <p>⏳ Pending Applications: <b>1,000</b></p>
          </div>
        </div>

        {/* Payment & Revenue Reports */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Payment & Revenue Reports</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Total Revenue Generated */}
            <div>
              <h3 className="text-md font-semibold mb-2 flex items-center">
                Total Revenue Generated
                <button onClick={toggleSort} className="ml-2">
                  {isAscending ? <FaSortUp /> : <FaSortDown />}
                </button>
              </h3>
              <p>Month’s Revenue: <b>{isAscending ? revenueData.monthRevenue : revenueData.lastMonthRevenue}</b></p>
              <p>Growth Rate: 📈 <b>{revenueData.growthRate}</b></p>
              <p>Last Month’s Revenue: <b>{revenueData.lastMonthRevenue}</b></p>
              <p>Subscription Revenue: <b>{revenueData.subscriptionRevenue}</b></p>
              <p>One-Time Payments: <b>{revenueData.oneTimePayments}</b></p>
            </div>

            {/* Pending Payments & Month Report */}
            <div>
              <h3 className="text-md font-semibold mb-2">Pending Payments & Month Report</h3>
              <p>Total Pending Amount: <b>{revenueData.pendingAmount}</b></p>
              <p>Overdue Payments (30+ Days): <b>{revenueData.overduePayments}</b></p>
              <p>Highest Earning Month: <b>{revenueData.highestEarningMonth}</b></p>
              <p>Lowest Earning Month: <b>{revenueData.lowestEarningMonth}</b></p>
              <p>Job Posting Revenue: <b>{revenueData.jobPostingRevenue}</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;