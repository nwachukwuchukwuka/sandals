import Hero from "./ui_components/Hero";
import Navbar from "./ui_components/Navbar";
import ResortSelector from "./ui_components/ResortSelector";
import DateRangePicker from "./ui_components/DateRangePicker";
import CaribbeanSection from "./ui_components/CaribbeanSection";
import CaribbeanExperience from "./ui_components/CaribbeanExperience";
import SandalsVacationIncludes from "./ui_components/SandalsVacationIncludes";
import LocationCarousel from "./ui_components/LocationCarousel";
import SpecialsPromotion from "./ui_components/SpecialsPromotion";
import FeaturedResorts from "./ui_components/FeaturedResorts";
import WholeFamily from "./ui_components/WholeFamily";
import AwardsReviews from "./ui_components/AwardReviews";
import SubFooter from "./ui_components/SubFooter";
import Prac from "./ui_components/Prac";
import Footer from "./ui_components/Footer";

const App = () => {
  return (
  
    <div className="bg-gray-">
    
      <Navbar />
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

      <AwardsReviews />
      <SubFooter />
      <Footer />
      {/* <DateRangePicker />
      {/* <MyCarousel */}
    </div>
  );
};

export default App;
