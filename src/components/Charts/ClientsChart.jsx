"use client";

import React, { useEffect, useState } from "react";

const colorMap = {
  orange: "bg-orange-500",
  green: "bg-green-600",
  red: "bg-red-700",
  darkred: "bg-orange-700",
};

export const ClientsChart = () => {
  const data = [
    { label: "Online", value: 60, color: "orange" },
    { label: "New", value: 2, color: "green" },
    { label: "Active", value: 541, color: "red" },
    { label: "Inactive", value: 3824, color: "darkred" },
  ];

  // Find each specific data point to render it uniquely
  const onlineData = data.find((d) => d.label === "Online");
  const newData = data.find((d) => d.label === "New");
  const activeData = data.find((d) => d.label === "Active");
  const inactiveData = data.find((d) => d.label === "Inactive");

  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-72 h-64 flex items-center justify-center'>
        {/* Active Circle */}
        {inactiveData && (
          <div
            className={`absolute top-8 right-0 size-48 rounded-full flex items-center justify-center text-white text-3xl font-bold opacity-90 ${
              colorMap[activeData.color]
            }`}>
            {activeData.value}
          </div>
        )}

        {/* Inactive Circle */}
        {activeData && (
          <div
            className={`absolute top-20 left-0 size-34 rounded-full flex items-center justify-center text-white text-4xl font-bold opacity-90 ${
              colorMap[inactiveData.color]
            }`}>
            {inactiveData.value}
          </div>
        )}

        {/* Online Circle */}
        {onlineData && (
          <div
            className={`absolute top-0 left-20 size-24 rounded-full flex items-center justify-center text-white text-2xl font-bold opacity-90 ${
              colorMap[onlineData.color]
            }`}>
            {onlineData.value}
          </div>
        )}

        {/* New Circle */}
        {newData && (
          <div
            className={`absolute bottom-4 right-16 size-16 rounded-full flex items-center justify-center text-white text-lg font-bold opacity-90 ${
              colorMap[newData.color]
            }`}>
            {newData.value}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className='flex items-center justify-center gap-4 mt-6'>
        {data.map((item) => (
          <div
            key={item.label}
            className='flex items-center gap-2 text-sm text-gray-600'>
            <span
              className={`size-3 rounded-full ${colorMap[item.color]}`}></span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsChart;
