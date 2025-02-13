import React, { useState } from "react";
import beach_2 from '../assets/beach_2.jpg'
import beach_3 from '../assets/beach_3.jpg'
import beach_4 from '../assets/beach_4.jpg'
import featured_resort_1 from '../assets/featured_resort_1.webp'
import featured_resort_2 from '../assets/featured_resort_2.webp'
import featured_resort_3 from '../assets/featured_resort_3.webp'
import featured_resort_4 from '../assets/featured_resort_4.avif'



import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


const carouselData = [
    {
        linkText: "VIEW DETAILS",
        link: "/winter-blues",
        bgImage: `url(${featured_resort_1})`, 
        buttonColor: "bg-white text-black hover:bg-blue-600", 
    },
    {
        linkText: "VIEW OFFER",
        link: "/summer-vibes",
        bgImage: `url(${featured_resort_2})`, 
        buttonColor: "bg-black text-white hover:bg-yellow-500", 
    },
    {
        linkText: "VIEW OFFER",
        link: "/summer-vibes",
        bgImage: `url(${featured_resort_3})`, 
        buttonColor: "bg-black text-white hover:bg-yellow-500", 
    },
    {
        linkText: "VIEW OFFER",
        link: "/summer-vibes",
        bgImage: `url(${featured_resort_4})`, 
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
            <h1 className="mb-4 uppercase tracking-wide">Featured Resorts</h1>
            <div
                className="relative h-[520px]  bg-cover bg-center"
                style={{ backgroundImage: currentSlide.bgImage }}
            >
                {/* Carousel Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end mb-6  text-center">
                    <a
                        href={currentSlide.link}
                        className={`${currentSlide.buttonColor}  px-6 py-1 text-sm font-bold transition duration-300`}
                    >
                        {currentSlide.linkText}
                    </a>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg"
                >
                    <MdArrowBackIos size={35} />

                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg"
                >
                    <MdArrowForwardIos size={35} />

                </button>
            </div>
        </div>

    );
};

export default FeaturedResorts;