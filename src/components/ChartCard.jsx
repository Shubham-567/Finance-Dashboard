import { downloadPdf } from "@/utils/downloadPdf";
import React, { useState } from "react";

const ChartCard = ({ title, children }) => {
  const [loading, setLoading] = useState(false);

  const handleDownloadPdf = async () => {
    if (title === "Clients") {
      setLoading(true);
      await downloadPdf("pdf-content", "finance-dashboard.pdf");
      setLoading(false);
    } else if (title === "Sip Business Chart") {
      document.documentElement.classList.toggle("dark");
    } else {
      alert("view report");
    }
  };

  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <h4 className='text-lg font-semibold'>{title}</h4>
        <button className='btn-outline' onClick={handleDownloadPdf}>
          {loading
            ? "Loading..."
            : title.toLowerCase() === "clients"
            ? "Download PDF"
            : title.toLowerCase() === "sip business chart"
            ? "Toggle Dark Mode"
            : "View Reports"}
        </button>
      </div>

      <hr className='my-4 border border-border' />

      {/* Chart */}
      <div className='flex-1'>{children}</div>
    </div>
  );
};

export default ChartCard;
