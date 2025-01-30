import { sandals_vacation_images } from "@/constants/constants";

const SandalsVacationIncludes = () => {
  return (
    <div className="p-6 pb-[80px] bg-white">
      {/* Heading and Description */}
      <div className="md:max-w-[56%] mx-auto text-center text-sm mt-8">
        <h1 className="text-[18px] md:text-[30px] font-semibold mb-4 md:mb-6 uppercase">
          Every Sandals Vacation Includes
        </h1>
        <p className="text-gray-900 text-[15px]">
          Enjoy all-inclusive luxury vacations at Sandals Caribbean resorts and see for yourself why we offer the most romantic getaways with more quality inclusions than any other luxury beach resort. With gorgeous white-sand beaches, savory dining experiences, opulent accommodations, unlimited refreshing beverages, exciting water sports and more, it’s no wonder why so many choose Sandals as their tropical escape.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="flex md:flex-wrap justify-center md:max-w-[70%] mx-auto mt-6 gap-4 overflow-x-auto md:overflow-x-visible scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {sandals_vacation_images.map((item, index) => (
          <div key={index} className="w-[90px] md:w-[120px] flex-shrink-0">
            <img src={item.image} alt={item.content} className="w-full h-auto" />
            <p className="text-[12px] md:text-[13px] text-center pb-4">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-6">
        <button className="px-9 py-1 bg-black text-white text-[12px] font-semibold">
          VIEW ALL INCLUSIONS
        </button>
      </div>
    </div>
  );
};

export default SandalsVacationIncludes;