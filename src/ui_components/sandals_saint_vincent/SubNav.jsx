import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const SubNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "OVERVIEW", href: "#" },
    { label: "ROOMS", href: "#", isActive: true },
    { label: "DINING", href: "#" },
    { label: "ACTIVITIES", href: "#" },
    { label: "PHOTOS", href: "#" },
    { label: "MAP", href: "#" },
  ];

  return (
    <div className="bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
      <div className="md:max-w-[85%] mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center p-4 px-0">
          <div>
            <div className="font-bold text-[18px]">
              SANDALS SAINT VINCENT
            </div>
            <div className="text-sm text-gray-500">AND THE GRENADINES</div>
          </div>
          <div className="flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-bold ${
                  item.isActive ? "text-blue-500" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center p-4">
            <div>
              <div className="font-bold text-[13px]">SANDALS SAINT VINCENT</div>
              <div className="text-[11px] text-gray-500">AND THE GRENADINES</div>
            </div>
            <div className="flex items-center">
              {!isMenuOpen && (
                <div className="h-6 w-[1px] bg-gray-300 mx-3"></div>
              )}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2"
              >
                <span className="font-bold text-[13px]">MENU</span>
                <div className="relative w-5 h-5">
                  <IoIosArrowDown 
                    className={`absolute inset-0 transform transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                    }`}
                    size={20} 
                  />
                  <IoMdClose 
                    className={`absolute inset-0 transform transition-all duration-300 ${
                      isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                    }`}
                    size={20} 
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`text-center overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-[400px]" : "max-h-0"
            }`}
          >
            {menuItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <a
                  href={item.href}
                  className={`block px-4 py-3 font-bold ${
                    item.isActive ? "text-blue-500" : ""
                  }`}
                >
                  {item.label}
                </a>
                {index < menuItems.length - 1 && (
                  <div className="h-[1px] bg-gray-200"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
