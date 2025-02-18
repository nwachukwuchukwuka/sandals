import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FiInfo } from "react-icons/fi";


const RoomSidebar = () => {
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (sectionName) => {
    setOpenSection((current) => (current === sectionName ? null : sectionName));
  };

  return (
    <div className="w-full max-w-[250px] space-y-4 text-sm text-gray-800">
      {/* ROOM LEVELS */}
      <div className="border-b border-gray-200 pb-2">
        <button
          onClick={() => toggleSection("roomLevels")}
          className="flex items-center  w-full font-bold uppercase text-left"
        >
         <IoIosArrowForward
            size={20}
            className={`transition-transform duration-100 ${
              openSection === "roomLevels" ? "rotate-90" : "rotate-0"
            }`}
          />
          <span className="flex items-center space-x-1">
            <span>Room Levels</span>
            {/* Info icon */}
            <FiInfo className="text-blue-400" />
          </span>
        </button>

        {/* Collapsible Content */}
        {openSection === "roomLevels" && (
          <div className="mt-2 ml-1 space-y-2">
            <label className="flex items-center">
              <input type="radio" name="roomLevel" className="mr-2 w-4 h-4" />
              View All
            </label>
            <label className="flex items-center">
              <input type="radio" name="roomLevel" className="mr-2 w-4 h-4" />
              Butler Elite
            </label>
            <label className="flex items-center">
              <input type="radio" name="roomLevel" className="mr-2 w-4 h-4" />
              Club Sandals
            </label>
            <label className="flex items-center">
              <input type="radio" name="roomLevel" className="mr-2 w-4 h-4" />
              Sandals Luxury
            </label>
          </div>
        )}
      </div>

      {/* ROOM VIEWS */}
      <div className="border-b border-gray-200 pb-2">
        <button
          onClick={() => toggleSection("roomViews")}
          className="flex items-center  w-full font-bold uppercase text-left"
        >
          {openSection === "roomViews" ? <IoIosArrowDown size={20} /> : <IoIosArrowForward size={20} />}
          <span>Room Views</span>
        </button>

        {openSection === "roomViews" && (
          <div className="mt-2 ml-1 space-y-2">
            <label className="flex items-center">
              <input type="checkbox" name="roomView" className="mr-2 w-4 h-4" />
              Ocean View
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="roomView" className="mr-2 w-4 h-4" />
              Garden View
            </label>
          </div>
        )}
      </div>

      {/* ROOM TYPES */}
      <div className="border-b border-gray-200 pb-2">
        <button
          onClick={() => toggleSection("roomTypes")}
          className="flex items-center  w-full font-bold uppercase text-left"
        >
          {openSection === "roomTypes" ? <IoIosArrowDown size={20} /> : <IoIosArrowForward size={20} />}
          <span>Room Types</span>
        </button>

        {openSection === "roomTypes" && (
          <div className="mt-2 ml-1 space-y-2">
            <label className="flex items-center">
              <input type="checkbox" name="roomType" className="mr-2 w-4 h-4" />
              Single
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="roomType" className="mr-2 w-4 h-4" />
              Double
            </label>
          </div>
        )}
      </div>

      {/* ROOM FEATURES */}
      <div className="border-b border-gray-200 pb-2">
        <button
          onClick={() => toggleSection("roomFeatures")}
          className="flex items-center  w-full font-bold uppercase text-left"
        >
          {openSection === "roomFeatures" ? <IoIosArrowDown size={20} /> : <IoIosArrowForward size={20} />}
          <span>Room Features</span>
        </button>

        {openSection === "roomFeatures" && (
          <div className="mt-2 ml-1 space-y-2">
            <label className="flex items-center">
              <input type="checkbox" name="roomFeature" className="mr-2 w-4 h-4" />
              Balcony
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="roomFeature" className="mr-2 w-4 h-4" />
              Mini Bar
            </label>
          </div>
        )}
      </div>

      {/* ROOM SPECIALS */}
      <div className="border-b border-gray-200 pb-2">
        <button
          onClick={() => toggleSection("roomSpecials")}
          className="flex items-center  w-full font-bold uppercase text-left"
        >
          {openSection === "roomSpecials" ? <IoIosArrowDown size={20} /> : <IoIosArrowForward size={20} />}
          <span>Room Specials</span>
        </button>

        {openSection === "roomSpecials" && (
          <div className="mt-2 ml-1 space-y-2">
            <label className="flex items-center">
              <input type="checkbox" name="roomSpecial" className="mr-2 w-4 h-4" />
              Honeymoon Package
            </label>
            <label className="flex items-center">
              <input type="checkbox" name="roomSpecial" className="mr-2 w-4 h-4" />
              Family Package
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomSidebar;
