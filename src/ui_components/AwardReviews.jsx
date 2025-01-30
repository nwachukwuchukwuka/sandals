import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <div className="bg-gray-100 py-10">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">AWARDS & REVIEWS</h2>
        <p className="text-gray-600 text-sm">
          Don't take our word for it, see what others are saying about us
        </p>
        <div className="flex justify-center mt-4">
          <button
            className={`px-4 py-2 mx-2 text-sm font-medium rounded-md ${
              activeTab === "awards"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("awards")}
          >
            Awards
          </button>
          <button
            className={`px-4 py-2 mx-2 text-sm font-medium rounded-md ${
              activeTab === "reviews"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
      </div>

      {activeTab === "awards" && (
        <div className="relative w-full flex items-center">
          <button
            className="absolute left-0 bg-blue-500 text-white p-2 rounded-full"
            onClick={handleAwardPrev}
          >
            ❮
          </button>
          <motion.div
            key={currentAwardIndex}
            className="mx-auto overflow-hidden w-[300px] h-[200px] flex-shrink-0"
            animate={{ x: 0 }}
            initial={{ x: 100 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={awardsImages[currentAwardIndex]}
              alt="Award"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </motion.div>
          <button
            className="absolute right-0 bg-blue-500 text-white p-2 rounded-full"
            onClick={handleAwardNext}
          >
            ❯
          </button>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="relative grid grid-cols-3 gap-4 overflow-hidden">
          {reviews
            .slice(currentReviewIndex, currentReviewIndex + 3)
            .map((review, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent>
                  <h3 className="text-lg font-bold">{review.title}</h3>
                  <p className="text-sm text-gray-500">
                    {review.location}
                  </p>
                  <p className="text-yellow-500">{"★".repeat(review.stars)}</p>
                  <p>{review.description}</p>
                </CardContent>
              </Card>
            ))}
          <button
            className="absolute left-0 bg-blue-500 text-white p-2 rounded-full"
            onClick={handleReviewPrev}
          >
            ❮
          </button>
          <button
            className="absolute right-0 bg-blue-500 text-white p-2 rounded-full"
            onClick={handleReviewNext}
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
};

export default AwardsReviews;
