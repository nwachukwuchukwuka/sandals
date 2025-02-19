import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const RoomMainContentHeader = ({
  activeView,
  setActiveView,
  selectedCategory,
  setSelectedCategory,
}) => {
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
    <div className="">
      {/* Selected Category Button */}
      {selectedCategory && (
        <div className="h-[40px] transition-all duration-300 mb-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center bg-blue-100 text-blue-800 px-3 py-1.5 uppercase rounded-md text-[12px] font-medium
                     transition-all duration-300 hover:bg-blue-200 transform hover:scale-[1.02]"
          >
            {selectedCategory}
            <IoMdClose className="ml-2 w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Header Content */}
      <div className="flex justify-between items-center">
        <div className="font-bold text-sm tracking-WIDE">
          <span className="transition-all duration-300">
            15 ROOM CATEGORIES AT THIS RESORT
          </span>
        </div>

        <div className="flex items-center">
          <div className="relative mr-[50px]">
            <button
              id="sort"
              name="sort"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between gap-2 p-2 px-4 focus:outline-none w-[270px] bg-white"
            >
              Price: {options.find((opt) => opt.value === selectedValue)?.label}
              <span className="absolute right-1 top-1/2 -translate-y-1/2">
                <IoIosArrowDown
                  size={20}
                  className={`transition-transform duration-500 transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
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

          {/* View Toggle Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => setActiveView("card")}
              className="space-y-0.5 focus:outline-none"
            >
              <div
                className={`w-5 h-1 ${
                  activeView === "card" ? "bg-blue-800" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`w-5 h-1 ${
                  activeView === "card" ? "bg-blue-800" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`w-5 h-1 ${
                  activeView === "card" ? "bg-blue-800" : "bg-gray-400"
                }`}
              ></div>
            </button>

            <button
              onClick={() => setActiveView("cardOne")}
              className="space-y-0.5 focus:outline-none"
            >
              <div
                className={`w-5 h-2 ${
                  activeView === "cardOne" ? "bg-blue-800" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`w-5 h-2 ${
                  activeView === "cardOne" ? "bg-blue-800" : "bg-gray-400"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomMainContentHeader;
