import React from "react";
import Hero from "./Hero";
import SubNav from "./SubNav";
import RoomsAndSuites from "./RoomsAndSuites";
import { RoomFilterProvider } from './context/RoomFilterContext';

const SandalsSaintVincentHome = () => {
  return (
    <div className="bg-gray-100">
      <RoomFilterProvider>
        <Hero />
        <SubNav />
        <RoomsAndSuites />
      </RoomFilterProvider>
    </div>
  );
};

export default SandalsSaintVincentHome;
