// import { useState } from "react";
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

// const Prac = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const goToNext = () => {
//     setCurrentSlide((prev) =>
//       prev === awardsData.length - 1 ? 0 : prev + 1
//     );
//   };

//   const goToPrevious = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? awardsData.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="py-[100px] relative overflow-hidden max-w-[85%] mx-auto">
//       <div
//         className="flex transition-transform duration-300 ease-in-out gap-[80px]"
//         style={{ transform: `translateX(-${currentSlide * 400}px)` }}
//       >
//         {awardsData.map((awardItem, index) => (
//           <div key={index} className="w-[330px] flex-shrink-0">
//             <div className="flex justify-center items-end -mb-4 ">
//               <img
//                 src={awardItem.logo}
//                 alt="award logo"
//                 className="w-[100px] h-[100px]"
//               />
//             </div>
//             <div
//               className="w-[330px] bg-contain bg-no-repeat flex items-center justify-center"
//               style={{ backgroundImage: `url(${awardItem.background})` }}
//             >
//               <div className="text-center p-[20px] mr-6">
//                 {awardItem.title.map((line, i) => (
//                   <h1 key={i} className="text-white">{line}</h1>
//                 ))}
//                 <p className="text-[11px] text-white">{awardItem.subtitle}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={goToPrevious}
//         className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
//       >
//         ←
//       </button>
//       <button
//         onClick={goToNext}
//         className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
//       >
//         →
//       </button>
//     </div>
//   );
// };

// export default Prac;

// import React, { useState } from "react";
// import { CiCalendar } from "react-icons/ci";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { DateRange } from "react-date-range";

// const Prac = () => {
//   const [isShowDateRange, setIsShowDateRange] = useState(false);
//   const [state, setState] = useState([
//     {
//       startDate: new Date("2024-01-05"),
//       endDate: new Date("2024-01-20"),
//       key: "selection",
//     },
//   ]);

//   return (
//     <div className="flex items-center justify-center h-full mt-10">
//       <div className="">
//         <h3></h3>
//         <button
//           onClick={() => setIsShowDateRange(!isShowDateRange)}
//           className="flex items-center gap-x-1 text-sm rounded-lg border px-4 py-2 bg-[#7F56D9] text-white"
//         >
//           <CiCalendar className="text-lg" />
//           <span className="font-medium">Select Date</span>
//         </button>
//         {isShowDateRange && (
//           <div className="">
//             <DateRange
//             editableDateInputs={true}
//             onChange={(item) => setState([item.selection])}
//             moveRangeOnFirstSelection={false}
//             ranges={state}
//             showSelectionPreview={false}
//             showDateDisplay={false}
//             month={2}
//             direction="horizontal"
//             rangeColors={["#7F56D9"]}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Prac;

// date range picker

// import React, { useState } from 'react';
// import { addDays } from 'date-fns';
// import { DateRangePicker } from 'react-date-range';

// // Import the necessary CSS for the date range picker
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file

// const Prac = () => {
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 7),
//       key: 'selection'
//     }
//   ]);

//   return (
//     <div className="date-range-picker">
//     <DateRangePicker
//       onChange={item => setState([item.selection])}
//       showSelectionPreview={true}
//       moveRangeOnFirstSelection={false}
//       months={2}
//       ranges={state}
//       direction="horizontal"
//     />
//   </div>
//   );
// };

// export default Prac;

"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const Prac = () => {
  const [date, setDate] = useState({
    from: undefined,
    to: undefined,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleClear = () => {
    setDate({ from: undefined, to: undefined });
  };

  const handleApply = () => {
    setIsOpen(false);
  };

  return (
    <div className="grid gap-2">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className="w-[300px] justify-start text-left font-normal"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Check-in & Check-out</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 flex flex-col gap-4" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={new Date()}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
          <div className="flex justify-end gap-2 px-4 pb-4">
            <Button 
              variant="secondary" 
              onClick={handleClear}
              disabled={!date?.from}
            >
              Clear
            </Button>
            <Button 
              variant="default" 
              onClick={handleApply}
              disabled={!date?.from || !date?.to}
            >
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Prac;