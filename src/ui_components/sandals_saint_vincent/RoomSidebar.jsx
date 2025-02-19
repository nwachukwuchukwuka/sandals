import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FiInfo } from "react-icons/fi";

const RoomSidebar = ({ selectedCategory, setSelectedCategory }) => {
  const [openSections, setOpenSections] = useState({
    roomLevels: true,
    roomViews: true,
    roomTypes: true,
    roomFeatures: true,
    roomSpecials: true,
  });

  const toggleSection = (sectionName) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === "View All" ? null : category);
  };

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

        {/* Transition Container for Room Levels */}
        <div
          className={`mt-2 ml-1 space-y-2 overflow-hidden transition-all duration-700 ${
            openSections.roomLevels
              ? "max-h-40 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <label className="flex items-center">
            <input
              type="radio"
              name="roomLevel"
              className="mr-2"
              checked={selectedCategory === null}
              onChange={() => handleCategoryChange("View All")}
            />
            View All
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="roomLevel"
              className="mr-2"
              checked={selectedCategory === "Butler Elite"}
              onChange={() => handleCategoryChange("Butler Elite")}
            />
            Butler Elite
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="roomLevel"
              className="mr-2"
              checked={selectedCategory === "Club Sandals"}
              onChange={() => handleCategoryChange("Club Sandals")}
            />
            Club Sandals
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="roomLevel"
              className="mr-2"
              checked={selectedCategory === "Sandals Luxury"}
              onChange={() => handleCategoryChange("Sandals Luxury")}
            />
            Sandals Luxury
          </label>
        </div>
      </div>

      {/* ROOM VIEWS */}
      <div className="border-b border-gray-200 pb-2">
        <button
          onClick={() => toggleSection("roomViews")}
          className="flex items-center w-full font-bold uppercase text-left"
        >
          <IoIosArrowForward
            size={18}
            className={`transition-transform duration-700 transform ${
              openSections.roomViews ? "rotate-90" : "rotate-0"
            }`}
          />
          <span>Room Views</span>
        </button>

        <div
          className={`mt-2 ml-1 space-y-2 overflow-hidden transition-all duration-700 ${
            openSections.roomViews
              ? "max-h-40 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <label className="flex items-center">
            <input type="checkbox" name="roomView" className="mr-2" />
            Pool
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomView" className="mr-2" />
            Tropical Garden
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomView" className="mr-2" />
            Partial OceanView
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomView" className="mr-2" />
            Beachfront
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomView" className="mr-2" />
            Oceanfront
          </label>
        </div>
      </div>

      {/* ROOM TYPES */}
      <div className="border-b border-gray-200 pb-2">
        <button
          onClick={() => toggleSection("roomTypes")}
          className="flex items-center w-full font-bold uppercase text-left"
        >
          <IoIosArrowForward
            size={18}
            className={`transition-transform duration-700 transform ${
              openSections.roomTypes ? "rotate-90" : "rotate-0"
            }`}
          />
          <span>Room Types</span>
        </button>

        <div
          className={`mt-2 ml-1 space-y-2 overflow-hidden transition-all duration-700 ${
            openSections.roomTypes
              ? "max-h-60 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <label className="flex items-center">
            <input type="checkbox" name="roomType" className="mr-2" />
            Swim-up Suite
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomType" className="mr-2" />
            Walkout Suite
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomType" className="mr-2" />
            One-Bedroom Suite
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomType" className="mr-2" />
            Private Pool Suite
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomType" className="mr-2" />
            Villa Suite
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomType" className="mr-2" />
            Over-The-Water Villa
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomType" className="mr-2" />
            Two Story Suite
          </label>
        </div>
      </div>

      {/* ROOM FEATURES */}
      <div className="border-b border-gray-200 pb-2">
        <button
          onClick={() => toggleSection("roomFeatures")}
          className="flex items-center w-full font-bold uppercase text-left"
        >
          <IoIosArrowForward
            size={18}
            className={`transition-transform duration-700 transform ${
              openSections.roomFeatures ? "rotate-90" : "rotate-0"
            }`}
          />
          <span>Room Features</span>
        </button>

        <div
          className={`mt-2 ml-1 space-y-2 overflow-hidden transition-all duration-700 ${
            openSections.roomFeatures
              ? "max-h-60 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <label className="flex items-center">
            <input type="checkbox" name="roomFeature" className="mr-2" />
            Balcony
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomFeature" className="mr-2" />
            Tranquility Soaking Tub
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomFeature" className="mr-2" />
            Wheelchair Accessible
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomFeature" className="mr-2" />
            In-Room Bar w/ Liquor
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomFeature" className="mr-2" />
            Room Service
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomFeature" className="mr-2" />
            Patio
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomFeature" className="mr-2" />
            In-Room Bar w/ Premium Liquor
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomFeature" className="mr-2" />
            Private Pool
          </label>
        </div>
      </div>

      {/* ROOM SPECIALS */}
      <div className="border-b border-gray-200 pb-2">
        <button
          onClick={() => toggleSection("roomSpecials")}
          className="flex items-center w-full font-bold uppercase text-left"
        >
          <IoIosArrowForward
            size={18}
            className={`transition-transform duration-700 transform ${
              openSections.roomSpecials ? "rotate-90" : "rotate-0"
            }`}
          />
          <span>Room Specials</span>
        </button>

        <div
          className={`mt-2 ml-1 space-y-2 overflow-hidden transition-all duration-700 ${
            openSections.roomSpecials
              ? "max-h-40 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <label className="flex items-center">
            <input type="checkbox" name="roomSpecial" className="mr-2" />
            Get Up to $1000 Instant Credit
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomSpecial" className="mr-2" />
            Service Personnel Discount
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomSpecial" className="mr-2" />
            Book Online & Get $100 Credit
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomSpecial" className="mr-2" />
            Get Up to 55% Off Rack Rate
          </label>
          <label className="flex items-center">
            <input type="checkbox" name="roomSpecial" className="mr-2" />
            Last Minute Travel Deals
          </label>
        </div>
      </div>
    </div>
  );
};

export default RoomSidebar;
