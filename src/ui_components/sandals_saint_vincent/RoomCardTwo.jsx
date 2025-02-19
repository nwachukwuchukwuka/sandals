import React, { useState } from "react";
import room_img_1 from "../../assets/sandals_saint_vincent/room_img_1.avif";
import room_img_2 from "../../assets/sandals_saint_vincent/room_img_2.avif";
import { BusFront, Bath, Accessibility, Wine } from "lucide-react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const rooms = [
  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, BusFront, Accessibility, Wine],
    title: "Bamboo Palm Room with Balcony Tranquility Soaking Tub",
    description: "Room Views: Pool, Tropical Garden",
    price: "404",
  },
  {
    images: [room_img_1, room_img_2],
    icons: [Bath, BusFront, Wine],
    title: "Bamboo Palm Partial Oceanview Room with Balcony Tranquility Soaking Tub",
    description: "Room Views: Partial Oceanview, Pool, Tropical Garden",
    price: "425",
  },
  // Add more room objects here if needed
];

const qualifications = [
  "Get Up to $1000 Instant Credit",
  "Service Personnel Discount",
  "Book Online & Get $100 Credit",
  "Get Up to 55% Off Rack Rate",
  "Last Minute Travel Deals",
];

// Carousel component for room images
const RoomCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to previous slide; wraps around if at the first image.
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Navigate to next slide; wraps around if at the last image.
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    // "group" class enables child elements to change on hover
    <div className="relative group">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="full h-[255px] object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Prev arrow (hidden by default, shows on hover) */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <IoIosArrowBack size={30} className="text-white" />
      </button>

      {/* Next arrow (always visible) */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <IoIosArrowForward size={30} className="text-white" />
      </button>

      {/* Dots (hidden by default, shows on hover) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-[5px] h-[5px] rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const RoomCardTwo = () => {
  return (
    <div>
      {rooms.map((roomDetails, index) => (
        <div key={index}>
          <div className="flex bg-white shadow-md mt-[20px] gap-2">
            <div className="w-[45%]">
              <RoomCarousel images={roomDetails.images} />
              <div className="flex space-x-4 p-[30px]">
                {roomDetails.icons.map((Icon, iconIndex) => (
                  <div
                    key={iconIndex}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg"
                  >
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-[20px]">
              <h2 className="text-lg font-semibold text-gray-800">
                {roomDetails.title}
              </h2>
              <div className="">
                <p className="text-[13px] text-gray-500 mb-4">
                  {roomDetails.description}
                </p>
              </div>

              {/* Qualifications */}
              <div className="mb-8">
                <p className="text-[13px] text-gray-800 mb-1">
                  This room qualifies for:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {qualifications.map((item) => (
                    <div key={item} className="flex justify-center">
                      <span className="inline-block w-[250px] p-2 text-gray-900 text-[13px] bg-gray-100">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Section */}
              <div className="pt-10 flex justify-end">
                <p className="text-sm font-medium">
                  STARTING FROM{" "}
                  <span className="text-[35px] font-bold">
                    ${roomDetails.price}
                  </span>
                  <span className="text-xl">PP/PN</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-black text-white py-1.5 uppercase text-[13px] w-[320px] font-bold mt-4 mb-[40px]">
              ROOM DETAILS
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomCardTwo;
