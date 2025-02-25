import React, { useState, useEffect } from "react";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { roomDetails } from "./constants/roomDetails";
import { useRoomFilter } from "./context/RoomFilterContext";
import { Link } from "react-router-dom";
// Carousel component for room images
const RoomCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to previous slide; wraps around if at the first image.
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Navigate to next slide; wraps around if at the last image.
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    // "group" class enables child elements to change on hover
    <div className="relative group">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-[255px] object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Prev arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <IoIosArrowBack size={30} className="text-white" />
      </button>

      {/* Next arrow  */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <IoIosArrowForward size={30} className="text-white" />
      </button>

      {/* Dots (hidden by default, shows on hover) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-[5px] h-[5px] rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const RoomCardTwo = ({ sortOrder }) => {
  const [showNonMatching, setShowNonMatching] = useState(false);
  const { selectedCategory, getFilteredRooms } = useRoomFilter();

  // Filter and sort rooms
  const { filteredRooms, nonMatchingRooms } = React.useMemo(() => {
    // Get filtered rooms from context
    let filtered = getFilteredRooms();

    // Sort the filtered rooms by price
    filtered.sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", "").replace(",", ""));
      const priceB = parseFloat(b.price.replace("$", "").replace(",", ""));
      return sortOrder === "high-to-low" ? priceB - priceA : priceA - priceB;
    });

    // Get non-matching rooms
    const nonMatching = roomDetails
      .filter((room) => !filtered.includes(room))
      .sort((a, b) => {
        const priceA = parseFloat(a.price.replace("$", "").replace(",", ""));
        const priceB = parseFloat(b.price.replace("$", "").replace(",", ""));
        return sortOrder === "high-to-low" ? priceB - priceA : priceA - priceB;
      });

    return { filteredRooms: filtered, nonMatchingRooms: nonMatching };
  }, [getFilteredRooms, sortOrder]);

  return (
    <div className="hidden md:block">
      {/* Filtered Rooms */}
      {filteredRooms.map((roomDetails, index) => (
        <div key={index}>
          <div className="flex bg-white shadow-md mt-[20px] gap-2">
            <div className="max-w-[45%]">
              <RoomCarousel images={roomDetails.images2} />
              <div className="flex space-x-4 p-[30px]">
                {roomDetails.icons.map((iconObj, iconIndex) => (
                  <div
                    key={iconIndex}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg"
                  >
                    {iconObj.icon}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-[20px]">
              <h2 className="text-lg font-semibold text-gray-800">
                {roomDetails.title}
              </h2>
              <div className="">
                <p className="text-[13px] text-gray-500 mb-4">
                  {roomDetails.description2}
                </p>
              </div>

              {/* Qualifications */}
              <div className="mb-8">
                <p className="text-[13px] text-gray-800 mb-1">
                  This room qualifies for:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {roomDetails.qualifications.map((item) => (
                    <div key={item} className="flex justify-center">
                      <span className="inline-block w-[250px] p-2 text-gray-900 text-[13px] bg-gray-100">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Section for filtered rooms */}
              <div className="pt-10 flex justify-end">
                <p className="text-sm font-medium">
                  STARTING FROM{" "}
                  <span className="text-[35px] font-bold">
                    {roomDetails.price}
                  </span>
                  <span className="text-xl">PP/PN</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Link to={`/room-details/${roomDetails.id}`}>
              <button className="bg-black text-white py-1.5 uppercase text-[13px] w-[320px] font-bold mt-4 mb-[40px]">
                ROOM DETAILS
              </button>
            </Link>
          </div>
        </div>
      ))}

      {/* Non-matching rooms section */}
      {selectedCategory && nonMatchingRooms.length > 0 && (
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
                View {nonMatchingRooms.length} rooms not matching your
                selections
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
              {nonMatchingRooms.map((roomDetails, index) => (
                <div key={index}>
                  <div className="flex bg-white shadow-md mt-[20px] gap-2">
                    <div className="w-[45%]">
                      <RoomCarousel images={roomDetails.images2} />
                      <div className="flex space-x-4 p-[30px]">
                        {roomDetails.icons.map((iconObj, iconIndex) => (
                          <div
                            key={iconIndex}
                            className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg"
                          >
                            {iconObj.icon}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-[20px]">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {roomDetails.title}
                      </h2>
                      <div className="">
                        <p className="text-[13px] text-gray-500 mb-4">
                          {roomDetails.description}
                        </p>
                      </div>

                      {/* Qualifications */}
                      <div className="mb-8">
                        <p className="text-[13px] text-gray-800 mb-1">
                          This room qualifies for:
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {roomDetails.qualifications.map((item) => (
                            <div key={item} className="flex justify-center">
                              <span className="inline-block w-[250px] p-2 text-gray-900 text-[13px] bg-gray-100">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price Section for non-matching rooms */}
                      <div className="pt-10 flex justify-end">
                        <p className="text-sm font-medium">
                          STARTING FROM{" "}
                          <span className="text-[35px] font-bold">
                            {roomDetails.price}
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

export default RoomCardTwo;
