import React, { useState } from "react";
import beach_2 from '../assets/beach_2.jpg'
import beach_3 from '../assets/beach_3.jpg'
import beach_4 from '../assets/beach_4.jpg'
import specials_promotion_1 from '../assets/specials_promotion_1.webp'
import specials_promotion_2 from '../assets/specials_promotion_2.webp'
import specials_promotion_3 from '../assets/specials_promotion_3.avif'


import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const carouselData = [
    {
        linkText: "VIEW OFFER",
        link: "/winter-blues",
        bgImage: `url(${specials_promotion_1})`, 
        buttonColor: "bg-white text-black hover:bg-blue-600", 
    },
    {
        linkText: "VIEW OFFER",
        link: "/summer-vibes",
        bgImage: `url(${specials_promotion_2})`, 
        buttonColor: "bg-white text-black hover:bg-blue-600", 
    },
    {
        linkText: "VIEW OFFER",
        link: "/summer-vibes",
        bgImage: `url(${specials_promotion_3})`, 
        buttonColor: "bg-black text-white hover:bg-yellow-500", 
    },
];

const SpecialsPromotion = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < carouselData.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const currentSlide = carouselData[currentIndex];

    return (
        <div className="">
            <h1 className="uppercase mb-4 tracking-wide">Specials & Promotions</h1>
            <div
                className="relative  h-[520px] bg-cover bg-center"
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
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-lg ${
                        currentIndex === 0 ? "text-gray-400 " : "text-white"
                    }`}
                    disabled={currentIndex === 0}
                >
                    <MdArrowBackIos size={35} />
                </button>
                <button
                    onClick={handleNext}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-lg ${
                        currentIndex === carouselData.length - 1 ? "text-gray-400 " : "text-white"
                    }`}
                    disabled={currentIndex === carouselData.length - 1}
                >
                    <MdArrowForwardIos size={35} />
                </button>
            </div>
        </div>
    );
};

export default SpecialsPromotion;
