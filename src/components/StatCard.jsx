import React from "react";

const StatCard = ({ icon, title, value, amount }) => {
  return (
    <div className='flex items-center justify-start gap-4 w-full'>
      {icon}

      <div className='flex flex-col flex-1 pr-2 justify-center gap-2'>
        <h3 className='text-lg font-semibold text-gray-700'>
          <span className='text-black text-2xl'>{value} </span>
          {title}
        </h3>

        <hr className='border border-gray-300' />

        <p className='font-semibold text-lg'>{amount}</p>
      </div>
    </div>
  );
};

export default StatCard;
