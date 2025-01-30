import React, { useState } from "react";

const awards = [
  {
    title: "WORLD'S LEADING ALL-INCLUSIVE COMPANY",
    subTitle: "WORLD TRAVEL AWARDS 2023",
    image: "/path/to/award1.png", // Replace with your actual image path
  },
  {
    title: "BEST HOTEL CHAIN OVERALL GOLD",
    subTitle: "TRAVVY AWARDS 2023",
    image: "/path/to/award2.png",
  },
  {
    title: "CARIBBEAN'S LEADING HOTEL BRAND",
    subTitle: "WORLD TRAVEL AWARDS 2023",
    image: "/path/to/award3.png",
  },
];

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + awards.length) % awards.length
    );
  };

  return (
    <div className="relative bg-gray-100 py-10">
      {/* Carousel */}
      <div className="overflow-hidden max-w-4xl mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="min-w-full text-center px-4"
            >
              <img
                src={award.image}
                alt={award.title}
                className="mx-auto w-40 h-40 object-contain mb-4"
              />
              <h3 className="font-bold text-xl">{award.title}</h3>
              <p className="text-gray-500">{award.subTitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {awards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* View All Awards Button */}
      <div className="flex justify-center mt-6">
        <button
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          onClick={() => alert("View All Awards")}
        >
          VIEW ALL AWARDS
        </button>
      </div>
    </div>
  );
};

export default Awards;


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";



// const Awards = () => {
//     const [activeTab, setActiveTab] = useState("awards");
//     const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
//     const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

//     const awardsImages = [
//         "/images/award1.jpg",
//         "/images/award2.jpg",
//         "/images/award3.jpg",
//     ];

//     const reviews = [
//         {
//             title: "Sandals Dunn's River",
//             location: "Ocho Rios - Jamaica",
//             stars: 5,
//             description: "Beautiful Sandals Dunn's River!",
//             details:
//                 "Our fourth trip to Sandals Dunn’s River! Resort is gorgeous and staff makes this resort special. A few employees that made our stay more memorable...",
//             date: "1 week ago",
//             source: "TripAdvisor",
//         },
//         {
//             title: "Sandals Royal Caribbean",
//             location: "Montego Bay - Jamaica",
//             stars: 5,
//             description: "Outstanding Experience",
//             details:
//                 "This was our second time at Sandals Royal Caribbean. I cannot say enough positive things about the resort and its staff. One person was nicer than the next...",
//             date: "1 week ago",
//             source: "TripAdvisor",
//         },
//         {
//             title: "Sandals Negril",
//             location: "Negril - Jamaica",
//             stars: 5,
//             description: "Great experience",
//             details:
//                 "I had such a great time! The food was amazing, my room was clean, and the staff were so friendly! Carl made my stay well worth it!",
//             date: "2 weeks ago",
//             source: "TripAdvisor",
//         },
//     ];

//     const handleAwardPrev = () => {
//         setCurrentAwardIndex((prev) =>
//             prev === 0 ? awardsImages.length - 1 : prev - 1
//         );
//     };

//     const handleAwardNext = () => {
//         setCurrentAwardIndex((prev) =>
//             prev === awardsImages.length - 1 ? 0 : prev + 1
//         );
//     };

//     const handleReviewPrev = () => {
//         setCurrentReviewIndex((prev) =>
//             prev === 0 ? reviews.length - 3 : prev - 1
//         );
//     };

//     const handleReviewNext = () => {
//         setCurrentReviewIndex((prev) =>
//             prev >= reviews.length - 3 ? 0 : prev + 1
//         );
//     };



//     return (
//         <div><div className="relative w-full flex items-center">
//             <button
//                 className="absolute left-0 bg-blue-500 text-white p-2 rounded-full"
//                 onClick={handleAwardPrev}
//             >
//                 ❮
//             </button>
//             <motion.div
//                 key={currentAwardIndex}
//                 className="mx-auto overflow-hidden w-[300px] h-[200px] flex-shrink-0"
//                 animate={{ x: 0 }}
//                 initial={{ x: 100 }}
//                 exit={{ x: -100 }}
//                 transition={{ duration: 0.5 }}
//             >
//                 <img
//                     src={awardsImages[currentAwardIndex]}
//                     alt="Award"
//                     className="w-full h-full object-cover rounded-lg shadow-md"
//                 />
//             </motion.div>
//             <button
//                 className="absolute right-0 bg-blue-500 text-white p-2 rounded-full"
//                 onClick={handleAwardNext}
//             >
//                 ❯
//             </button>
//         </div></div>
//     )
// }

// export default Awards