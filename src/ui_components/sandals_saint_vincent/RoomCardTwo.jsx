import React, { useState, useEffect } from "react";
import room_img_1 from "../../assets/sandals_saint_vincent/room_img_1.avif";
import room_img_2 from "../../assets/sandals_saint_vincent/room_img_2.avif";
import {
  BusFront,
  Bath,
  Accessibility,
  Wine,
  Tv,
  Guitar,
  Ship,
  Dumbbell,
  User,
} from "lucide-react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const rooms = [
  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, BusFront, Accessibility, Wine],
    title: "Bamboo Palm Room with Balcony Tranquility Soaking Tub",
    description: "Room Views: Pool, Tropical Garden",
    price: "404",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },
  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, BusFront, Wine],
    title:
      "Bamboo Palm Partial Oceanview Room with Balcony Tranquility Soaking Tub",
    description: "Room Views: Partial Oceanview, Pool, Tropical Garden",
    price: "425",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },
  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Tv, BusFront, Accessibility, Guitar, Ship, Wine],
    title:
      "Lady Palm Club Suite with Media Room and Balcony Tranquility Soaking Tub",
    description: "Room Views: Pool, Tropical Garden",
    price: "457",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },
  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Dumbbell, Ship, BusFront, Guitar, Wine],
    title:
      "Lady Palm Club Suite with Fitness Room and Balcony Tranquility Soaking Tub",
    description: "Room Views: Pool, Tropical Garden",
    price: "475",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },
  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Tv, Ship, BusFront, Guitar, Wine],
    title:
      "Lady Palm Partial Oceanview Club Suite with Media Room and Balcony Tranquility Soaking Tub",
    description: "Room Views: Partial Oceanview, Pool, Tropical Garden",
    price: "495",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },
  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Ship, BusFront, Guitar, Wine],
    title: "Bamboo Palm Club Swim-up Room with Patio Tranquility Soaking Tub",
    description: "Room Views: Pool, Tropical Garden",
    price: "537",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },
  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Ship, Tv, Ship, BusFront, Guitar, Wine],
    title:
      "Lady Palm Club Swim-up Suite with Media Room and Patio Tranquility Soaking Tub",
    description: "Room Views: Pool, Tropical Garden",
    price: "558",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },
  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Ship, Ship, BusFront, User, Wine],
    title: "Garden Butler Suite with Patio Tranquility Soaking Tub",
    description: "Room View: Tropical Garden",
    price: "627",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },
  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Ship, Ship, BusFront, User, Wine],
    title: "One-Bedroom Garden Butler Suite with Patio Tranquility Soaking Tub",
    description: "Room View: Tropical Garden",
    price: "635",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },
  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Tv, Ship, BusFront, User, Wine],
    title:
      "One-Bedroom Garden Butler Suite with Media Room and Patio Tranquility Soaking Tub",
    description: "Room View: Tropical Garden",
    price: "721",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },

  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Dumbbell, Ship, BusFront, User, Wine],
    title: "Beachfront Butler Villa Suite with Private Pool",
    description: "Room Views: Beachfront, Oceanview, Tropical Garden",
    price: "860",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },

  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Dumbbell, Ship, BusFront, User, Wine],
    title: "Beachfront One-Bedroom Butler Villa Suite with Private Pool",
    description: "Room Views: Beachfront, Oceanview, Tropical Garden",
    price: "1221",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },
  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Tv, Ship, BusFront, User, Wine],
    title:
      "Beachfront One-Bedroom Butler Villa Suite with Media Room and Private Pool",
    description: "Room Views: Beachfront, Oceanview, Tropical Garden",
    price: "1250",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },

  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Ship, Dumbbell, BusFront, User, Wine],
    title: "Beachfront Two-Bedroom Butler Villa Suite with Private Pool",
    description: "Room Views: Beachfront, Oceanview, Tropical Garden",
    price: "1298",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },

  {
    images: [room_img_1, room_img_2, room_img_2, room_img_2, room_img_2],
    icons: [Bath, Ship, Dumbbell, BusFront, User, Wine],
    title: "Vincy Overwater Two-Story Villa",
    description: "Room Views: Beachfront, Oceanfront, Oceanview",
    price: "1614",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },
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

const RoomCardTwo = ({ selectedCategory, onRoomCountsChange, sortOrder }) => {
  const [showNonMatching, setShowNonMatching] = useState(false);

  // Filter and sort rooms based on selected category and sort order
  const { filteredRooms, nonMatchingRooms } = React.useMemo(() => {
    // First, filter the rooms based on category
    let filtered = !selectedCategory 
      ? [...rooms] 
      : rooms.filter((room) => {
          const searchWord = selectedCategory.split(" ")[0].toLowerCase();
          const titleLower = room.title.toLowerCase();
          const descriptionLower = room.description.toLowerCase();
          return titleLower.includes(searchWord) || descriptionLower.includes(searchWord);
        });

    // Then sort the filtered rooms by price
    filtered.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return sortOrder === 'high-to-low' ? priceB - priceA : priceA - priceB;
    });

    // Get non-matching rooms (these should also be sorted)
    const nonMatching = selectedCategory 
      ? rooms
          .filter(room => !filtered.includes(room))
          .sort((a, b) => {
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);
            return sortOrder === 'high-to-low' ? priceB - priceA : priceA - priceB;
          })
      : [];

    return { filteredRooms: filtered, nonMatchingRooms: nonMatching };
  }, [selectedCategory, sortOrder]);

  // Notify parent component of room counts
  useEffect(() => {
    onRoomCountsChange({
      totalRooms: rooms.length,
      filteredRooms: filteredRooms.length,
    });
  }, [filteredRooms.length, onRoomCountsChange]);

  return (
    <div>
      {/* Filtered rooms */}
      {/* Filtered Rooms */}
      {filteredRooms.map((roomDetails, index) => (
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
                  {roomDetails.qualifications.map((item) => (
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

      {/* Non-matching rooms section */}
      {selectedCategory && nonMatchingRooms.length > 0 && (
        <>
          <hr className="my-6 border-gray-200" />
          <div className="mb-4">
            <button
              onClick={() => setShowNonMatching(!showNonMatching)}
              className="flex items-center gap-1 text-blue-700 hover:text-blue-800 text-sm font-semibold"
            >
              <IoIosArrowForward
                className={`transition-transform duration-700 ${
                  showNonMatching ? "rotate-90" : ""
                }`}
              />
              <span>
                View {nonMatchingRooms.length} rooms not matching your
                selections
              </span>
            </button>

            {/* Non-matching rooms dropdown */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                showNonMatching
                  ? "max-h-full opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              {nonMatchingRooms.map((roomDetails, index) => (
                <div key={index}>
                  <div className="flex bg-white shadow-md mt-[20px] gap-2">
                    {/* Same room card content as above */}
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
                          {roomDetails.qualifications.map((item) => (
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
          </div>
        </>
      )}
    </div>
  );
};

export default RoomCardTwo;
