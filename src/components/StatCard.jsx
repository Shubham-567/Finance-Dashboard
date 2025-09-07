import React from "react";

const StatCard = ({ icon, title, value, amount }) => {
  return (
    <div className='flex items-center justify-start gap-4 w-full max-lg:border border-border rounded p-2 max-lg:bg-[#fef2f2]'>
      {icon}

      <div className='flex flex-col flex-1 pr-2 justify-center gap-2'>
        <h3 className='text-base font-semibold text-txt-muted'>
          <span className='text-txt-primary text-xl'>{value} </span>
          {title}
        </h3>

        <hr className='border border-border' />

        <p className='font-semibold text-lg'>{amount}</p>
      </div>
    </div>
  );
};

export default StatCard;
