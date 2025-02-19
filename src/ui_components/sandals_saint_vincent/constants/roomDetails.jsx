import room_card_img_1 from "../../../assets/sandals_saint_vincent/room_card_img_1.webp";
import room_card_img_2 from "../../../assets/sandals_saint_vincent/room_card_img_2.avif";
import room_card_img_3 from "../../../assets/sandals_saint_vincent/room_card_img_3.webp";
import room_card_img_4 from "../../../assets/sandals_saint_vincent/room_card_img_4.webp";
import room_card_img_5 from "../../../assets/sandals_saint_vincent/room_card_img_5.avif";
import room_card_img_6 from "../../../assets/sandals_saint_vincent/room_card_img_6.avif";

import {
  BusFront,
  Bath,
  Accessibility,
  Wine,
  HandPlatter,
  Ship,
  ChefHat,
} from "lucide-react";

export const roomDetails = [
  {
    images: [
      { src: room_card_img_1, style: "object-cover w-full h-full" },
      { src: room_card_img_2, style: "h-[150px] object-cover w-full" },
      { src: room_card_img_3, style: "h-[150px] object-cover w-full" },
    ],
    title: "Bamboo Palm Room with Balcony Tranquility Soaking Tub",
    description:
      "Resort: Sandals Saint Vincent | Category Code: LX | Room Views: Pool, Tropical Garden",
    details:
      "Located on the second and third floor, embrace your home away from home in this 580 sq. ft. room, with lush garden views and the ultimate seclusion. Take in the inspiring views while enjoying the outdoor Tranquility Soaking Tub or lounge on your sprawling balcony and let this magical island lull you into serenity.",
    icons: [<Bath />, <BusFront />, <Accessibility />, <Wine />],
    price: "$404",
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
      { src: room_card_img_4, style: "object-cover w-full h-full" },
      { src: room_card_img_5, style: "h-[150px] object-cover w-full" },
      { src: room_card_img_6, style: "h-[150px] object-cover w-full" },
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

  // {
  //   images: [
  //     { src: room_card_img_7, style: "object-cover w-full h-full" },
  //     { src: room_card_img_8, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_img_9, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title:
  //     "Lady Palm Club Suite with Media Room and Balcony Tranquility Soaking Tub",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: CBM | Room Views: Pool, Tropical Garden",
  //   details:
  //     "Find your Zen in this beautiful 741 sq. ft. room with coastal design. Lounge on the open balcony and gaze at the glittering pool. Take a relaxing soak on your Tranquility Soaking Tub and admire the view of the flourishing landscape.",
  //   icons: [
  //     <Bath />,
  //     <ChefHat />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Ship />,
  //     <HandPlatter />,
  //     <Wine />,
  //   ],
  //   price: "$457",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // {
  //   images: [
  //     { src: room_card_one_1, style: "object-cover w-full h-full" },
  //     { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title:
  //     "Lady Palm Club Suite with Fitness Room and Balcony Tranquility Soaking Tub",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: CBE | Room Views: Pool, Tropical Garden",
  //   details:
  //     "Located on the third and fourth floors, this 741 sq. ft. suite is equipped to handle your fitness needs while you vacation. The suite is adorned with textures and art inspired by the St. Vincent coastline. A new addition is the personal Technogym fitness room with one exercise bike, complete with programs you can personalize.",
  //   icons: [
  //     <Bath />,
  //     <ChefHat />,
  //     <Ship />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Wine />,
  //   ],
  //   price: "$475",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // {
  //   images: [
  //     { src: room_card_one_1, style: "object-cover w-full h-full" },
  //     { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title:
  //     "Lady Palm Partial Oceanview Club Suite with Media Room and Balcony Tranquility Soaking Tub",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: PCBM | Room Views: Partial Oceanview, Pool, Tropical Garden",
  //   details:
  //     "This 741 sq. ft. sublime retreat offers a glimpse of the calming azure waters. You can relax indoors, too, from the comfort of your own media room, complete with a sound bar and 75\" HD TV. On the open balcony, you'll find the ultimate way to unwind: a Tranquility Soaking Tub framed with views of the rich environment.",
  //   icons: [
  //     <Bath />,
  //     <ChefHat />,
  //     <HandPlatter />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Wine />,
  //   ],
  //   price: "$495",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // {
  //   images: [
  //     { src: room_card_one_1, style: "object-cover w-full h-full" },
  //     { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title: "Bamboo Palm Club Swim-up Room with Patio Tranquility Soaking Tub",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: SUP | Room Views: Pool, Tropical Garden",
  //   details:
  //     "Located on the ground floor, this 580 sq. ft. relaxing retreat is a little piece of paradise. A light filled space with airy, coastal decor. Take a dip straight from your balcony in your own semi-private pool. Feel the ease wash over you while recharging in your own Tranquility Soaking Tub.",
  //   icons: [
  //     <Bath />,
  //     <Ship />,
  //     <HandPlatter />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Wine />,
  //   ],
  //   price: "$537",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // {
  //   images: [
  //     { src: room_card_one_1, style: "object-cover w-full h-full" },
  //     { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title:
  //     "Lady Palm Club Swim-up Suite with Media Room and Patio Tranquility Soaking Tub",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: 1SUP | Room Views: Pool, Tropical Garden",
  //   details:
  //     'Experience the serenity of St. Vincent from the comfort of your 741 sq. ft. suite. Recline in the chaise lounge beside the zero-entry swim-up pool and admire the exotic tropical gardens. Enjoy some time out in your own personal media room, equipped with a 75" LED TV and soundbar.',
  //   icons: [
  //     <Bath />,
  //     <Ship />,
  //     <ChefHat />,
  //     <HandPlatter />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Wine />,
  //   ],
  //   price: "$558",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // {
  //   images: [
  //     { src: room_card_one_1, style: "object-cover w-full h-full" },
  //     { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title: "Garden Butler Suite with Patio Tranquility Soaking Tub",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: VG | Room View: Tropical Garden",
  //   details:
  //     "Experience your vacation uninterrupted. Overlooking the beautiful tropical gardens, the interior of this 889 sq. ft. Butler Suite embraces the light and airy colors of the coast while the suns warmth beams in.",
  //   icons: [
  //     <Bath />,
  //     <Ship />,
  //     <HandPlatter />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Wine />,
  //   ],
  //   price: "$627",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // {
  //   images: [
  //     { src: room_card_one_1, style: "object-cover w-full h-full" },
  //     { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title: "One-Bedroom Garden Butler Suite with Patio Tranquility Soaking Tub",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: VF | Room View: Tropical Garden",
  //   details:
  //     "Breathtaking views of tropical gardens make this 745 sq. ft. Butler Suite the perfect secluded spot. This one-bedroom suite features a separate living room and a private patio with a Tranquility Soaking Tub ideal for unwinding outdoors.",
  //   icons: [
  //     <Bath />,
  //     <Ship />,
  //     <HandPlatter />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Wine />,
  //   ],
  //   price: "$635",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // {
  //   images: [
  //     { src: room_card_one_1, style: "object-cover w-full h-full" },
  //     { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title:
  //     "One-Bedroom Garden Butler Suite with Media Room and Patio Tranquility Soaking Tub",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: VH | Room View: Tropical Garden",
  //   details:
  //     "This 1,382 sq. ft. one-bedroom villa is surrounded by lush tropical foliage and offers ample indoor space plus an outdoor Tranquility Soaking Tub. The media room offers plush seating, a HD TV and sound bar for picture-perfect entertainment.",
  //   icons: [
  //     <Bath />,
  //     <ChefHat />,
  //     <Ship />,
  //     <HandPlatter />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Wine />,
  //   ],
  //   price: "$721",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // {
  //   images: [
  //     { src: room_card_one_1, style: "object-cover w-full h-full" },
  //     { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title: "Beachfront Butler Villa Suite with Private Pool",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: BVGP | Room Views: Beachfront, Oceanview, Tropical Garden",
  //   details:
  //     "Wake to the sound of waves and admire the soothing beach views from your patio. This magical 1,114 sq. ft. Butler Suite features a spacious patio complete with a Tranquility Soaking Tub, private pool, seating area, and lounge chairs.",
  //   icons: [
  //     <Ship />,
  //     <Bath />,
  //     <HandPlatter />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Wine />,
  //   ],
  //   price: "$860",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // {
  //   images: [
  //     { src: room_card_one_1, style: "object-cover w-full h-full" },
  //     { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title: "Beachfront One-Bedroom Butler Villa Suite with Private Pool",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: BVIP | Room Views: Beachfront, Oceanview, Tropical Garden",
  //   details:
  //     "Wake inside this 1,723 sq. ft. villa to the sound of lapping waves and feel the ocean breeze on your skin. Immerse yourself in your own private pool and enjoy the luxury of direct beach access, perfect to celebrate the sunset or the magic of night time star gazing. The in-room bar, comfortable amenities and tropical gardens make it easy to forget the world outside.",
  //   icons: [
  //     <Ship />,
  //     <Bath />,
  //     <HandPlatter />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Wine />,
  //   ],
  //   price: "$1,221",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // {
  //   images: [
  //     { src: room_card_one_1, style: "object-cover w-full h-full" },
  //     { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title:
  //     "Beachfront One-Bedroom Butler Villa Suite with Media Room and Private Pool",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: BVHP | Room Views: Beachfront, Oceanview, Tropical Garden",
  //   details:
  //     'Offering mesmerizing views of the horizon, this spectacular 1,407 sq. ft. Butler Villa is one of a kind. With direct access to the beach, your own private pool and a dedicated media room complete with a 75" HD TV and sound bar, you have the perfect set up for a movie night. Take a dip in your private pool or saunter over to the beach.',
  //   icons: [
  //     <Ship />,
  //     <Bath />,
  //     <ChefHat />,
  //     <HandPlatter />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Wine />,
  //   ],
  //   price: "$1,250",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // {
  //   images: [
  //     { src: room_card_one_1, style: "object-cover w-full h-full" },
  //     { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title: "Beachfront Two-Bedroom Butler Villa Suite with Private Pool",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: BVIP | Room Views: Beachfront, Oceanview, Tropical Garden",
  //   details:
  //     "Set in the most idyllic landscape, this spacious 1,631 sq. ft. villa is nestled in prime position. Your vacation will be truly unforgettable with luxuries such as your own private pool and outdoor Tranquility Soaking Tub to take in the cerulean views.",
  //   icons: [
  //     <Ship />,
  //     <Bath />,
  //     <HandPlatter />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Wine />,
  //   ],
  //   price: "$1,298",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // {
  //   images: [
  //     { src: room_card_one_1, style: "object-cover w-full h-full" },
  //     { src: room_card_one_2, style: "h-[150px] object-cover w-full" },
  //     { src: room_card_one_3, style: "h-[150px] object-cover w-full" },
  //   ],
  //   title: "Vincy Overwater Two-Story Villa",
  //   description:
  //     "Resort: Sandals Saint Vincent | Category Code: OWV | Room Views: Beachfront, Oceanfront, Oceanview",
  //   details:
  //     "These 1,248 sq. ft. two-story water villas are perfectly set within our magical private cove. With lush green rainforest to the rear and ocean views to the front, you can truly immerse yourself in the sights and sounds of the surf and wildlife. Relax on your day bed which hangs above water, or take your ocean gazing to the dedicated second floor deck. For a private retreat, these villas are nothin...",
  //   icons: [
  //     <Bath />,
  //     <Ship />,
  //     <HandPlatter />,
  //     <BusFront />,
  //     <Accessibility />,
  //     <Wine />,
  //   ],
  //   price: "$1,614",
  //   qualifications: [
  //     "Get Up to $1000 Instant Credit",
  //     "Service Personnel Discount",
  //     "Book Online & Get $100 Credit",
  //     "Get Up to 55% Off Rack Rate",
  //     "Last Minute Travel Deals",
  //   ],
  // },

  // Additional room objects can be added here
];
