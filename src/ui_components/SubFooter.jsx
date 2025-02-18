import React from "react";
import ResortSelector from "./ResortSelector";

const SubFooter = () => {
  return (
    <div className="bg-gray-100 py-[60px] md:py-[90px] ">
      <div className="mb-[60px]  text-center">
        <h1 className="font-bold text-[35px]">Sandals</h1>
        <p className="text-gray-700 tracking-widest">
          GET CLOSER IN THE CARIBBEAN
        </p>
      </div>

      <ResortSelector />
    </div>
  );
};

export default SubFooter;
