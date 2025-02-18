import React, { useState } from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RoomMainContentHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("low-to-high");

  const options = [
    { value: "low-to-high", label: "Low to High" },
    { value: "high-to-low", label: "High to Low" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center bg-gray-100">
      <div className="font-bold text-sm tracking-WIDE">
        <span>15 ROOM CATEGORIES AT THIS RESORT</span>
      </div>
      <div className="flex items-center">
        <div className="relative mr-[50px]">
          <button
            id="sort"
            name="sort"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between gap-2 p-2 px-4  focus:outline-none w-[270px] bg-white"
          >
            Price: {options.find((opt) => opt.value === selectedValue)?.label}
            <span className="absolute right-1 top-1/2 -translate-y-1/2">
              {isOpen ? (
                <IoIosArrowUp size={20} className="transition-transform " />
              ) : (
                <IoIosArrowDown size={20} className="transition-transform " />
              )}
            </span>
          </button>

          {isOpen && (
            <div
              className="absolute top-full left-0 w-full bg-white shadow-lg rounded mt-0.5 z-10"
              role="listbox"
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedValue(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                    selectedValue === option.value ? "bg-gray-50" : ""
                  }`}
                  role="option"
                  aria-selected={selectedValue === option.value}
                >
                  Price: {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex space-x-3">
          <button className="space-y-0.5">
            <div className="w-5 h-1 bg-blue-800"></div>
            <div className="w-5 h-1 bg-blue-800 "></div>
            <div className="w-5 h-1 bg-blue-800"></div>
          </button>
          <button className="space-y-0.5">
            <div className="w-5 h-2 bg-gray-400"></div>
            <div className="w-5 h-2 bg-gray-400"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomMainContentHeader;
