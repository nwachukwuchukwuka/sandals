
import React, { useState, useEffect } from "react";

import { IoIosArrowForward } from "react-icons/io";

import { roomDetails } from "./constants/roomDetails";
import { useRoomFilter } from "./context/RoomFilterContext";

const RoomCardOne = ({ onRoomCountsChange, sortOrder }) => {
  const [dropdownOpen, setDropdownOpen] = useState(
    Array(roomDetails.length).fill(false)
  );
  const [showNonMatching, setShowNonMatching] = useState(false);

  const { getFilteredRooms } = useRoomFilter();

  // Filter and sort rooms
  const { filteredRooms, nonMatchingRooms } = React.useMemo(() => {
    // Get filtered rooms from context
    let filtered = getFilteredRooms();

    // Sort the filtered rooms by price
    filtered.sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', '').replace(',', ''));
      const priceB = parseFloat(b.price.replace('$', '').replace(',', ''));
      return sortOrder === 'high-to-low' ? priceB - priceA : priceA - priceB;
    });

    // Get non-matching rooms
    const nonMatching = roomDetails
      .filter(room => !filtered.includes(room))
      .sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', '').replace(',', ''));
        const priceB = parseFloat(b.price.replace('$', '').replace(',', ''));
        return sortOrder === 'high-to-low' ? priceB - priceA : priceA - priceB;
      });

    return { filteredRooms: filtered, nonMatchingRooms: nonMatching };
  }, [getFilteredRooms, sortOrder]);

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  // Add useEffect to notify parent of room counts
  useEffect(() => {
    onRoomCountsChange({
      totalRooms: roomDetails.length,
      filteredRooms: filteredRooms.length,
    });
  }, [filteredRooms.length, onRoomCountsChange]);

  return (
    <div className="hidden md:block">
      {/* Category count header */}

      {/* Filtered rooms */}
      {filteredRooms.map((room, index) => (
        <div key={index}>
          <div className="mt-[20px] bg-white">
            {/* Images Section */}
            <div className="flex gap-[5px] h-[300px] overflow-hidden">
              <div className="w-[65%]">
                <img
                  src={room.images[0].src}
                  alt="Room"
                  className={room.images[0].style}
                />
              </div>
              <div className="w-[35%] flex flex-col gap-[5px]">
                <img
                  src={room.images[1].src}
                  alt="Room"
                  className={room.images[1].style}
                />
                <img
                  src={room.images[2].src}
                  alt="Room"
                  className={room.images[2].style}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
              <div className="text-lg font-semibold">{room.title}</div>
              <div className="text-[13px] text-gray-600 mb-2">
                {room.description}
              </div>
              <div className="mt-1 text-[13px] leading-relaxed text-gray-600">
                {room.details}
              </div>

              {/* Dropdown Toggle */}
              <div
                onClick={() => toggleDropdown(index)}
                className="mt-5 cursor-pointer flex items-center gap-1 font-semibold text-sm text-black"
              >
                <IoIosArrowForward
                  className={`transition-transform duration-700 ${
                    dropdownOpen[index] ? "rotate-90" : "rotate-0"
                  }`}
                  size={20}
                />
                VIEW QUALIFYING SPECIALS
              </div>

              {/* Dropdown Menu */}
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  dropdownOpen[index]
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-2 gap-2">
                  {room.qualifications.map((item) => (
                    <div key={item} className="">
                      <span className="inline-block w-full p-2 text-gray-900 text-[13px] bg-gray-100">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Icons Section */}
              <div className="flex mt-8 space-x-3">
                {room.icons.map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center"
                  >
                    {Icon}
                  </div>
                ))}
              </div>

              {/* Price Section */}
              <div className="flex justify-end">
                <p className="text-sm font-medium">
                  STARTING FROM
                  <span className="text-[35px] font-bold">{room.price}</span>
                  <span className="text-xl">PP/PN</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-black text-white py-1.5 uppercase text-[13px] w-[320px] font-bold mt-4 mb-[40px]">
              ROOM DETAILS
            </button>
          </div>
        </div>
      ))}

      {/* Non-matching rooms section */}
      {nonMatchingRooms.length > 0 && (
        <>
          <hr className="my-6 border-gray-200" />
          <div className="mb-4">
            <button
              onClick={() => setShowNonMatching(!showNonMatching)}
              className="flex items-center gap-1 text-blue-700 hover:text-blue-800 text-sm font-semibold"
            >
              <IoIosArrowForward
                className={`transition-transform duration-700 ${
                  showNonMatching ? "rotate-90" : ""
                }`}
              />
              <span>
                View {nonMatchingRooms.length} rooms not matching your selections
              </span>
            </button>

            {/* Non-matching rooms dropdown */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                showNonMatching
                  ? "max-h-full opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              {nonMatchingRooms.map((room, index) => (
                <div key={index}>
                  <div className="mt-[20px] bg-white">
                    {/* Images Section */}
                    <div className="flex gap-[5px] h-[300px] overflow-hidden">
                      <div className="w-[65%]">
                        <img
                          src={room.images[0].src}
                          alt="Room"
                          className={room.images[0].style}
                        />
                      </div>
                      <div className="w-[35%] flex flex-col gap-[5px]">
                        <img
                          src={room.images[1].src}
                          alt="Room"
                          className={room.images[1].style}
                        />
                        <img
                          src={room.images[2].src}
                          alt="Room"
                          className={room.images[2].style}
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5">
                      <div className="text-lg font-semibold">{room.title}</div>
                      <div className="text-[13px] text-gray-600 mb-2">
                        {room.description}
                      </div>
                      <div className="mt-1 text-[13px] leading-relaxed text-gray-600">
                        {room.details}
                      </div>

                      {/* Dropdown Toggle */}
                      <div
                        onClick={() => toggleDropdown(index)}
                        className="mt-5 cursor-pointer flex items-center gap-1 font-semibold text-sm text-black"
                      >
                        <IoIosArrowForward
                          className={`transition-transform duration-700 ${
                            dropdownOpen[index] ? "rotate-90" : "rotate-0"
                          }`}
                          size={20}
                        />
                        VIEW QUALIFYING SPECIALS
                      </div>

                      {/* Dropdown Menu */}
                      <div
                        className={`overflow-hidden transition-all duration-700 ${
                          dropdownOpen[index]
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {room.qualifications.map((item) => (
                            <div key={item} className="">
                              <span className="inline-block w-full p-2 text-gray-900 text-[13px] bg-gray-100">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Icons Section */}
                      <div className="flex mt-8 space-x-3">
                        {room.icons.map((Icon, idx) => (
                          <div
                            key={idx}
                            className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center"
                          >
                            {Icon}
                          </div>
                        ))}
                      </div>

                      {/* Price Section */}
                      <div className="flex justify-end">
                        <p className="text-sm font-medium">
                          STARTING FROM
                          <span className="text-[35px] font-bold">
                            {room.price}
                          </span>
                          <span className="text-xl">PP/PN</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-black text-white py-1.5 uppercase text-[13px] w-[320px] font-bold mt-4 mb-[40px]">
                      ROOM DETAILS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RoomCardOne;
