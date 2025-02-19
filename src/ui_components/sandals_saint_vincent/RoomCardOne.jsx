import React, { useState } from "react";
import room_card_one_1 from "../../assets/sandals_saint_vincent/room_card_one_1.avif";
import room_card_one_2 from "../../assets/sandals_saint_vincent/room_card_one_2.webp";
import room_card_one_3 from "../../assets/sandals_saint_vincent/room_card_one_3.avif";
import { IoIosArrowForward } from "react-icons/io";
import {
  BusFront,
  Bath,
  Accessibility,
  Wine,
  HandPlatter,
  Ship,
  ChefHat,
} from "lucide-react";

const roomDetails = [
  {
    images: [
      { src: room_card_one_1, style: "object-cover w-full h-full" },
      { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
      { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
    ],
    title: "Bamboo Palm Room with Balcony Tranquility Soaking Tub",
    description:
      "Resort: Sandals Saint Vincent | Category Code: LX | Room Views: Pool, Tropical Garden",
    details:
      "Located on the second and third floor, embrace your home away from home in this 580 sq. ft. room, with lush garden views and the ultimate seclusion. Take in the inspiring views while enjoying the outdoor Tranquility Soaking Tub or lounge on your sprawling balcony and let this magical island lull you into serenity.",
    icons: [<Bath />, <BusFront />, <Accessibility />, <Wine />],
    price: "$555",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },
  
  {
    images: [
      { src: room_card_one_1, style: "object-cover w-full h-full" },
      { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
      { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
    ],
    title:
      "Bamboo Palm Partial Oceanview Room with Balcony Tranquility Soaking Tub",
    description:
      "Resort: Sandals Saint Vincent | Category Code: PLX | Room Views: Partial Oceanview, Pool, Tropical Garden",
    details:
      "Located on the fourth and fifth floor, this 580 sq. ft. elevated enclave has a spacious living room, walk-in closet and a wide balcony so you can enjoy sights of St. Vincent's flora and fauna. When you're ready to wind down, the outdoor Tranquility Tub is there for a relaxing soak at the end of the day.",
    icons: [<Bath />, <BusFront />, <Wine />],
    price: "$425",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },

  {
    images: [
      { src: room_card_one_1, style: "object-cover w-full h-full" },
      { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
      { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
    ],
    title: "Lady Palm Club Suite with Media Room and Balcony Tranquility Soaking Tub",
    description:
      "Resort: Sandals Saint Vincent | Category Code: CBM | Room Views: Pool, Tropical Garden",
    details:
      "Find your Zen in this beautiful 741 sq. ft. room with coastal design. Lounge on the open balcony and gaze at the glittering pool. Take a relaxing soak on your Tranquility Soaking Tub and admire the view of the flourishing landscape.",
    icons: [<Bath />, <ChefHat />, <BusFront />, <Accessibility />, <Ship />, <HandPlatter />, <Wine />],
    price: "$457",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },

  {
    images: [
      { src: room_card_one_1, style: "object-cover w-full h-full" },
      { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
      { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
    ],
    title: "Beachfront Two-Bedroom Butler Villa Suite with Private Pool",
    description:
      "Resort: Sandals Saint Vincent | Category Code: BVIP | Room Views: Beachfront, Oceanview, Tropical Garden",
    details:
      "Set in the most idyllic landscape, this spacious 1,631 sq. ft. villa is nestled in prime position. Your vacation will be truly unforgettable with luxuries such as your own private pool and outdoor Tranquility Soaking Tub to take in the cerulean views.",
    icons: [<Ship />, <Bath />, <HandPlatter />, <BusFront />, <Accessibility />, <Wine />],
    price: "$1,298",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },

  {
    images: [
      { src: room_card_one_1, style: "object-cover w-full h-full" },
      { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
      { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
    ],
    title: "Vincy Overwater Two-Story Villa",
    description:
      "Resort: Sandals Saint Vincent | Category Code: OWV | Room Views: Beachfront, Oceanfront, Oceanview",
    details:
      "These 1,248 sq. ft. two-story water villas are perfectly set within our magical private cove. With lush green rainforest to the rear and ocean views to the front, you can truly immerse yourself in the sights and sounds of the surf and wildlife. Relax on your day bed which hangs above water, or take your ocean gazing to the dedicated second floor deck. For a private retreat, these villas are nothin...",
    icons: [<Bath />, <Ship />, <HandPlatter />, <BusFront />, <Accessibility />, <Wine />],
    price: "$1,614",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },

  {
    images: [
      { src: room_card_one_1, style: "object-cover w-full h-full" },
      { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
      { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
    ],
    title: "Lady Palm Club Suite with Fitness Room and Balcony Tranquility Soaking Tub",
    description:
      "Resort: Sandals Saint Vincent | Category Code: CBE | Room Views: Pool, Tropical Garden",
    details:
      "Located on the third and fourth floors, this 741 sq. ft. suite is equipped to handle your fitness needs while you vacation. The suite is adorned with textures and art inspired by the St. Vincent coastline. A new addition is the personal Technogym fitness room with one exercise bike, complete with programs you can personalize.",
    icons: [<Bath />, <ChefHat />, <Ship />, <BusFront />, <Accessibility />, <Wine />],
    price: "$475",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },

  {
    images: [
      { src: room_card_one_1, style: "object-cover w-full h-full" },
      { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
      { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
    ],
    title: "Lady Palm Partial Oceanview Club Suite with Media Room and Balcony Tranquility Soaking Tub",
    description:
      "Resort: Sandals Saint Vincent | Category Code: PCBM | Room Views: Partial Oceanview, Pool, Tropical Garden",
    details:
      "This 741 sq. ft. sublime retreat offers a glimpse of the calming azure waters. You can relax indoors, too, from the comfort of your own media room, complete with a sound bar and 75\" HD TV. On the open balcony, you'll find the ultimate way to unwind: a Tranquility Soaking Tub framed with views of the rich environment.",
    icons: [<Bath />, <ChefHat />, <HandPlatter />, <BusFront />, <Accessibility />, <Wine />],
    price: "$495",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },

  {
    images: [
      { src: room_card_one_1, style: "object-cover w-full h-full" },
      { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
      { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
    ],
    title: "Bamboo Palm Club Swim-up Room with Patio Tranquility Soaking Tub",
    description:
      "Resort: Sandals Saint Vincent | Category Code: SUP | Room Views: Pool, Tropical Garden",
    details:
      "Located on the ground floor, this 580 sq. ft. relaxing retreat is a little piece of paradise. A light filled space with airy, coastal decor. Take a dip straight from your balcony in your own semi-private pool. Feel the ease wash over you while recharging in your own Tranquility Soaking Tub.",
    icons: [<Bath />, <Ship />, <HandPlatter />, <BusFront />, <Accessibility />, <Wine />],
    price: "$537",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },

  {
    images: [
      { src: room_card_one_1, style: "object-cover w-full h-full" },
      { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
      { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
    ],
    title: "Lady Palm Club Swim-up Suite with Media Room and Patio Tranquility Soaking Tub",
    description:
      "Resort: Sandals Saint Vincent | Category Code: 1SUP | Room Views: Pool, Tropical Garden",
    details:
      "Experience the serenity of St. Vincent from the comfort of your 741 sq. ft. suite. Recline in the chaise lounge beside the zero-entry swim-up pool and admire the exotic tropical gardens. Enjoy some time out in your own personal media room, equipped with a 75\" LED TV and soundbar.",
    icons: [<Bath />, <Ship />, <ChefHat />, <HandPlatter />, <BusFront />, <Accessibility />, <Wine />],
    price: "$558",
    qualifications: [
      "Get Up to $1000 Instant Credit",
      "Service Personnel Discount",
      "Book Online & Get $100 Credit",
      "Get Up to 55% Off Rack Rate",
      "Last Minute Travel Deals",
    ],
  },

  // Additional room objects can be added here
];
            
const RoomCardOne = () => {
  const [dropdownOpen, setDropdownOpen] = useState(
    Array(roomDetails.length).fill(false)
  );

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div>
      {roomDetails.map((room, index) => (
        <div key={index}>
          <div className="mt-[20px] bg-white">
            {/* Images Section */}
            <div className="flex gap-[5px] h-[300px] overflow-hidden">
              <div className="w-[65%]">
                <img
                  src={room.images[0].src}
                  alt="Room"
                  className={room.images[0].style}
                />
              </div>
              <div className="w-[35%] flex flex-col gap-[5px]">
                <img
                  src={room.images[1].src}
                  alt="Room"
                  className={room.images[1].style}
                />
                <img
                  src={room.images[2].src}
                  alt="Room"
                  className={room.images[2].style}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
              <div className="text-lg font-semibold">{room.title}</div>
              <div className="text-[13px] text-gray-600 mb-2">
                {room.description}
              </div>
              <div className="mt-1 text-[13px] leading-relaxed text-gray-600">
                {room.details}
              </div>

              {/* Dropdown Toggle */}
              <div
                onClick={() => toggleDropdown(index)}
                className="mt-5 cursor-pointer flex items-center gap-1 font-semibold text-sm text-black"
              >
                <IoIosArrowForward
                  className={`transition-transform duration-700 ${
                    dropdownOpen[index] ? "rotate-90" : "rotate-0"
                  }`}
                  size={20}
                />
                VIEW QUALIFYING SPECIALS
              </div>

              {/* Dropdown Menu */}
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  dropdownOpen[index]
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-2 gap-2">
                  {room.qualifications.map((item) => (
                    <div key={item} className="">
                      <span className="inline-block w-full p-2 text-gray-900 text-[13px] bg-gray-100">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Icons Section */}
              <div className="flex mt-8 space-x-3">
                {room.icons.map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center"
                  >
                    {Icon}
                  </div>
                ))}
              </div>

              {/* Price Section */}
              <div className="flex justify-end">
                <p className="text-sm font-medium">
                  STARTING FROM
                  <span className="text-[35px] font-bold">{room.price}</span>
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

export default RoomCardOne;
