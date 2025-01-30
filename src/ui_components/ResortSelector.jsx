import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

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

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="relative w-full max-w-[85%] mx-auto md:-mt-6 bg-white p-4 md:p-8 shadow-lg -mt-8">
      {/* Flex container for inputs and button */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Select Resort Dropdown */}
        <div className="relative w-full md:w-[300px]">
          <button
            onClick={toggleDropdown}
            className="w-full bg-gray-100 px-4 py-2 flex justify-between items-center text-gray-700 rounded-md"
          >
            Select Resort
            <ChevronDown size={20} />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full md:w-[700px] bg-white shadow-lg border mt-2 rounded-md z-10">
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.keys(resorts).map((region) => (
                  <div key={region}>
                    <h4 className="font-semibold text-gray-800 mb-2">{region}</h4>
                    {resorts[region].map((resort) => (
                      <p
                        key={resort}
                        className="text-gray-600 text-sm hover:bg-gray-100 p-1 cursor-pointer rounded-md"
                      >
                        Sandals {resort}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Check-In & Check-Out Input */}
        <div className="w-full md:w-[300px]">
          <input
            type="text"
            placeholder="Check-In & Check-Out"
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
          />
        </div>

        {/* Include Flights Checkbox */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <input type="checkbox" id="include-flights" />
          <label htmlFor="include-flights" className="text-gray-700 text-sm">
            Include Roundtrip Flights
          </label>
        </div>

        {/* Rates & Availability Button */}
        <div>

          <button className="w-full text-sm bg-black text-white px-8 py-2 font-semibold">
            RATES & AVAILABILITY
          </button>
          <p className="text-[10px] text-center">BOOK ONLINE TODAY & GET <span className="font-bold">$100 OFF</span></p>
        </div>
      </div>
    </div>
  );
};

export default ResortSelector;