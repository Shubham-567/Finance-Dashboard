import React from "react";

const ChartCard = ({ title, children }) => {
  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <h4 className='text-lg font-semibold'>{title}</h4>
        <button className='btn-outline'>view report</button>
      </div>

      <hr className='my-4 border border-gray-300' />

      {/* Chart */}
      <div className='flex-1'>{children}</div>
    </div>
  );
};

export default ChartCard;
