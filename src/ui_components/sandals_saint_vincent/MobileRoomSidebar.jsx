import React, { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import RoomSidebar from "./RoomSidebar";

const MobileRoomSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Filter Button - Only visible on small/medium screens */}
      <div className="lg:hidden flex justify-center items-center mb-6">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-sm"
        >
          <IoFilterSharp className="text-gray-600" size={20} />
          <span className="text-gray-600 font-medium">Filter Rooms</span>
        </button>
      </div>



      {/* Overlay - darkens the background when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 overflow-y-auto transition-transform duration-300 ease-in-out transform 
          w-[90%] md:w-[50%] lg:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex justify-between items-center">
          <h2 className="font-bold text-lg">Filters</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <IoMdClose size={24} />
          </button>
        </div>


        {/* Sidebar Content */}
        <div className="p-4">
          <RoomSidebar />
        </div>
      </div>
    </>
  );
};

export default MobileRoomSidebar;
