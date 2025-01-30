import React, { useState } from "react";
import beach_2 from '../assets/beach_2.jpg'
import beach_3 from '../assets/beach_3.jpg'

const locations = {
  JAMAICA: [
    {
      name: "Sandals Montego Bay",
      image: beach_2,
    },
    {
      name: "Sandals Royal Caribbean",
      image: beach_3,
    },
    {
      name: "Sandals South Coast",
      image: "https://via.placeholder.com/1200x600?text=South+Coast",
    },
    {
      name: "Sandals Negril",
      image: "https://via.placeholder.com/1200x600?text=Negril",
    },
  ],
  "SAINT VINCENT": [
    {
      name: "Saint Vincent Resort",
      image: "https://via.placeholder.com/1200x600?text=Saint+Vincent",
    },
  ],
  CURACAO: [
    {
      name: "Royal Curaçao",
      image: "https://via.placeholder.com/1200x600?text=Royal+Curaçao",
    },
  ],
};

const LocationCarousel = () => {
  const [activeLocation, setActiveLocation] = useState("JAMAICA");
  const [currentIndex, setCurrentIndex] = useState(0);

  const locationImages = locations[activeLocation];

  const handleNext = () => {
    if (currentIndex < locationImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const locationKeys = Object.keys(locations);
      const nextLocationIndex =
        (locationKeys.indexOf(activeLocation) + 1) % locationKeys.length;
      setActiveLocation(locationKeys[nextLocationIndex]);
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      const locationKeys = Object.keys(locations);
      const prevLocationIndex =
        (locationKeys.indexOf(activeLocation) - 1 + locationKeys.length) %
        locationKeys.length;
      const prevLocation = locationKeys[prevLocationIndex];
      setActiveLocation(prevLocation);
      setCurrentIndex(locations[prevLocation].length - 1);
    }
  };

  return (
    <div className="relative w-full h-screen bg-gray-100">
      {/* Header */}
      <div className="text-center py-4 bg-gray-50">
        <h2 className="text-lg font-bold">17 ALL-INCLUSIVE RESORTS</h2>
        <p className="text-sm">ON THE CARIBBEAN'S BEST BEACHES</p>
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-4 py-4">
        {Object.keys(locations).map((loc) => (
          <button
            key={loc}
            onClick={() => {
              setActiveLocation(loc);
              setCurrentIndex(0);
            }}
            className={`px-4 py-2 rounded ${
              activeLocation === loc
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {loc}
          </button>
        ))}
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={locationImages[currentIndex].image}
          alt={locationImages[currentIndex].name}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded">
          {locationImages[currentIndex].name}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &#8594;
      </button>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <a
          href="#"
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700"
        >
          View Resort
        </a>
        <a
          href="#"
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700"
        >
          View Rooms
        </a>
        <a
          href="#"
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700"
        >
          View All Resorts
        </a>
      </div>
    </div>
  );
};

export default LocationCarousel;
