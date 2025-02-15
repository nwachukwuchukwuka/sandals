// import award from "../assets/award.webp";
// import award_logo_1 from "../assets/award_logo_1.svg";
// import award_logo_2 from "../assets/award_logo_2.png";
// import award_logo_3 from "../assets/award_logo_3.svg";
// import award_logo_4 from "../assets/award_logo_4.avif";
// import award_logo_5 from "../assets/award_logo_5.avif";


// const awardsData = [
//   {
//     logo: award_logo_1,
//     background: award,
//     title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
//     subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
//   },
//   {
//     logo: award_logo_2,
//     background: award,
//     title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
//     subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
//   },
//   {
//     logo: award_logo_3,
//     background: award,
//     title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
//     subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
//   }, 
//   {
//     logo: award_logo_4,
//     background: award,
//     title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
//     subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
//   },
//   {
//     logo: award_logo_5,
//     background: award,
//     title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
//     subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
//   } 
// ];

// const Awards = () => {
//   return (
//     <div className="py-[100px] flex gap-[100px]">
//       {awardsData.map((awardItem, index) => (
//         <div key={index} className="w-[400px]">
//           <div className="flex justify-center items-end -mb-4 mr-6 ">
//             <img src={awardItem.logo} alt="award_logo_1" className="w-[100px] h-[100px]" />
//           </div>
//           <div
//             style={{
//               backgroundImage: `url(${awardItem.background})`,
//               backgroundSize: "contain",
//               backgroundRepeat: "no-repeat",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               width: "400px",
//             }}
//           >
//             <div className="text-center p-[20px] mr-6">
//               {awardItem.title.map((line, i) => (
//                 <h1 key={i}>{line}</h1>
//               ))}
//               <p className="text-[11px]">{awardItem.subtitle}</p>                                                                    
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Awards;


import { useState } from "react";
import award from "../assets/award.webp";
import award_logo_1 from "../assets/award_logo_1.svg";
import award_logo_2 from "../assets/award_logo_2.png";
import award_logo_3 from "../assets/award_logo_3.svg";
import award_logo_4 from "../assets/award_logo_4.avif";
import award_logo_5 from "../assets/award_logo_5.avif";
import { ChevronLeft, ChevronRight } from "lucide-react";

const awardsData = [
  {
    logo: award_logo_1,
    background: award,
    title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
    subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
  },
  {
    logo: award_logo_2,
    background: award,
    title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
    subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
  },
  {
    logo: award_logo_3,
    background: award,
    title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
    subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
  }, 
  {
    logo: award_logo_4,
    background: award,
    title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
    subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
  },
  {
    logo: award_logo_5,
    background: award,
    title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
    subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
  } 
];

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalItems = awardsData.length;
  const windowSize = 3; // Show 3 dots at a time
  const slideWidth = 400; // Match your card width
  const gap = 100; // Match your gap size

  // Calculate visible dots window
  const start = Math.max(0, Math.min(currentIndex - 1, totalItems - windowSize));
  const visibleDots = Array.from({ length: Math.min(windowSize, totalItems) }, (_, i) => start + i);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-[100px] relative overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/50 rounded-full hover:bg-white/80"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/50 rounded-full hover:bg-white/80"
      >
        <ChevronRight size={32} />
      </button>

      {/* Carousel Items */}
      <div 
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(calc(-${currentIndex * (slideWidth + gap)}px + 50%))`,
          gap: `${gap}px`,
        }}
      >
        {awardsData.map((awardItem, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-[400px] transition-opacity duration-300 ${
              currentIndex === index ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <div className="relative">
              <div className="flex justify-center items-end -mb-4 mr-6">
                <img src={awardItem.logo} alt="award logo" className="w-[100px] h-[100px]" />
              </div>
              <div
                className="bg-contain bg-no-repeat flex items-center justify-center w-[400px] h-[400px]"
                style={{ backgroundImage: `url(${awardItem.background})` }}
              >
                <div className="text-center p-[20px] mr-6">
                  {awardItem.title.map((line, i) => (
                    <h1 key={i} className="text-lg font-bold mb-2">{line}</h1>
                  ))}
                  <p className="text-[11px] mt-4">{awardItem.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-8 gap-2">
        {visibleDots.map((dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => handleDotClick(dotIndex)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === dotIndex ? 'bg-black' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Awards;

