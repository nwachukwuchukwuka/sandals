import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FiInfo } from "react-icons/fi";
import { useRoomFilter } from './context/RoomFilterContext';

const RoomSidebar = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    checkedFilters,
    toggleFilter,
    clearGroupFilters
  } = useRoomFilter();

  const [openSections, setOpenSections] = useState({
    roomLevels: true,
    roomViews: true,
    roomTypes: true,
    roomFeatures: true,
    roomSpecials: true,
  });

  // Define disabled checkboxes for each category
  const disabledCheckboxes = {
    "Butler Elite": [
      "Pool",
      "Partial Oceanview",
      "Swim-up Suite",
      "Balcony",
      "Wheelchair Accessible",
      "In-Room Bar w/Liquor",
    ],
    "Club Sandals": [
      "Beachfront",
      "Oceanview",
      "Oceanfront",
      "Walkout Suite",
      "One-Bedroom Suite",
      "Private Pool Suite",
      "Villa Suite",
      "Over-The-Water Villa",
      "Two Story Suite",
      "In-Room Bar w/ Premium Liquor",
      "Private Pool",
    ],
    "Sandals Luxury": [
      "Beachfront",
      "Oceanview",
      "Oceanfront",
      "Swim-up Suite",
      "Walkout Suite",
      "One-Bedroom Suite",
      "Private Pool Suite",
      "Villa Suite",
      "Over-The-Water Villa",
      "Two Story Suite",
      "In-Room Bar w/Liquor",
      "Room Service",
      "Patio",
      "In-Room Bar w/ Premium Liquor",
      "Private Pool",
    ],
  };

  const isCheckboxDisabled = (label) => {
    if (!selectedCategory || selectedCategory === "View All") return false;
    return disabledCheckboxes[selectedCategory]?.includes(label) || false;
  };

  const toggleSection = (sectionName) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value === "View All" ? null : value);
  };

  const renderCheckboxGroup = (groupName, items) => (
    <div className={`mt-2 ml-1 space-y-2 overflow-hidden transition-all duration-700 ${
      openSections[groupName] ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
    }`}>
      {items.map((item) => (
        <label key={item} className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="checkbox"
              className="opacity-0 absolute h-4 w-4 cursor-pointer"
              checked={checkedFilters[groupName].includes(item)}
              onChange={() => toggleFilter(groupName, item)}
              disabled={isCheckboxDisabled(item)}
            />
            <div className={`w-4 h-4 border rounded flex items-center justify-center transition-all duration-300 ${
              checkedFilters[groupName].includes(item) 
                ? 'bg-blue-500 border-blue-500' 
                : 'bg-white border-gray-400'
            } ${isCheckboxDisabled(item) ? 'opacity-50 cursor-not-allowed' : ''}`}>
              {checkedFilters[groupName].includes(item) && (
                <svg 
                  className="w-3 h-3 text-white transition-opacity duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              )}
            </div>
          </div>
          <span className={isCheckboxDisabled(item) ? "text-gray-400" : ""}>
            {item}
          </span>
        </label>
      ))}
      <div className={`transition-all duration-300 overflow-hidden ${
        checkedFilters[groupName].length > 0 ? 'max-h-6 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <button
          onClick={() => clearGroupFilters(groupName)}
          className="text-blue-600 text-[12px] hover:text-blue-800 mt-2 uppercase font-semibold"
        >
          Clear
        </button>
      </div>
    </div>
  );

  const renderRadioButton = (label, value) => (
    <label className="flex items-center space-x-2">
      <div className="relative">
        <input
          type="radio"
          name="roomLevel"
          className="opacity-0 absolute h-4 w-4 cursor-pointer"
          checked={selectedCategory === value}
          onChange={() => handleCategoryChange(value)}
        />
        <div className={`w-4 h-4 border rounded-full flex items-center justify-center transition-all duration-300 ${
          selectedCategory === value 
            ? 'border-blue-500 bg-blue-500' 
            : 'border-gray-400 bg-white'
        }`}>
          {selectedCategory === value && (
            <div className="w-2 h-2 bg-white rounded-full transition-opacity duration-300" />
          )}
        </div>
      </div>
      <span>{label}</span>
    </label>
  );

  return (
    <div className="w-full max-w-[250px] space-y-4 text-sm text-gray-800">
      {/* ROOM LEVELS */}
      <div className="border-b border-gray-200 pb-2">
        <button
          onClick={() => toggleSection("roomLevels")}
          className="flex items-center w-full font-bold uppercase text-left"
        >
          <IoIosArrowForward
            size={18}
            className={`transition-transform duration-700 transform ${
              openSections.roomLevels ? "rotate-90" : "rotate-0"
            }`}
          />
          <span className="flex items-center space-x-1">
            <span>Room Levels</span>
            <FiInfo className="text-blue-600" />
          </span>
        </button>

        <div className={`mt-2 ml-1 space-y-2 overflow-hidden transition-all duration-700 ${
          openSections.roomLevels ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}>
          {renderRadioButton("View All", null)}
          {renderRadioButton("Butler Elite", "Butler Elite")}
          {renderRadioButton("Club Sandals", "Club Sandals")}
          {renderRadioButton("Sandals Luxury", "Sandals Luxury")}
        </div>
      </div>

      {/* ROOM VIEWS */}
      <div className="border-b border-gray-200 pb-2">
        <button onClick={() => toggleSection("roomViews")} className="flex items-center w-full font-bold uppercase text-left">
          <IoIosArrowForward size={18} className={`transition-transform duration-700 ${openSections.roomViews ? "rotate-90" : ""}`} />
          <span>Room Views</span>
        </button>
        {renderCheckboxGroup("roomViews", ["Pool", "Tropical Garden", "Partial Oceanview", "Beachfront", "Oceanview", "Oceanfront"])}
      </div>

      {/* ROOM TYPES */}
      <div className="border-b border-gray-200 pb-2">
        <button onClick={() => toggleSection("roomTypes")} className="flex items-center w-full font-bold uppercase text-left">
          <IoIosArrowForward size={18} className={`transition-transform duration-700 ${openSections.roomTypes ? "rotate-90" : ""}`} />
          <span>Room Types</span>
        </button>
        {renderCheckboxGroup("roomTypes", ["Swim-up Suite", "Walkout Suite", "One-Bedroom Suite", "Private Pool Suite", "Villa Suite", "Over-The-Water Villa", "Two Story Suite"])}
      </div>

      {/* ROOM FEATURES */}
      <div className="border-b border-gray-200 pb-2">
        <button onClick={() => toggleSection("roomFeatures")} className="flex items-center w-full font-bold uppercase text-left">
          <IoIosArrowForward size={18} className={`transition-transform duration-700 ${openSections.roomFeatures ? "rotate-90" : ""}`} />
          <span>Room Features</span>
        </button>
        {renderCheckboxGroup("roomFeatures", ["Balcony", "Tranquility Soaking Tub", "Wheelchair Accessible", "In-Room Bar w/Liquor", "Room Service", "Patio", "In-Room Bar w/ Premium Liquor", "Private Pool"])}
      </div>

      {/* ROOM SPECIALS */}
      <div className="border-b border-gray-200 pb-2">
        <button onClick={() => toggleSection("roomSpecials")} className="flex items-center w-full font-bold uppercase text-left">
          <IoIosArrowForward size={18} className={`transition-transform duration-700 ${openSections.roomSpecials ? "rotate-90" : ""}`} />
          <span>Room Specials</span>
        </button>
        {renderCheckboxGroup("roomSpecials", ["Get Up to $1000 Instant Credit", "Service Personnel Discount", "Book Online & Get $100 Credit", "Get Up to 55% Off Rack Rate", "Last Minute Travel Deals"])}
      </div>
    </div>
  );
};

export default RoomSidebar;







