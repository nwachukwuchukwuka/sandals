import React from "react";
import Hero from "./Hero";
import SubNav from "./SubNav";
import RoomsAndSuites from "./RoomsAndSuites";
const Home = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <SubNav />
      <RoomsAndSuites />
    </div>
  );
};

export default Home;
