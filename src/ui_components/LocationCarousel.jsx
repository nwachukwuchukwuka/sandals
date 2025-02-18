import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";
import { carousel_data } from "../constants/constants";
import { ChevronRight, ChevronLeft } from "lucide-react";

function LocationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMdScreen, setIsMdScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); 
    const handleMediaChange = (e) => setIsMdScreen(e.matches);

    setIsMdScreen(mediaQuery.matches);


    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);
  const totalItems = carousel_data.length;
  const windowSize = 6;
  const start = Math.max(
    0,
    Math.min(currentIndex - 2, totalItems - windowSize)
  );
  const visibleDots = Array.from({ length: windowSize }, (_, i) => start + i);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (dotIndex, isFirst, isLast) => {
    if (isFirst && start > 0) {
      setCurrentIndex(start - 1);
    } else if (isLast && start + windowSize < totalItems) {
      setCurrentIndex(start + windowSize);
    } else {
      setCurrentIndex(dotIndex);
    }
  };

  const handleLocationClick = (location) => {
    const index = carousel_data.findIndex(
      (item) => item.place.toUpperCase() === location
    );
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  const LOCATIONS = [
    "JAMAICA",
    "SAINT VINCENT",
    "CURAÇAO",
    "SAINT LUCIA",
    "BAHAMAS",
    "ANTIGUA",
    "GRENADA",
    "BARBADOS",
  ];

  return (
    <div className="overflow-x-hidden h-[900px] md:h-full bg-gray-100">
      <div className="text-center  pt-[100px] ">
        <h1 className="text-lg md:text-2xl font-bold">
          17 ALL-INCLUSIVE RESORTS
        </h1>
        <p className="text-gray-900 uppercase text-[11px] md:text-sm tracking-widest">
          On the caribbean's best beaches
        </p>
        <div className="">
          <div className="max-w-[90%] lg:max-w-[80%] mx-auto mt-6 flex justify-center items-start md:items-center gap-2 md:gap-4">
            <p className="md:text-lg">
              <span className="hidden md:inline">Our Sandals</span> Locations:{" "}
            </p>
            <div className="overflow-x-auto md:block">
              <div className="flex mt-1 md:mt-0 whitespace-nowrap md:block">
                {LOCATIONS.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => handleLocationClick(location)}
                    className="mx-2 text-[12px] md:text-[16px] uppercase font-bold hover:text-blue-500 transition-colors"
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        <div className=" w-[300px] md:w-full  md:max-w-[80%] mx-auto pt-6">
          {/* Image Slider */}
          <div className="rounded-lg">
            <div
              className="flex transition-transform duration-500 gap-[10px] md:gap-[60px]"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + ${
                  isMdScreen ? "60px" : "10px"
                })))`,
              }}
            >
              {carousel_data.map((image, index) => (
                <div
                  key={index}
                  className={`w-[300px] md:w-full flex-shrink-0 transition duration-500 ${
                    currentIndex === index ? "opacity-100" : "opacity-30"
                  }`}
                >
                  <div className="absolute top-[270px] md:top-[400px] text-[15px] md:text-[30px] uppercase pl-4 md:pl-10 text-white bg-black/60 w-1/2 md:w-[300px]">
                    {image.place}
                  </div>
                  <img
                    src={image.url}
                    alt={`Slide ${index + 1}`}
                    className="w-[300px] md:w-full h-[300px] md:h-[550px] object-cover"
                  />
                  <div className="absolute md:-bottom-[170px] bg-white p-6 shadow-md w-full md:w-[65%]">
                    <div className="flex justify-between mb-4">
                      <div>
                        <h1 className="text-[14px] md:text-lg font-bold uppercase">
                          {image.name}
                        </h1>
                        <p className="text-gray-800 text-[10px] font-bold uppercase">
                          {image.subName} - {image.place}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-800 text-[10px] mr-2 flex items-center gap-1">
                          <IoIosStar size={12} className="text-blue-700" />
                          <IoIosStar size={12} className="text-blue-700" />
                          <IoIosStar size={12} className="text-blue-700" />
                          <IoIosStar size={12} className="text-blue-700" />
                          <FaStarHalf className="text-blue-700" />
                        </p>
                        <p className="text-gray-800 font-bold text-[11px]">
                          {image.reviews} reviews
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-800 text-[10px] md:text-[16px]">
                      {image.text}
                    </p>

                    <div className="md:mt-6 flex flex-col md:flex-row justify-between">
                      <p className="text-[12px] md:text-[16px]">
                        FROM
                        <span className="font-bold text-[20px] mx-2 md:mx-0 md:text-[25px]">
                          ${image.price}
                        </span>
                        PP/PN
                      </p>
                      <div className="flex gap-4 items-center">
                        <button className="text-[12px] md:text-xs font-bold flex items-center gap-1 uppercase">
                          {image.resortLink}
                          <IoIosArrowForward
                            size={18}
                            className="text-blue-500"
                          />
                        </button>
                        <div className="h-[28px] w-[2px] bg-gray-300"></div>
                        <button className="text-[12px] md:text-xs font-bold flex items-center gap-1 uppercase">
                          {image.roomLink}
                          <IoIosArrowForward
                            size={18}
                            className="text-blue-500"
                          />
                        </button>
                      </div>
                    </div>
                    <button className="absolute -right-0  md:-right-[380px] md:bottom-[120px] bg-black px-[20px] md:px-[30px] text-white text-[10px] md:text-sm py-1 mt-[50px] md:mt-4 font-bold">
                      VIEW ALL RESORTS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-start items-center mt-[200px] space-x-2">
            {visibleDots.map((dotIndex, i) => {
              const isFirst = i === 0;
              const isLast = i === windowSize - 1;
              const hasPrevious = start > 0;
              const hasNext = start + windowSize < totalItems;
              const isSmall = (isFirst && hasPrevious) || (isLast && hasNext);

              return (
                <button
                  key={dotIndex}
                  onClick={() => handleDotClick(dotIndex, isFirst, isLast)}
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === dotIndex ? "bg-blue-500" : "bg-gray-400"
                  } ${isSmall ? "w-[3px] h-[3px]" : "w-[5px] h-[5px]"}`}
                />
              );
            })}
          </div>
        </div>
        {/* Navigation Arrows */}
        <button
        onClick={prevSlide}
        className={`absolute ${
          isMdScreen ? "-left-[40px]" : "-left-[20px]"
        } top-1/3 transform -translate-y-1/2 rounded-full text-gray-800`}
      >
        <ChevronLeft 
          strokeWidth={0.5} 
          className={isMdScreen ? "w-[120px] h-[120px]" : "w-[60px] h-[60px]"}
        />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute ${
          isMdScreen ? "-right-[40px]" : "-right-[20px]"
        } top-1/3 transform -translate-y-1/2 rounded-full text-gray-800`}
      >
        <ChevronRight 
          strokeWidth={0.5} 
          className={isMdScreen ? "w-[120px] h-[120px]" : "w-[60px] h-[60px]"}
        />
      </button>
      </div>
    </div>
  );
}

export default LocationCarousel;
