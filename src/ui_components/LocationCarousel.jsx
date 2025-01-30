import React, { useState } from 'react';
import beach_2 from '../assets/beach_2.jpg'
import beach_3 from '../assets/beach_3.jpg'
import beach_4 from '../assets/beach_4.jpg'
import LocationCarouselCard from './LocationCarouselCard';

const locations = [
  { name: 'JAMAICA', image: beach_2 }, // Replace with your image paths
  { name: 'SAINT VINCENT', image: beach_3 },
  { name: 'CURAÇAO', image: '/curacao.jpg' },
  { name: 'SAINT LUCIA', image: '/saintlucia.jpg' },
  { name: 'BAHAMAS', image: '/bahamas.jpg' },
  { name: 'ANTIGUA', image: '/antigua.jpg' },
  { name: 'GRENADA', image: '/grenada.jpg' },
  { name: 'BARBADOS', image: '/barbados.jpg' },
];

function LocationCarousel() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="bg-gray-100 h-[90vh] pb-[900px]">

      {/* Locations Navbar */}
      <div className=" pt-4  flex justify-center"> {/* Adjusted justify-between */}
        <div className="flex space-x-6">
          {locations.map((location) => (
            <button
              key={location.name}
              className={`text-gray-600 hover:text-blue-500 font-medium ${selectedLocation.name === location.name ? 'text-blue-500' : ''
                }`}
              onClick={() => handleLocationClick(location)}
            >
              {location.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
    <LocationCarouselCard />
    
  
    </div>
  );
}

export default LocationCarousel;