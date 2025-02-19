import React, { useState } from "react";
import RoomSidebar from "./RoomSidebar";
import RoomMainContent from "./RoomMainContent";

const RoomsAndSuites = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeView, setActiveView] = useState("cardOne");

  return (
    <div className="py-8">
      <div className="max-w-[85%] mx-auto">
        <h1 className="text-[55px] font-light">ROOMS & SUITES</h1>
        <p className="text-sm font-semibold text-gray-600 mt-2 tracking-[4px]">
          LIMITED TIME: BOOK ONLINE TODAY & GET $100 CREDIT OFF
        </p>
      </div>

      <div className="flex max-w-[85%] mx-auto pt-[90px] gap-7">
        <RoomSidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
        <div className="flex-1">
          <RoomMainContent 
            activeView={activeView} 
            setActiveView={setActiveView}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomsAndSuites;
