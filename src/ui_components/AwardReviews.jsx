import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Awards from "./Awards";
import Reviews from "./Reviews";

const AwardsReviews = () => {
  const [activeTab, setActiveTab] = useState("awards");
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const awardsImages = [
    "/images/award1.jpg",
    "/images/award2.jpg",
    "/images/award3.jpg",
  ];

  const reviews = [
    {
      title: "Sandals Dunn's River",
      location: "Ocho Rios - Jamaica",
      stars: 5,
      description: "Beautiful Sandals Dunn's River!",
      details:
        "Our fourth trip to Sandals Dunn’s River! Resort is gorgeous and staff makes this resort special. A few employees that made our stay more memorable...",
      date: "1 week ago",
      source: "TripAdvisor",
    },
    {
      title: "Sandals Royal Caribbean",
      location: "Montego Bay - Jamaica",
      stars: 5,
      description: "Outstanding Experience",
      details:
        "This was our second time at Sandals Royal Caribbean. I cannot say enough positive things about the resort and its staff. One person was nicer than the next...",
      date: "1 week ago",
      source: "TripAdvisor",
    },
    {
      title: "Sandals Negril",
      location: "Negril - Jamaica",
      stars: 5,
      description: "Great experience",
      details:
        "I had such a great time! The food was amazing, my room was clean, and the staff were so friendly! Carl made my stay well worth it!",
      date: "2 weeks ago",
      source: "TripAdvisor",
    },
  ];

  const handleAwardPrev = () => {
    setCurrentAwardIndex((prev) =>
      prev === 0 ? awardsImages.length - 1 : prev - 1
    );
  };

  const handleAwardNext = () => {
    setCurrentAwardIndex((prev) =>
      prev === awardsImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleReviewPrev = () => {
    setCurrentReviewIndex((prev) =>
      prev === 0 ? reviews.length - 3 : prev - 1
    );
  };

  const handleReviewNext = () => {
    setCurrentReviewIndex((prev) =>
      prev >= reviews.length - 3 ? 0 : prev + 1
    );
  };

  return (
    <div>
      <div className="text-center mb-6 bg-gray-100 pt-10">
        <h2 className="text-[30px] font-bold mb-2">AWARDS & REVIEWS</h2>
        <p className="text-gray-600 text-sm uppercase tracking-widest mb-8">
          Don't take our word for it, see what others are saying about us
        </p>
        <div className="flex justify-center mt-4">
          <button
            className={`px-[30px] md:px-[70px] py-2 md:py-2  text-[20px]  uppercase  ${activeTab === "awards"
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-600"
              }`}
            onClick={() => setActiveTab("awards")}
          >
            Awards
          </button>
          <button
            className={`px-[30px] md:px-[70px] py-2 md:py-4  text-[20px] uppercase  ${activeTab === "reviews"
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-600"
              }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
      </div>

      {activeTab === "awards" && (
        <Awards />
      )}

      {activeTab === "reviews" && (
        <Reviews />
      )}
    </div>
  );
};

export default AwardsReviews;
