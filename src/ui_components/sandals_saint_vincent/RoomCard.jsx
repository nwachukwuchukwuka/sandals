import room_img_1 from "../../assets/sandals_saint_vincent/room_img_1.avif";
import { FaHotTub, FaShuttleVan, FaWheelchair } from 'react-icons/fa';
import { MdLiquor } from 'react-icons/md';

const RoomCard = () => {
  return (
    <div className="flex  bg-white shadow-md mt-[20px] gap-2">
      <div className="w-[45%]">
        <img
          src={room_img_1}
          alt="Room"
          className="w-full h-[255px] object-cover"
        />
        <div className="flex space-x-4">
          {/* Bathtub / Hot Tub Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded">
            <FaHotTub size={24} className="text-black" />
          </div>

          {/* Shuttle / Bus Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded">
            <FaShuttleVan size={24} className="text-black" />
          </div>

          {/* Wheelchair Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded">
            <FaWheelchair size={24} className="text-black" />
          </div>

          {/* Bottle & Glass Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded">
            <MdLiquor size={24} className="text-black" />
          </div>
        </div>
      </div>
      <div className="p-[20px]">
        <h2 className="text-lg font-semibold text-gray-800">
          Bamboo Palm Room with Balcony Tranquility Soaking Tub
        </h2>

        <div className="">
          <p className="text-[13px]  text-gray-500 mb-4">
            Room Views: Pool, Tropical Garden
          </p>
        </div>

        {/* Qualifications */}
        <div className="mb-8">
          <p className="text-[13px] text-gray-800 mb-1">
            This room qualifies for:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Get Up to $1000 Instant Credit",
              "Service Personnel Discount",
              "Book Online & Get $100 Credit",
              "Get Up to 55% Off Rack Rate",
              "Last Minute Travel Deals",
            ].map((item) => (
              <div key={item} className="flex justify-center">
                <span className="inline-block w-[250px] p-2 text-gray-900 text-[13px] bg-gray-100 ">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Section */}
        <div className=" pt-4 flex justify-end">
          <p className="text-sm font-medium ">
            STARTING FROM <span className="text-[35px] font-bold">$404</span>
            <span className=" text-xl">PP/PN</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
