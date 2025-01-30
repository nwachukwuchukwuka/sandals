import world_leading_logo from '../assets/world_leading_logo.svg'
const CaribbeanSection = () => {
  return (
    <div className="bg-gray-100 py-6 md:py-12 pt-[260px] pb-[200px] md:pb-[300px] md:pt-[300px] -mt-[200px]">
      <div className="max-w-[85%] mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-3/4 md:border-r pr-6  border-gray-400">
          <h2 className="text-lg md:text-3xl font-bold mb-4">FIND YOUR CARIBBEAN HERE</h2>
          <p className="text-gray-900 leading-relaxed md:mb-4 text-[14px]">
            No other place in the world captures the imagination more than the Caribbean. People
            call it paradise. We call it home. Our <span className="font-semibold">all-inclusive resorts</span> are set along the
            most gorgeous tropical settings and exquisite beaches in <span className="font-semibold">Saint Lucia, Jamaica, Antigua,
            The Bahamas, Grenada, Barbados, Curaçao</span> and <span className="font-semibold">Saint Vincent</span>.
          </p>
          <p className="text-gray-900 mb-4 text-[14px]">
            Stay, play, and indulge to your heart’s content at any of our Caribbean resorts and
            experience the best the islands have to offer – featuring unlimited specialty
            restaurants, unique bars serving premium liquors and wines, and every land and water
            sport, including complimentary green fees at our golf resorts and PADI<sup>®</sup>
            certified scuba diving. If you are planning a wedding, Sandals is the leader in Caribbean
            <span className="font-semibold"> destination weddings</span> and <span className="font-semibold">honeymoon packages</span>.
          </p>
        </div>
        {/* Award Section */}
        <div className="mt-8 md:mt-0 md:ml-8 flex justify-center md:w-1/4">
          <div className="text-center">
            <img
              src={world_leading_logo}
              alt="World Travel Award Logo"
              className="mx-auto mb-4"
            />
            <p className="text-gray-900 font-semibold">WORLD'S LEADING<br />ALL-INCLUSIVE COMPANY<br />FOR 27 YEARS IN-A-ROW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaribbeanSection;
