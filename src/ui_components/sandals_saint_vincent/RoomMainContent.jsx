import React, { useState, useCallback } from "react";
import RoomMainContentHeader from "./RoomMainContentHeader";
import RoomCardOne from "./RoomCardOne";
import RoomCardTwo from "./RoomCardTwo";
import MobileRoomCard from "./MobileRoomCard";
const RoomMainContent = ({ 
  activeView, 
  setActiveView, 
  selectedCategory, 
  setSelectedCategory 
}) => {
  const [roomCounts, setRoomCounts] = useState({
    totalRooms: 0,
    filteredRooms: 0
  });
  const [sortOrder, setSortOrder] = useState('low-to-high');

  const handleRoomCountsChange = useCallback((counts) => {
    setRoomCounts(counts);
  }, []);

  const handleSortChange = (value) => {
    setSortOrder(value);
  };

  return (
    <div className="space-y-4">
      <RoomMainContentHeader 
        activeView={activeView} 
        setActiveView={setActiveView}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        totalRooms={roomCounts.totalRooms}
        filteredRooms={roomCounts.filteredRooms}
        onSortChange={handleSortChange}
        sortOrder={sortOrder}
      />
      <MobileRoomCard 
        sortOrder={sortOrder}
      />

      {activeView === "card" ? (
        <RoomCardTwo 
          selectedCategory={selectedCategory} 
          onRoomCountsChange={handleRoomCountsChange}
          sortOrder={sortOrder}
        />
      ) : (
        <RoomCardOne 
          selectedCategory={selectedCategory} 
          onRoomCountsChange={handleRoomCountsChange}
          sortOrder={sortOrder}
        />
      )}

      
    </div>
  );
};

export default RoomMainContent;
