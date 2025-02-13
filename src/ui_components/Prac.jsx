import React, { useState } from 'react';

const Prac = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Menu Item 1', href: '#' },
    { label: 'Menu Item 2', href: '#' },
    { label: 'Menu Item 3', href: '#' },
    { label: 'Menu Item 4', href: '#' },
    { label: 'Menu Item 5', href: '#' },
  ];

  return (
    <div className="relative">
      {/* Dropdown Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Open Menu
        <span className="ml-2">▼</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-[300px] h-[500px] bg-white border border-gray-200 rounded-md shadow-lg overflow-y-auto">
          {/* Menu Header */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-lg font-medium">Dropdown Menu</h3>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="px-4 py-3 border-t border-gray-200 mt-auto">
            <p className="text-sm text-gray-500">Footer content here</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prac;