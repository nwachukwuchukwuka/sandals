import React, { useState } from "react";
import beach_2 from '../assets/beach_2.jpg'
import beach_3 from '../assets/beach_3.jpg'
import beach_4 from '../assets/beach_4.jpg'

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


const carouselData = [
    {
        linkText: "VIEW DETAILS",
        link: "/winter-blues",
        bgImage: `url(${beach_2})`, 
        buttonColor: "bg-white text-black hover:bg-blue-600", 
    },
    {
        linkText: "VIEW OFFER",
        link: "/summer-vibes",
        bgImage: `url(${beach_3})`, 
        buttonColor: "bg-black text-white hover:bg-yellow-500", 
    },
    {
        linkText: "VIEW OFFER",
        link: "/summer-vibes",
        bgImage: `url(${beach_4})`, 
        buttonColor: "bg-black text-white hover:bg-yellow-500", 
    },

];

const FeaturedResorts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
        );
    };

    const currentSlide = carouselData[currentIndex];

    return (
        <div>
            <h1 className="mb-4 uppercase">Featured Resorts</h1>
            <div
                className="relative h-[450px] w-[280px] bg-cover bg-center"
                style={{ backgroundImage: currentSlide.bgImage }}
            >
                {/* Carousel Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end mb-6  text-center">
                    <a
                        href={currentSlide.link}
                        className={`${currentSlide.buttonColor}  px-6 py-3 rounded-lg transition duration-300`}
                    >
                        {currentSlide.linkText}
                    </a>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg"
                >
                    <MdArrowBackIos size={24} />

                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg"
                >
                    <MdArrowForwardIos size={24} />

                </button>
            </div>
        </div>

    );
};

export default FeaturedResorts;