import RoomSidebar from "./RoomSidebar";
import RoomMainContent from "./RoomMainContent";

const RoomsAndSuites = () => {
  return (
    <div className=" py-8">
      <div className="max-w-[85%] mx-auto">
        <h1 className="text-[55px] font-light">ROOMS & SUITES</h1>
        <p className="text-sm font-semibold text-gray-600 mt-2 tracking-[4px]">
          LIMITED TIME: BOOK ONLINE TODAY & GET $100 CREDIT OFF
        </p>
      </div>

      <div className="flex max-w-[85%] mx-auto pt-[90px] gap-7">
        <RoomSidebar />
        <div className="flex-1">
          <RoomMainContent />
        </div>
      </div>
    </div>
  );
};

export default RoomsAndSuites;
