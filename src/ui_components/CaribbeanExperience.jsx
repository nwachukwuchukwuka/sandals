import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import beach_1 from "../assets/beach_1.jpg";
import Caribbean_destination_pic from "../assets/Caribbean_destination_pic.avif";

const CaribbeanExperience = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-6 -mt-[150px] md:-mt-[200px]">
      <div className="md:max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-[35%,65%] items-center">
        {/* Text Section */}
        <div className="bg-white p-6 md:p-10 shadow-lg h-full">
          <h2 className="text-lg md:text-3xl font-bold mb-4 md:pt-[100px] text-center">
            THE CARIBBEAN IS AMAZING!<br />COME EXPERIENCE IT WITH US
          </h2>
          <div className="relative mt-4">
            <div
              className="md:w-full p-3 bg-gray-100 flex items-center justify-between cursor-pointer transition duration-300 ease-in-out hover:shadow-md"
              onClick={toggleDropdown}
            >
              <span className="text-gray-700">Select Destination</span>
              {isOpen ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
            </div>
            <ul
              className={`absolute left-0 right-0 bg-white shadow-md  mt-2 overflow-hidden transition-all duration-500 ease-in-out z-10 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              {[
                "Saint Lucia",
                "Jamaica",
                "Antigua",
                "The Bahamas",
                "Grenada",
                "Barbados",
                "Curaçao",
                "Saint Vincent",
              ].map((destination, index) => (
                <li
                  key={index}
                  className="p-3 text-gray-700 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
                  onClick={() => setIsOpen(false)}
                >
                  {destination}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Image Section */}
        <div className="">
          <img
            src={Caribbean_destination_pic}
            alt="Beautiful Caribbean Beach"
            className="shadow-xl w-full transition duration-300 ease-in-out transform "
          />
        </div>
      </div>
    </div>
  );
};

export default CaribbeanExperience;
