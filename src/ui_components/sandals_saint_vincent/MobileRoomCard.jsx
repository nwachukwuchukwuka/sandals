import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useRoomFilter } from "./context/RoomFilterContext";
import { roomDetails } from "./constants/roomDetails";
import { rooms } from "./constants/rooms";

// Carousel component for room images
const RoomCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide();
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative group h-full">
      <div 
        className="overflow-hidden h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Navigation arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <IoIosArrowBack size={30} className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <IoIosArrowForward size={30} className="text-white" />
      </button>

      {/* Dots indicator - Made more touch-friendly */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-[5px] md:h-[5px] rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const MobileRoomCard = ({ sortOrder }) => {
  const [dropdownOpen, setDropdownOpen] = useState(
    Array(roomDetails.length).fill(false)
  );
  const [showNonMatching, setShowNonMatching] = useState(false);
  const { getFilteredRooms } = useRoomFilter();

  // Filter and sort rooms
  const { filteredRooms, nonMatchingRooms } = React.useMemo(() => {
    const filtered = getFilteredRooms();
    const sortedFiltered = [...filtered].sort((a, b) => {
      const priceA = parseFloat(a.price.replace('$', '').replace(',', ''));
      const priceB = parseFloat(b.price.replace('$', '').replace(',', ''));
      return sortOrder === 'high-to-low' ? priceB - priceA : priceA - priceB;
    });

    const nonMatching = roomDetails
      .filter(room => !filtered.includes(room))
      .sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', '').replace(',', ''));
        const priceB = parseFloat(b.price.replace('$', '').replace(',', ''));
        return sortOrder === 'high-to-low' ? priceB - priceA : priceA - priceB;
      });

    return { filteredRooms: sortedFiltered, nonMatchingRooms: nonMatching };
  }, [getFilteredRooms, sortOrder]);

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const renderRoomCard = (room, index) => (
    <div key={index}>
      <div className="mt-[20px] bg-white">
        {/* Carousel Section - Adjusted height for mobile */}
        <div className="h-[200px] md:h-[300px]">
          <RoomCarousel images={room.images} />
        </div>

        {/* Content Section - Improved padding for mobile */}
        <div className="p-3 md:p-5">
          {/* Title - Adjusted font size */}
          <div className="text-base md:text-lg font-semibold">{room.title}</div>
          
          {/* Description - Adjusted spacing */}
          <div className="text-[12px] md:text-[13px] text-gray-600 mb-1 md:mb-2">
            {room.description}
          </div>
          
          {/* Details - Adjusted text size */}
          <div className="mt-1 text-[12px] md:text-[13px] leading-relaxed text-gray-600">
            {room.details}
          </div>

          {/* Dropdown Toggle - Adjusted spacing and size */}
          <div
            onClick={() => toggleDropdown(index)}
            className="mt-3 md:mt-5 cursor-pointer flex items-center gap-1 font-semibold text-xs md:text-sm text-black"
          >
            <IoIosArrowForward
              className={`transition-transform duration-700 ${
                dropdownOpen[index] ? "rotate-90" : "rotate-0"
              }`}
              size={16}
            />
            VIEW QUALIFYING SPECIALS
          </div>

          {/* Dropdown Menu - Adjusted grid for mobile */}
          <div
            className={`overflow-hidden transition-all duration-700 ${
              dropdownOpen[index]
                ? "max-h-40 opacity-100 mt-2"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {room.qualifications.map((item) => (
                <div key={item}>
                  <span className="inline-block w-full p-1.5 md:p-2 text-gray-900 text-[11px] md:text-[13px] bg-gray-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Icons Section - Adjusted spacing and size */}
          <div className="flex mt-4 md:mt-8 space-x-2 md:space-x-3">
            {room.icons.map((Icon, idx) => (
              <div
                key={idx}
                className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-lg flex items-center justify-center"
              >
                {Icon}
              </div>
            ))}
          </div>

          {/* Price Section - Adjusted text sizes */}
          <div className="flex justify-end mt-4 md:mt-6">
            <p className="text-xs md:text-sm font-medium">
              STARTING FROM
              <span className="text-[28px] md:text-[35px] font-bold ml-1">
                {room.price}
              </span>
              <span className="text-lg md:text-xl">PP/PN</span>
            </p>
          </div>
        </div>
      </div>

      {/* Room Details Button - Made full width on mobile */}
      <div className="flex justify-end px-3 md:px-0">
        <button className="w-full md:w-[320px] bg-black text-white py-1.5 uppercase text-[12px] md:text-[13px] font-bold mt-4 mb-[20px] md:mb-[40px]">
          ROOM DETAILS
        </button>
      </div>
    </div>
  );

  return (
    <div className="md:hidden"> {/* Only show on mobile devices */}
      {/* Filtered Rooms */}
      {filteredRooms.map((room, index) => renderRoomCard(room, index))}

      {/* Non-matching rooms section */}
      {nonMatchingRooms.length > 0 && (
        <>
          <hr className="my-4 md:my-6 border-gray-200" />
          <div className="mb-4 px-3 md:px-0">
            <button
              onClick={() => setShowNonMatching(!showNonMatching)}
              className="flex items-center gap-1 text-blue-700 hover:text-blue-800 text-xs md:text-sm font-semibold"
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
              {nonMatchingRooms.map((room, index) => renderRoomCard(room, index))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileRoomCard;