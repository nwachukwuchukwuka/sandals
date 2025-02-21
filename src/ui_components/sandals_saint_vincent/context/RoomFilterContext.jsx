import React, { createContext, useContext, useState, useEffect } from 'react';
import { roomDetails } from '../constants/roomDetails';
import { rooms } from '../constants/rooms';

const RoomFilterContext = createContext();

// Define disabled checkboxes for each category
const disabledCheckboxes = {
  "Butler Elite": [
    "Pool",
    "Partial Oceanview",
    "Swim-up Suite",
    "Balcony",
    "Wheelchair Accessible",
    "In-Room Bar w/Liquor",
  ],
  "Club Sandals": [
    "Beachfront",
    "Oceanview",
    "Oceanfront",
    "Walkout Suite",
    "One-Bedroom Suite",
    "Private Pool Suite",
    "Villa Suite",
    "Over-The-Water Villa",
    "Two Story Suite",
    "In-Room Bar w/ Premium Liquor",
    "Private Pool",
  ],
  "Sandals Luxury": [
    "Beachfront",
    "Oceanview",
    "Oceanfront",
    "Swim-up Suite",
    "Walkout Suite",
    "One-Bedroom Suite",
    "Private Pool Suite",
    "Villa Suite",
    "Over-The-Water Villa",
    "Two Story Suite",
    "In-Room Bar w/Liquor",
    "Room Service",
    "Patio",
    "In-Room Bar w/ Premium Liquor",
    "Private Pool",
  ],
};

export const RoomFilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [checkedFilters, setCheckedFilters] = useState({
    roomViews: [],
    roomTypes: [],
    roomFeatures: [],
    roomSpecials: []
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCheckedFilters({
      roomViews: [],
      roomTypes: [],
      roomFeatures: [],
      roomSpecials: []
    });
  };

  // Effect to clear incompatible filters when category changes
  useEffect(() => {
    if (selectedCategory) {
      const disabledForCategory = disabledCheckboxes[selectedCategory] || [];
      
      setCheckedFilters(prev => {
        const newFilters = { ...prev };
        Object.keys(newFilters).forEach(group => {
          newFilters[group] = newFilters[group].filter(
            filter => !disabledForCategory.includes(filter)
          );
        });
        return newFilters;
      });
    }
  }, [selectedCategory]);

  const isFilterDisabled = (filter) => {
    if (!selectedCategory) return false;
    return disabledCheckboxes[selectedCategory]?.includes(filter) || false;
  };

  const toggleFilter = (group, value) => {
    if (isFilterDisabled(value)) return;
    setCheckedFilters(prev => ({
      ...prev,
      [group]: prev[group].includes(value)
        ? prev[group].filter(item => item !== value)
        : [...prev[group], value]
    }));
  };

  const clearGroupFilters = (group) => {
    setCheckedFilters(prev => ({
      ...prev,
      [group]: []
    }));
  };

  const removeFilter = (group, value) => {
    setCheckedFilters(prev => ({
      ...prev,
      [group]: prev[group].filter(item => item !== value)
    }));
  };

  const hasGroupFilters = (group) => {
    return checkedFilters[group].length > 0;
  };

  // Updated to handle both arrays
  const getFilteredRooms = (arrayType = 'roomDetails') => {
    const sourceArray = arrayType === 'roomDetails' ? roomDetails : rooms;
    let filtered = [...sourceArray];

    // Filter by category if selected
    if (selectedCategory) {
      const searchWord = selectedCategory.split(" ")[0].toLowerCase();
      filtered = filtered.filter(room => {
        const titleLower = room.title.toLowerCase();
        const descriptionLower = room.description.toLowerCase();
        return titleLower.includes(searchWord) || descriptionLower.includes(searchWord);
      });
    }

    // Apply additional filters
    Object.entries(checkedFilters).forEach(([group, filters]) => {
      if (filters.length > 0) {
        filtered = filtered.filter(room => {
          return filters.every(filter => {
            const searchTerm = filter.toLowerCase();
            const descriptionLower = room.description.toLowerCase();
            return descriptionLower.includes(searchTerm);
          });
        });
      }
    });

    return filtered;
  };

  return (
    <RoomFilterContext.Provider value={{
      selectedCategory,
      setSelectedCategory: handleCategoryChange,
      checkedFilters,
      toggleFilter,
      clearGroupFilters,
      removeFilter,
      hasGroupFilters,
      isFilterDisabled,
      getFilteredRooms
    }}>
      {children}
    </RoomFilterContext.Provider>
  );
};

export const useRoomFilter = () => {
  const context = useContext(RoomFilterContext);
  if (!context) {
    throw new Error('useRoomFilter must be used within a RoomFilterProvider');
  }
  return context;
};
