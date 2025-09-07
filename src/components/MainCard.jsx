"use client";

import { ChevronDown, ChevronsDown, ChevronsUp } from "lucide-react";

const MainCard = ({ title, value, mom, trend }) => {
  const isUp = trend === "up";

  return (
    <div className='relative flex flex-col justify-between gap-2 lg:items-center card'>
      {/* card content  */}
      <p className='font-medium'>Current</p>
      <h3 className='text-3xl font-semibold'>
        {title} {value.split(" ")[0]}
        <span className='text-xl text-txt-muted'> {value.split(" ")[1]}</span>
      </h3>
      <p className='flex items-center font-medium'>
        <span className={`${isUp ? "text-success" : "text-primary"}`}>
          {isUp ? <ChevronsUp /> : <ChevronsDown />}
        </span>
        {mom} MoM
      </p>

      {/* card actions */}
      <div className='absolute right-0 top-0 p-4 h-full flex flex-col gap-8 items-center justify-between'>
        <button className='btn-outline' onClick={() => alert("View Report")}>
          View Report
        </button>
        <button
          className='text-sm text-success font-medium flex items-center hover:text-success-hover outline-none focus:ring-1 px-2 cursor-pointer'
          onClick={() => alert("View Trend")}>
          View Trend
          <span>
            <ChevronDown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default MainCard;
