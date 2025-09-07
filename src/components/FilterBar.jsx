import React from "react";

const FilterBar = ({ selected, onSelect }) => {
  const filters = ["3 Days", "7 Days", "10 Days", "30 Days"];

  return (
    <div className='inline-flex mb-6 border border-red-600 rounded divide-x  divide-red-600'>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onSelect(f)}
          className={`px-3 py-1 text-sm cursor-pointer ${
            selected === f
              ? "bg-red-200 text-red-500 font-semibold"
              : "font-medium"
          }`}>
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
