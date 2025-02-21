import React, { useState } from "react";
import RoomSidebar from "./RoomSidebar";
import RoomMainContent from "./RoomMainContent";
import MobileRoomSidebar from "./MobileRoomSidebar";

const RoomsAndSuites = () => {
  const [activeView, setActiveView] = useState("cardOne");

  return (
    <div className="py-8">
      <div className="max-w-[85%] mx-auto">
        <div className="mb-[20px] md:mb-[90px] md:mt-8 text-center md:text-left">
          <h1 className="text-[35px] md:text-[55px] font-light">ROOMS & SUITES</h1>
          <p className="text-[11px] md:text-sm font-semibold text-gray-600 mt-2 tracking-widest md:tracking-[4px]">
            <span className="block md:inline">LIMITED TIME:</span> BOOK ONLINE TODAY & GET $100 CREDIT OFF
          </p>
        </div>

        {/* Mobile Filter */}
        <MobileRoomSidebar />

        <div className="flex gap-8">
          {/* Desktop Sidebar - hidden on small/medium screens */}
          <div className="hidden lg:block w-[300px] flex-shrink-0">
            <RoomSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <RoomMainContent
              activeView={activeView}
              setActiveView={setActiveView}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsAndSuites;
