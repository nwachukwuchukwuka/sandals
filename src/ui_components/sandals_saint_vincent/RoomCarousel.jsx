import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RoomCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative group">
      <div
        className="overflow-hidden relative"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((img, imgIndex) => (
          <img
            key={imgIndex}
            src={img}
            alt={`Slide ${imgIndex}`}
            className="w-full h-[255px] object-cover absolute"
            style={{
              left: `${imgIndex * 100}%`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={handlePrev} className="bg-black text-white p-2">
          <ChevronLeft />
        </button>
        <button onClick={handleNext} className="bg-black text-white p-2">
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {images.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`w-2 h-2 rounded-full ${
              dotIndex === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default RoomCarousel;