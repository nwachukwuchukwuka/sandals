import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";
import { departingFlight } from "../constants/constants";
import DateRangePicker from "./DateRangePicker";
const resorts = {
  JAMAICA: [
    "Montego Bay",
    "Royal Caribbean",
    "Ochi",
    "South Coast",
    "Negril",
    "Royal Plantation",
    "Dunn's River",
  ],
  "SAINT LUCIA": ["Halcyon Beach", "Regency La Toc", "Grande St. Lucian"],
  BAHAMAS: ["Royal Bahamian"],
  ANTIGUA: ["Grande Antigua"],
  "SAINT VINCENT": ["Saint Vincent"],
  GRENADA: ["Grenada"],
  BARBADOS: ["Barbados", "Royal Barbados"],
  CURAÇAO: ["Royal Curaçao"],
};

const ResortSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [includeFlights, setIncludeFlights] = useState(false);
  const [selectedResort, setSelectedResort] = useState(null);
  const [checkInOutDates, setCheckInOutDates] = useState("");
  const [departingFrom, setDepartingFrom] = useState("");
  const [flightClass, setFlightClass] = useState("Economy/Coach");

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleResortSelect = (region, resort) => {
    setSelectedResort({ region, resort });
    setIsDropdownOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Enter Airpot or City");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleFlightDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative w-full max-w-[85%] mx-auto mb-4 md:-mt-6 bg-white p-4 md:p-8 shadow-lg -mt-8 ${
        includeFlights ? "md:h-[200px]" : "md:h-[120px]"
      }`}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Select Resort Dropdown */}
        <div className="relative w-full md:w-[300px]">
          <button
            onClick={toggleDropdown}
            className="w-full bg-gray-100 px-4 py-2 flex justify-between items-center text-gray-700"
          >
            {selectedResort
              ? `Sandals ${selectedResort.resort} (${selectedResort.region})`
              : "Select Resort"}
            <ChevronDown size={20} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full md:w-[700px] bg-white shadow-lg border mt-2  z-10"
              >
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.keys(resorts).map((region) => (
                    <div key={region}>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {region}
                      </h4>
                      {resorts[region].map((resort) => (
                        <motion.p
                          key={resort}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-600 text-sm hover:bg-gray-100 p-1 cursor-pointer rounded-md"
                          onClick={() => handleResortSelect(region, resort)}
                        >
                          Sandals {resort}
                        </motion.p>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* date range picker components */}
        <DateRangePicker />

        {/* Include Flights Checkbox */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <input
            type="checkbox"
            id="include-flights"
            checked={includeFlights}
            onChange={(e) => setIncludeFlights(e.target.checked)}
            className="accent-black"
          />
          <label htmlFor="include-flights" className="text-gray-700 text-sm">
            Include Roundtrip Flights
          </label>
        </div>
        {/* Conditionally Render Flight Inputs for big screens */}
        <div className="md:absolute md:top-[100px] md:left-4 w-full">
          {includeFlights && (
            <div className="mt-2  flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative w-full md:w-[350px]">
                <label
                  htmlFor="departingFrom"
                  className="block text-gray-700 text-sm mb-2"
                >
                  Flights Departing From
                </label>
                <div className="relative w-full" ref={dropdownRef}>
                  {/* Dropdown Toggle Button */}
                  <button
                    onClick={toggleFlightDropdown}
                    className="w-full bg-gray-100  p-2 text-gray-700 text-left text-sm"
                  >
                    {selected}
                  </button>
                  {/* Options Container */}
                  {isOpen && (
                    <div className="absolute mt-1 w-full bg-white  shadow-lg max-h-[300px] overflow-y-auto z-10">
                      {departingFlight.map((option, index) => (
                        <div
                          key={index}
                          onClick={() => handleOptionSelect(option)}
                          className="p-1 hover:bg-gray-200 cursor-pointer text-sm"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <FaLocationDot
                  size={20}
                  className="absolute top-[45px] right-2 transform -translate-y-1/2 text-gray-500"
                />
              </div>

              <div className="relative w-full md:w-[350px]">
                <label
                  htmlFor="flightClass"
                  className="block text-gray-700 text-sm mb-2"
                >
                  Search Flights By
                </label>
                <select
                  id="flightClass"
                  className="w-full px-4 py-2 text-gray-700 bg-gray-100 border-none focus:outline-none focus:ring-0 text-sm"
                  value={flightClass}
                  onChange={(e) => setFlightClass(e.target.value)}
                >
                  <option>Economy/Coach</option>
                  <option>First Class/Business</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Rates & Availability Button */}
        <div className="w-full md:w-auto  md:mt-0">
          {/* Margin top for mobile */}
          <button className="w-full text-sm bg-black text-white px-8 py-2 font-semibold">
            RATES & AVAILABILITY
          </button>
          <p className="text-[10px] text-center">
            BOOK ONLINE TODAY & GET <span className="font-bold">$100 OFF</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResortSelector;
