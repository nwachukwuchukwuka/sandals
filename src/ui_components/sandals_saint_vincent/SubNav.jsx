import React from "react";

const SubNav = () => {
  return (
    <div className="bg-white shadow-lg">
      <div className="max-w-[85%] mx-auto flex justify-between items-center p-4">
        <div>
          <div className="font-bold">SANDALS SAINT VINCENT</div>
          <div className="text-sm text-gray-500">AND THE GRENADINES</div>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="font-bold">
            OVERVIEW
          </a>
          <a href="#" className="font-bold text-blue-500">
            ROOMS
          </a>
          <a href="#" className="font-bold">
            DINING
          </a>
          <a href="#" className="font-bold">
            ACTIVITIES
          </a>
          <a href="#" className="font-bold">
            PHOTOS
          </a>
          <a href="#" className="font-bold">
            MAP
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
