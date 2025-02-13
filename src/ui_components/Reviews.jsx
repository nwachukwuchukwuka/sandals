import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Reviews = () => {
    const [currentPage, setCurrentPage] = useState(0);

    // Sample review data - replace with your actual data
    const reviews = [
        {
            title: "Sandals Regency La Toc",
            location: "CASTRIES - SAINT LUCIA",
            stars: 5,
            description: "Amazing Sandals vacation",
            review: "We had the best time ever on our first vacation at a Sandals resort. The butler services were out of this world! Clovis, Donovan and G took such great care of us. We felt so...",
            date: "1 MONTH AGO ON",
            platform: "TRIPADVISOR"
        },
        {
            title: "Sandals Regency La Toc",
            location: "CASTRIES - SAINT LUCIA",
            stars: 5,
            description: "Amazing Sandals vacation",
            review: "We had the best time ever on our first vacation at a Sandals resort. The butler services were out of this world! Clovis, Donovan and G took such great care of us. We felt so...",
            date: "1 MONTH AGO ON",
            platform: "TRIPADVISOR"
        },
        {
            title: "Sandals Regency La Toc",
            location: "CASTRIES - SAINT LUCIA",
            stars: 5,
            description: "Amazing Sandals vacation",
            review: "We had the best time ever on our first vacation at a Sandals resort. The butler services were out of this world! Clovis, Donovan and G took such great care of us. We felt so...",
            date: "1 MONTH AGO ON",
            platform: "TRIPADVISOR"
        },
        {
            title: "Sandals Regency La Toc",
            location: "CASTRIES - SAINT LUCIA",
            stars: 5,
            description: "Amazing Sandals vacation",
            review: "We had the best time ever on our first vacation at a Sandals resort. The butler services were out of this world! Clovis, Donovan and G took such great care of us. We felt so...",
            date: "1 MONTH AGO ON",
            platform: "TRIPADVISOR"
        },
        {
            title: "Sandals Regency La Toc",
            location: "CASTRIES - SAINT LUCIA",
            stars: 5,
            description: "Amazing Sandals vacation",
            review: "We had the best time ever on our first vacation at a Sandals resort. The butler services were out of this world! Clovis, Donovan and G took such great care of us. We felt so...",
            date: "1 MONTH AGO ON",
            platform: "TRIPADVISOR"
        },
        {
            title: "Sandals Regency La Toc",
            location: "CASTRIES - SAINT LUCIA",
            stars: 5,
            description: "Amazing Sandals vacation",
            review: "We had the best time ever on our first vacation at a Sandals resort. The butler services were out of this world! Clovis, Donovan and G took such great care of us. We felt so...",
            date: "1 MONTH AGO ON",
            platform: "TRIPADVISOR"
        },
        {
            title: "Sandals Regency La Toc",
            location: "CASTRIES - SAINT LUCIA",
            stars: 5,
            description: "Amazing Sandals vacation",
            review: "We had the best time ever on our first vacation at a Sandals resort. The butler services were out of this world! Clovis, Donovan and G took such great care of us. We felt so...",
            date: "1 MONTH AGO ON",
            platform: "TRIPADVISOR"
        },
        {
            title: "Sandals Regency La Toc",
            location: "CASTRIES - SAINT LUCIA",
            stars: 5,
            description: "Amazing Sandals vacation",
            review: "We had the best time ever on our first vacation at a Sandals resort. The butler services were out of this world! Clovis, Donovan and G took such great care of us. We felt so...",
            date: "1 MONTH AGO ON",
            platform: "TRIPADVISOR"
        },
        {
            title: "Sandals Regency La Toc",
            location: "CASTRIES - SAINT LUCIA",
            stars: 5,
            description: "Amazing Sandals vacation",
            review: "We had the best time ever on our first vacation at a Sandals resort. The butler services were out of this world! Clovis, Donovan and G took such great care of us. We felt so...",
            date: "1 MONTH AGO ON",
            platform: "TRIPADVISOR"
        },
        {
            title: "Sandals Regency La Toc",
            location: "CASTRIES - SAINT LUCIA",
            stars: 5,
            description: "Amazing Sandals vacation",
            review: "We had the best time ever on our first vacation at a Sandals resort. The butler services were out of this world! Clovis, Donovan and G took such great care of us. We felt so...",
            date: "1 MONTH AGO ON",
            platform: "TRIPADVISOR"
        },
        {
            title: "Sandals Regency La Toc",
            location: "CASTRIES - SAINT LUCIA",
            stars: 5,
            description: "Amazing Sandals vacation",
            review: "We had the best time ever on our first vacation at a Sandals resort. The butler services were out of this world! Clovis, Donovan and G took such great care of us. We felt so...",
            date: "1 MONTH AGO ON",
            platform: "TRIPADVISOR"
        },
        // Add more reviews to match your 17 pages × 3 items per page
    ];

    const TOTAL_PAGES = 17;
    const ITEMS_PER_PAGE = 3;
    const MAX_VISIBLE_DOTS = 6;

    // Calculate which dots should be visible
    const getVisibleDots = () => {
        let start = Math.max(0, currentPage - Math.floor(MAX_VISIBLE_DOTS / 2));
        if (start + MAX_VISIBLE_DOTS > TOTAL_PAGES) {
            start = TOTAL_PAGES - MAX_VISIBLE_DOTS;
        }
        return Array.from({ length: MAX_VISIBLE_DOTS }, (_, i) => start + i);
    };

    const handleDotClick = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handlePrevious = () => {
        setCurrentPage(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentPage(prev => Math.min(TOTAL_PAGES - 1, prev + 1));
    };

    return (
        <div className="max-w-7xl mx-auto px-4">
            {/* Carousel Container */}
            <div className="relative">
                {/* Reviews Grid */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {reviews
                        .slice(currentPage * ITEMS_PER_PAGE, (currentPage * ITEMS_PER_PAGE) + ITEMS_PER_PAGE)
                        .map((review, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-bold mb-2">{review.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{review.location}</p>
                                <div className="flex text-blue-500 mb-2">
                                    {[...Array(review.stars)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                                <h4 className="font-semibold mb-2">{review.description}</h4>
                                <p className="text-gray-700 mb-4">{review.review}</p>
                                <div className="text-sm text-gray-500">
                                    {review.date} <span className="inline-block mx-2">•</span> {review.platform}
                                </div>
                            </div>
                        ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrevious}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg"
                    disabled={currentPage === 0}
                >
                    <IoIosArrowBack size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg"
                    disabled={currentPage === TOTAL_PAGES - 1}
                >
                    <IoIosArrowForward size={24} />
                </button>

                {/* Dots Navigation */}
                <div className="flex justify-center items-center gap-2 mt-6">
                    {getVisibleDots().map((dotIndex) => (
                        <button
                            key={dotIndex}
                            onClick={() => handleDotClick(dotIndex)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                currentPage === dotIndex ? 'bg-blue-500 w-4' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to page ${dotIndex + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;