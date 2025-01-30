import beach_2 from '../assets/beach_2.jpg'
import beach_3 from '../assets/beach_3.jpg'
import beach_4 from '../assets/beach_4.jpg'
import React, { useState } from 'react';


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



const LocationCarouselCard = () => {
    const [selectedLocation, setSelectedLocation] = useState(locations[0]);

    return (
        <div>
            <div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="max-w-[85%] mx-auto p-8 pt-6 relative ">

                        {/* Image Area */}
                        <div className="w-full  overflow-hidden"> {/* Added shadow-lg */}
                            <img
                                src={selectedLocation.image}
                                alt={selectedLocation.name}
                                className="w-[1500px] object-cover h-[70vh]"
                            />
                        </div>

                        {/* Text Content Area */}

                        <h2 className="absolute top-[340px] left-[33px] text-2xl  text-white bg-gray-700 px-8 py-1 pr-[90px] mb-4">
                            {selectedLocation.name}
                        </h2>



                        <div className="absolute -bottom-[170px] bg-white p-6 shadow-md w-[65%]    ">

                            <p className="text-gray-600">
                                An exotic, unspoiled hideaway in the heart of {selectedLocation.name}'s exclusive Pink Gin Beach. Featuring breathtaking innovations like pools suspended in the sky, and where living rooms are found in pools.
                            </p>
                            {/* <div className="mt-6">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                  ALL RESORTS
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                  VIEW ALL RESORTS
                </button>
              </div> */}
                            <div className="mt-6">
                                <p className="text-lg font-medium text-gray-800">FROM $362 PP/PN</p>
                                <div className="mt-4">
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
                                        VIEW RESORT
                                    </button>
                                    <button className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded">
                                        VIEW ROOMS &gt;
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button className='absolute right-[30px] bg-black px-[30px] text-white py-1 mt-4 font-semibold'>VIEW ALL RESORTS</button>

                    </div>

                </div>
            </div>


            
        </div>

    )
}

export default LocationCarouselCard