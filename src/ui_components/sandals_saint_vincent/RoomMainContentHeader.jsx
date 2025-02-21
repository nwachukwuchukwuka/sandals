import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useRoomFilter } from "./context/RoomFilterContext";

const RoomMainContentHeader = ({
  activeView,
  setActiveView,
  onSortChange,
  sortOrder,
}) => {
  const {
    selectedCategory,
    setSelectedCategory,
    checkedFilters,
    removeFilter,
    getFilteredRooms,
  } = useRoomFilter();

  const [isOpen, setIsOpen] = useState(false);

  // Get filtered rooms count
  const filteredRooms = getFilteredRooms();
  const roomCount = filteredRooms.length;

  const options = [
    { value: "low-to-high", label: "Low to High" },
    { value: "high-to-low", label: "High to Low" },
  ];

  const handleSortChange = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  const renderFilterButtons = () => {
    const allFilters = [];

    if (selectedCategory) {
      allFilters.push(
        <button
          key="category"
          onClick={() => setSelectedCategory(null)}
          className="flex items-center bg-white text-blue-500 px-3 py-1.5 uppercase rounded-md text-[12px] font-medium
                   transition-all duration-300   mr-2"
        >
          {selectedCategory}
          <IoMdClose className="ml-2 w-4 h-4" />
        </button>
      );
    }

    Object.entries(checkedFilters).forEach(([group, filters]) => {
      filters.forEach((filter) => {
        allFilters.push(
          <button
            key={`${group}-${filter}`}
            onClick={() => removeFilter(group, filter)}
            className="flex items-center bg-white text-blue-500 px-3 py-1.5 uppercase rounded-md text-[12px] font-medium
                     transition-all duration-300   mr-2"
          >
            {filter}
            <IoMdClose className="ml-2 w-4 h-4" />
          </button>
        );
      });
    });

    return allFilters;
  };

  return (
    <div className="">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">{renderFilterButtons()}</div>

      {/* Main Header Content */}
      <div className="flex justify-between items-center">
        <div className="font-bold text-sm tracking-WIDE">
          <span className="transition-all duration-300">
            {selectedCategory ||
            Object.values(checkedFilters).some(
              (filters) => filters.length > 0
            ) ? (
              <>
                {roomCount} ROOM {roomCount === 1 ? "CATEGORY" : "CATEGORIES"}{" "}
                MATCHING <span className="text-gray-500">YOUR SELECTIONS</span>
              </>
            ) : (
              <>
                {roomCount} ROOM {roomCount === 1 ? "CATEGORY" : "CATEGORIES"}{" "}
                AT THIS RESORT
              </>
            )}
          </span>
        </div>

        <div className="flex items-center">
          {/* Price Sort Dropdown */}
          <div className="relative mr-[50px]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between gap-2 p-2 px-4 focus:outline-none w-[270px] bg-white"
            >
              Price: {options.find((opt) => opt.value === sortOrder)?.label}
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
                    onClick={() => handleSortChange(option.value)}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                      sortOrder === option.value ? "bg-gray-50" : ""
                    }`}
                    role="option"
                    aria-selected={sortOrder === option.value}
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
