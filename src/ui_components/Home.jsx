import React from "react";
import Hero from "./Hero";
import ResortSelector from "./ResortSelector";
import CaribbeanSection from "./CaribbeanSection";
import CaribbeanExperience from "./CaribbeanExperience";
import SandalsVacationIncludes from "./SandalsVacationIncludes";
import LocationCarousel from "./LocationCarousel";
import SpecialsPromotion from "./SpecialsPromotion";
import FeaturedResorts from "./FeaturedResorts";
import WholeFamily from "./WholeFamily";
import AwardReviews from "./AwardReviews";
import SubFooter from "./SubFooter";

const Home = () => {
  return (
    <div>
      <Hero />
      <ResortSelector />
      <CaribbeanSection />
      <CaribbeanExperience />
      <SandalsVacationIncludes />
      <LocationCarousel />
      <div className="bg-gray-100">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 max-w-[90%]  md:max-w-[85%] mx-auto pb-[80px] md:pt-[100px]">
          <div className="w-full md:w-[350px]">
            <SpecialsPromotion />
          </div>
          <div className="w-full md:w-[350px]">
            <FeaturedResorts />
          </div>
          <div className="w-full md:w-[350px]">
            <WholeFamily />
          </div>
        </div>
      </div>

      <AwardReviews />
      <SubFooter />
    </div>
  );
};

export default Home;
