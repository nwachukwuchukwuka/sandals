import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { roomDetails } from "./constants/roomDetails";
import { useNavbar } from "./context/NavbarContext";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Reusable Toggle Button Component
const ToggleButton = ({ isOpen, onClick, children }) => (
  <button
    onClick={onClick}
    className="flex items-center  gap-2 transition-colors duration-300 w-full"
  >
    <div className="relative w-4 h-4">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-[2px] bg-blue-500" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-[2px] h-3 bg-blue-500 transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-90 scale-y-0" : "rotate-0 scale-y-100"
          }`}
        />
      </div>
    </div>
    <p className="font-bold text-[17px] text-start">{children}</p>
  </button>
);

// Carousel Component for Photos Section
const PhotoCarousel = ({ images, showCounter = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
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
    <div className="relative pt-[60px] md:pt-[40px]">
      <div
        className="overflow-hidden h-[280px] md:h-[580px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-[280px] md:h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
      {/* Hide arrows on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2"
      >
        <ChevronLeft
          size={45}
          strokeWidth={0.8}
          className="text-white md:w-[110px] md:h-[110px] w-[45px] h-[45px]"
        />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2"
      >
        <ChevronRight
          size={45}
          strokeWidth={0.8}
          className="text-white md:w-[110px] md:h-[110px] w-[45px] h-[45px]"
        />
      </button>
      {showCounter && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white font-semibold text-sm md:text-base">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

const RoomDetails = () => {
  const { roomId } = useParams();
  const { setIsNavbarVisible } = useNavbar();
  const [sections, setSections] = useState({
    specials: false,
    location: false,
    amenities: false,
    highlights: false,
    restaurants: false,
    photos: false,
  });
  const navigate = useNavigate();

  const roomAmenities = {
    "Bedroom & Living Spaces": [
      "Air Conditioning",
      "Ceiling Fan",
      "HD Smart TV w/ Cable",
      "In-Room Safe",
      "Iron & Ironing Board",
      "King-Size Bed",
      "Outlets 110 - 240 Volts",
      "Patio",
      "Telephone",
      "Tranquility Soaking Tub",
    ],
    "Bathroom & Laundry": [
      "Hair Dryer",
      "His & Hers Bath Vanities",
      "Make-up Mirror",
      "Plush His & Hers Robes",
      "Red Lane Spa Amenity Kit",
      "Walk In Shower",
    ],
    "Food & Drink": [
      "Coffee and Tea Maker",
      "In-Room Bar w/ Premium Liquor",
      "Refrigerator w/ Water, Juice & Sodas",
      "Robert Mondavi Wine Varietal",
    ],
    Services: [
      "Airport Transfers",
      "Butler Elite Service",
      "Nightly Turndown",
      "Room Service",
      "WiFi",
    ],
  };

  const resortHighlights = {
    group1: [
      "Unlimited food & drinks",
      "11 specialty restaurants",
      "9 bars with unlimited premium liquor",
      "PADI® certified scuba diving",
      "Unlimited water sports",
    ],
    group2: [
      "Overwater Villas",
      "Beachfront Villas",
      "Unlimited land sports",
      "State-of-the-art fitness center",
      "Red Lane® Spa",
    ],
  };

  const toggleSection = (section) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    setIsNavbarVisible(false);
    return () => setIsNavbarVisible(true);
  }, []);

  const room = roomDetails.find((room) => room.id === roomId);
  if (!room) return <div>Room not found</div>;

  return (
    <div className="max-w-[95%] md:max-w-[85%] mx-auto px-2 md:px-4 py-4 md:py-8  space-y-4 md:space-y-6">
      {/* Add X icon for navigation */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 right-4 md:right-8 z-50  p-2 rounded-full bg-white md:bg-transparent shadow-md md:shadow-none"
      >
        <X
          strokeWidth={0.8}
          className="md:w-[55px] md:h-[55px] w-[25px] h-[25px]"
        />
      </button>

      {/* Room Images Carousel */}
      <div className="mb-4 md:mb-8">
        <PhotoCarousel images={room.images2} showCounter={true} />
      </div>

      {/* Room Details */}
      <div className="space-y-2 flex flex-col md:flex-row md:gap-[40px]">
        <div className="w-full md:max-w-[70%]">
          <div>
            <p className="text-sm md:text-sm capitalize">
              sandals saint vincent, argyle, saint vincent
            </p>
            <p className="font-semibold text-[16px] md:text-[20px]">
              {room.title}
            </p>
          </div>

          <div className="my-2 md:my-4">
            <p className=" text-gray-900 md:text-gray-500 text-md md:text-base">
              {room.details}
            </p>
          </div>
          <div className="mt-2">
            <p className="text-gray-900 text-md md:text-base">
              {(() => {
                const words = room.description2.split(" ");
                const firstTwo = words.slice(0, 2).join(" ");
                const rest = words.slice(2).join(" ");
                return (
                  <>
                    <span className="font-medium text-black">{firstTwo}</span>{" "}
                    {rest}
                  </>
                );
              })()}
            </p>

            <p className="text-gray-900 mt-2 text-md md:text-base">
              <span className="font-medium text-black">Room Bedding:</span> 1
              King Bed
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-0">
          <div className="flex gap-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-[20px] mb-[40px]">
              {room.icons.map((iconObj, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-10 md:h-10 bg-white rounded-lg  flex items-center justify-center">
                    {iconObj.icon}
                  </div>
                  <p className="font-semibold text-md md:text-base tracking-wide">
                    {iconObj.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="space-y-6 md:space-y-8">
        {/* Current Specials */}
        <div>
          <ToggleButton
            isOpen={sections.specials}
            onClick={() => toggleSection("specials")}
          >
            View current specials
          </ToggleButton>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              sections.specials
                ? "max-h-[500px] opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 ml-5">
              {room.qualifications.map((qualification, index) => (
                <p
                  key={index}
                  className="flex items-center gap-1 text-blue-500 text-xs md:text-sm"
                >
                  <ChevronRight size={18} />
                  {qualification}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Category Location */}
        <div>
          <ToggleButton
            isOpen={sections.location}
            onClick={() => toggleSection("location")}
          >
            Category location in resort map
          </ToggleButton>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              sections.location
                ? "max-h-full opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="relative">
              <img
                src={room.categoryLocationImage}
                alt="Resort Map"
                className="w-full"
              />
              <div
                className="absolute w-5 h-5 bg-gray-500 rounded-full"
                style={{
                  left: room.mapPosition?.x || "50%",
                  top: room.mapPosition?.y || "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Room Amenities */}
        <div>
          <ToggleButton
            isOpen={sections.amenities}
            onClick={() => toggleSection("amenities")}
          >
            Room amenities
          </ToggleButton>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              sections.amenities
                ? "max-h-[1000px] opacity-100 mt-4 ml-6"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-[20px] ">
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-[20px] "> */}
              {Object.entries(roomAmenities).map(([category, items]) => (
                <div key={category}>
                  <h3 className="font-semibold mb-2 md:mb-4 text-sm md:text-base">
                    {category}
                  </h3>
                  <ul className="space-y-1">
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-[12px] md:text-[14px]"
                      >
                        <span className="w-1.5 h-1.5 bg-black rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resort Highlights */}
        <div>
          <ToggleButton
            isOpen={sections.highlights}
            onClick={() => toggleSection("highlights")}
          >
            Sandals Saint Vincent highlights & amenities
          </ToggleButton>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              sections.highlights
                ? "max-h-[500px] opacity-100 mt-4 ml-6"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2  md:gap-8">
              <div>
                <ul className="space-y-1">
                  {resortHighlights.group1.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-[12px] md:text-[14px]"
                    >
                      <span className="w-1.5 h-1.5 bg-black rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-1">
                  {resortHighlights.group2.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-[12px] md:text-[14px]"
                    >
                      <span className="w-1.5 h-1.5 bg-black rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Restaurants */}
        <div>
          <ToggleButton
            isOpen={sections.restaurants}
            onClick={() => toggleSection("restaurants")}
          >
            11 restaurants at Sandals Saint Vincent
          </ToggleButton>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              sections.restaurants
                ? "max-h-[300px] opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <div className="flex gap-2 md:gap-4 pb-4">
                {Array(11)
                  .fill(null)
                  .map((_, index) => (
                    <img
                      key={index}
                      src={room.images2[0]}
                      alt={`Restaurant ${index + 1}`}
                      className="w-48 md:w-64 h-36 md:h-48 object-cover flex-shrink-0"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Photos */}
        <div>
          <ToggleButton
            isOpen={sections.photos}
            onClick={() => toggleSection("photos")}
          >
            Sandals Saint Vincent photos
          </ToggleButton>
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              sections.photos
                ? "max-h-full opacity-100 mt-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <PhotoCarousel images={room.images2} showCounter={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
