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
          {["Pool", "Tropical Garden", "Partial Oceanview", "Beachfront", "Oceanview", "Oceanfront"].map(
            (view) => (
              <label key={view} className="flex items-center">
                <input
                  type="checkbox"
                  name="roomView"
                  className="mr-2"
                  disabled={isCheckboxDisabled(view)}
                />
                <span className={isCheckboxDisabled(view) ? "text-gray-400" : ""}>
                  {view}
                </span>
              </label>
            )
          )}
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
          {[
            "Swim-up Suite",
            "Walkout Suite",
            "One-Bedroom Suite",
            "Private Pool Suite",
            "Villa Suite",
            "Over-The-Water Villa",
            "Two Story Suite",
          ].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                name="roomType"
                className="mr-2"
                disabled={isCheckboxDisabled(type)}
              />
              <span className={isCheckboxDisabled(type) ? "text-gray-400" : ""}>
                {type}
              </span>
            </label>
          ))}
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
          {[
            "Balcony",
            "Tranquility Soaking Tub",
            "Wheelchair Accessible",
            "In-Room Bar w/Liquor",
            "Room Service",
            "Patio",
            "In-Room Bar w/ Premium Liquor",
            "Private Pool",
          ].map((feature) => (
            <label key={feature} className="flex items-center">
              <input
                type="checkbox"
                name="roomFeature"
                className="mr-2"
                disabled={isCheckboxDisabled(feature)}
              />
              <span className={isCheckboxDisabled(feature) ? "text-gray-400" : ""}>
                {feature}
              </span>
            </label>
          ))}
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
