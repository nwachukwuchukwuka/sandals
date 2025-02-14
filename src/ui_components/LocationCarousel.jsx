import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";
import { carousel_data } from "../constants/constants";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";


function LocationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
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

  return (
    <div>
      <div className="text-center bg-gray-100 pt-[100px]">
        <h1 className="text-2xl font-bold">17 ALL-INCLUSIVE RESORTS</h1>
        <p className="text-gray-900 uppercase text-sm  tracking-widest">
          On the caribbean’s best beaches
        </p>

        <div className="max-w-[80%] mx-auto mt-6 flex justify-center items-center gap-4">
          <p className="text-lg">Our Sandals Locations: </p>
          <div>
            <button className="mx-2 uppercase font-bold">JAMAICA</button>
            <button className="mx-2 uppercase font-bold">SAINT VINCENT</button>
            <button className="mx-2 uppercase font-bold">CURAÇAO</button>
            <button className="mx-2 uppercase font-bold">SAINT LUCIA</button>
            <button className="mx-2 uppercase font-bold">BAHAMAS</button>
            <button className="mx-2 uppercase font-bold">ANTIGUA</button>
            <button className="mx-2 uppercase font-bold">GRENADA</button>
            <button className="mx-2 uppercase font-bold">BARBADOS</button>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-100">
        <div className="w-full max-w-[80%] mx-auto pt-6">
          {/* Image Slider */}
          <div className="rounded-lg">
            <div
              className="flex transition-transform duration-500 md:gap-[60px]"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% + 60px)))`,
              }}
            >
              {carousel_data.map((image, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 transition duration-500 ${
                    currentIndex === index ? "opacity-100" : "opacity-30"
                  }`}
                >
                  <img
                    src={image.url}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[550px] object-cover"
                  />

                  <div className="absolute -bottom-[170px] bg-white p-6 shadow-md w-[65%]">
                    <div className="flex justify-between mb-4">
                      <div>
                        <h1 className="text-lg font-bold">
                          SANDALS SOUTH COAST
                        </h1>
                        <p className="text-gray-800 text-[10px] font-bold">
                          OCHIO ROSE - JAMAICA
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
                          808 reviews
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-800">
                      An exotic, unspoiled hideaway in the heart of 's exclusive
                      Pink Gin Beach. Featuring breathtaking innovations like
                      pools suspended in the sky, and where living rooms are
                      found in pools.
                    </p>

                    <div className="mt-6 flex justify-between">
                      <p>
                        FROM{" "}
                        <span className="font-bold text-[25px]"> $362 </span>
                        PP/PN
                      </p>
                      <div className="flex gap-4 items-center">
                        <button className=" text-xs font-bold flex items-center gap-1">
                          VIEW RESORT
                          <IoIosArrowForward
                            size={18}
                            className="text-blue-500"
                          />
                        </button>
                        <div className="h-[28px] w-[2px] bg-gray-300"></div>
                        <button className=" text-xs font-bold flex items-center gap-1">
                          VIEW ROOMS{" "}
                          <IoIosArrowForward
                            size={18}
                            className="text-blue-500"
                          />
                        </button>
                      </div>
                    </div>
                    <button className=" absolute -right-[380px] bottom-[120px] bg-black px-[30px] text-white text-sm py-1 mt-4 font-semibold">
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
          className="absolute -left-[40px] top-1/3 transform -translate-y-1/2 rounded-full text-gray-800"
        >
          <ChevronLeft strokeWidth={0.5} size={120} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-[40px] top-1/3 transform -translate-y-1/2 rounded-full text-gray-800"
        >
         <ChevronRight strokeWidth={0.5} size={120} />
        </button>
      </div>
    
    </div>
  );
}

export default LocationCarousel;