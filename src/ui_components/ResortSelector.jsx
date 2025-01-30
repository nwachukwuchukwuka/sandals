import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const resorts = {
  JAMAICA: ["Montego Bay", "Royal Caribbean", "Ochi", "South Coast", "Negril", "Royal Plantation", "Dunn's River"],
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

  return (
    <div className="relative w-full max-w-[85%] mx-auto md:-mt-6 bg-white p-4 md:p-8 shadow-lg -mt-8">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Select Resort Dropdown */}
        <div className="relative w-full md:w-[300px]">
          <button
            onClick={toggleDropdown}
            className="w-full bg-gray-100 px-4 py-2 flex justify-between items-center text-gray-700 rounded-md"
          >
            {selectedResort ? `Sandals ${selectedResort.resort} (${selectedResort.region})` : "Select Resort"}
            <ChevronDown size={20} />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full md:w-[700px] bg-white shadow-lg border mt-2 rounded-md z-10"
              >
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.keys(resorts).map((region) => (
                    <div key={region}>
                      <h4 className="font-semibold text-gray-800 mb-2">{region}</h4>
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

          {/* {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full md:w-[700px] bg-white shadow-lg border mt-2 rounded-md z-10">
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.keys(resorts).map((region) => (
                  <div key={region}>
                    <h4 className="font-semibold text-gray-800 mb-2">{region}</h4>
                    {resorts[region].map((resort) => (
                      <p
                        key={resort}
                        className="text-gray-600 text-sm hover:bg-gray-100 p-1 cursor-pointer rounded-md"
                        onClick={() => handleResortSelect(region, resort)}
                      >
                        Sandals {resort}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )} */}
        </div>

        {/* Check-In & Check-Out Input */}
        <div className="w-full md:w-[300px]">
          <input
            type="text"
            placeholder="Check-In & Check-Out"
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
            value={checkInOutDates}
            onChange={(e) => setCheckInOutDates(e.target.value)}
          />
        </div>

        {/* Include Flights Checkbox */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <input
            type="checkbox"
            id="include-flights"
            checked={includeFlights}
            onChange={(e) => setIncludeFlights(e.target.checked)}
          />
          <label htmlFor="include-flights" className="text-gray-700 text-sm">
            Include Roundtrip Flights
          </label>
        </div>


        {/* Conditionally Render Flight Inputs for small screens */}
        <div className="block md:hidden">
          {includeFlights && (
            <div className="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative w-full md:w-[300px]">
                <label htmlFor="departingFrom" className="block text-gray-700 font-bold mb-2">
                  Flights Departing From
                </label>
                <input
                  type="text"
                  id="departingFrom"
                  className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
                  placeholder="Enter Airport or City"
                  value={departingFrom}
                  onChange={(e) => setDepartingFrom(e.target.value)}
                />
              </div>

              <div className="relative w-full md:w-[300px]">
                <label htmlFor="flightClass" className="block text-gray-700 font-bold mb-2">
                  Search Flights By
                </label>
                <select
                  id="flightClass"
                  className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
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
        <div className="w-full md:w-auto mt-4 md:mt-0"> {/* Margin top for mobile */}
          <button className="w-full text-sm bg-black text-white px-8 py-2 font-semibold">
            RATES & AVAILABILITY
          </button>
          <p className="text-[10px] text-center">
            BOOK ONLINE TODAY & GET <span className="font-bold">$100 OFF</span>
          </p>
        </div>
      </div>

      {/* Conditionally Render Flight Inputs for big screens */}
      <div className="hidden md:block">
        {includeFlights && (
          <div className="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full md:w-[300px]">
              <label htmlFor="departingFrom" className="block text-gray-700 font-bold mb-2">
                Flights Departing From
              </label>
              <input
                type="text"
                id="departingFrom"
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
                placeholder="Enter Airport or City"
                value={departingFrom}
                onChange={(e) => setDepartingFrom(e.target.value)}
              />
            </div>

            <div className="relative w-full md:w-[300px]">
              <label htmlFor="flightClass" className="block text-gray-700 font-bold mb-2">
                Search Flights By
              </label>
              <select
                id="flightClass"
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
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

    </div>
  );
};

export default ResortSelector;