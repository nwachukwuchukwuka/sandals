import Hero from "./ui_components/Hero"
import Navbar from "./ui_components/Navbar"
import ResortSelector from "./ui_components/ResortSelector"
import DateRangePicker from "./ui_components/DateRangePicker"
import CaribbeanSection from "./ui_components/CaribbeanSection"
import CaribbeanExperience from "./ui_components/CaribbeanExperience"
import SandalsVacationIncludes from "./ui_components/SandalsVacationIncludes"
import LocationCarousel from "./ui_components/LocationCarousel"
import SpecialsPromotion from "./ui_components/SpecialsPromotion"
import FeaturedResorts from "./ui_components/FeaturedResorts"
import WholeFamily from "./ui_components/WholeFamily"
import AwardsReviews from "./ui_components/AwardReviews"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ResortSelector />
      <CaribbeanSection />
      <CaribbeanExperience />
      <SandalsVacationIncludes />
      <LocationCarousel />
      <div className="flex gap-5 max-w-[75%] mx-auto mb-[100px] mt-[150px]">
        <SpecialsPromotion />
        <FeaturedResorts />
        <WholeFamily />
      </div>
      <AwardsReviews />
      {/* <DateRangePicker /> */}

    </div>
  )
}

export default App