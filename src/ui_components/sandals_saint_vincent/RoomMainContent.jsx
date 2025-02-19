import React from "react";
import RoomMainContentHeader from "../RoomMainContentHeader";
import RoomCardOne from "./RoomCardOne";
import RoomCardTwo from "./RoomCardTwo";

const RoomMainContent = ({ 
  activeView, 
  setActiveView, 
  selectedCategory, 
  setSelectedCategory 
}) => {
  return (
    <div className="space-y-4">
      <RoomMainContentHeader 
        activeView={activeView} 
        setActiveView={setActiveView}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {activeView === "card" ? (
        <RoomCardTwo selectedCategory={selectedCategory} />
      ) : (
        <RoomCardOne selectedCategory={selectedCategory} />
      )}
    </div>
  );
};

export default RoomMainContent;
