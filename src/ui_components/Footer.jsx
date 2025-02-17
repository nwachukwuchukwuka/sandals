import { useState } from "react";
import {
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { GiThreeLeaves } from "react-icons/gi";
import logo from "../assets/logo.svg";
import { footerLinks } from "../constants/constants";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <footer className="bg-black text-white pt-[20px]">
      {/* desktop view */}
      <div className="hidden md:block max-w-[85%] mx-auto">
        {/* Top Navigation */}
        <div className="flex justify-between items-center px-4 md:px-0 py-4 border-b border-gray-500">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Sandals Select Members" className="w-[20%]" />
            <span className="text-[13px] font-semibold">
              SANDALS SELECT MEMBERS
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[13px] font-semibold">
              SANDALS SELECT MEMBERS
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[13px] font-semibold">
              SANDALS SELECT MEMBERS
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[13px] font-semibold">
              SANDALS SELECT MEMBERS
            </span>
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center py-8 border-b border-gray-500">
          <img src={logo} alt="Sandals Logo" className="mx-auto w-40 mb-8" />
          <div className="max-w-md mx-auto flex items-center justify-center mt-4 cursor-pointer">
            <input
              type="email"
              placeholder="Sign up to get the latest news & deals"
              className="w-[60%] p-3 rounded-l-md text-sm focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-[11px] rounded-r-md flex items-center justify-center">
              <IoIosArrowForward size={22} />
            </button>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 md:px-10 py-8 text-sm text-gray-300">
          {footerLinks.map((group, idx) => (
            <div key={idx}>
              <h4 className="mb-2 text-white">{group.title}</h4>
              <ul>
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-y border-gray-500 flex justify-between px-[200px] py-4">
          <h1 className="uppercase">Ayuda en español</h1>
          <h1 className="uppercase">Europe +44 207 581 9895</h1>
          <h1 className="uppercase">Worldwide Information</h1>
        </div>

        {/* Phone Number Section */}
        <div className="text-center py-8">
          <h2 className="text-4xl font-light">1-888-SANDALS</h2>
          <p className="text-sm mt-2 text-gray-300">
            888-726-3257 • FROM 7AM TO 12AM EST
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="border border-gray-700 rounded-full p-2">
              <FaFacebookF />
            </a>
            <a href="#" className="border border-gray-700 rounded-full p-2">
              <FaXTwitter />
            </a>
            <a href="#" className="border border-gray-700 rounded-full p-2">
              <FiInstagram />
            </a>
            <a href="#" className="border border-gray-700 rounded-full p-2">
              <GiThreeLeaves />
            </a>
          </div>

          {/* Part of Our Family Section */}
          <div className="mt-12 text-gray-300">
            <h3 className="text-sm mb-6">PART OF OUR FAMILY</h3>
            <div className="flex justify-center items-center gap-12">
              <div className="text-center">
                <img src={logo} alt="Beaches" className="h-8 mx-auto" />
                <p className="text-xs mt-2">Beaches Resorts By Sandals</p>
              </div>
              <div className="text-center">
                <img src={logo} alt="Fowl Cay Resort" className="h-8 mx-auto" />
                <p className="text-xs mt-2">Fowl Cay Resort</p>
              </div>
              <div className="text-center">
                <img src={logo} alt="Private Villas" className="h-8 mx-auto" />
                <p className="text-xs mt-2">Private Villas</p>
              </div>
              <div className="text-center">
                <img
                  src={logo}
                  alt="Sandals Foundation"
                  className="h-8 mx-auto"
                />
                <p className="text-xs mt-2">Sandals Foundation</p>
              </div>
            </div>
          </div>

          {/* Final Footer Links */}
          <div className="flex justify-center gap-4 mt-12 text-sm">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Cookies & Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Your Privacy Choices
            </a>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="block md:hidden max-w-[85%] mx-auto">
        {/* Middle Section */}
        <div className="text-center py-8 border-b border-gray-500">
          <img src={logo} alt="Sandals Logo" className="mx-auto w-40 mb-8" />
          <div className="max-w-md mx-auto flex items-center justify-center mt-4 cursor-pointer">
            <input
              type="email"
              placeholder="Sign up to get the latest news & deals"
              className="w-[60%] p-3 rounded-l-md text-sm focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-[11px] rounded-r-md flex items-center justify-center">
              <IoIosArrowForward size={22} />
            </button>
          </div>
        </div>

        {/* Footer Links Dropdown Section */}
        <div className="pt-6 pb-4">
          {footerLinks.map((group, idx) => (
            <div key={idx} className="mb-4  pb-2">
              <button
                onClick={() => toggleDropdown(idx)}
                className="w-full flex justify-center items-center text-left text-white text-sm font-semibold"
              >
                {group.title}
                {openDropdown === idx ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openDropdown === idx
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="pl-4 py-2 space-y-2 text-gray-300 text-center text-sm">
                  {group.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="hover:underline block py-1"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="border-y border-gray-500 flex flex-col md:flex-row justify-between items-center px-4 md:px-[200px] py-4 space-y-6 md:space-y-0">
          <h1 className="uppercase">Ayuda en español</h1>
          <h1 className="uppercase">Europe +44 207 581 9895</h1>
          <h1 className="uppercase">Worldwide Information</h1>
        </div>

        {/* Phone Number Section */}
        <div className="text-center py-8">
          <h2 className="text-4xl font-light">1-888-SANDALS</h2>
          <p className="text-sm mt-2 text-gray-300">
            888-726-3257 • FROM 7AM TO 12AM EST
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="border border-gray-700 rounded-full p-2">
              <FaFacebookF />
            </a>
            <a href="#" className="border border-gray-700 rounded-full p-2">
              <FaXTwitter />
            </a>
            <a href="#" className="border border-gray-700 rounded-full p-2">
              <FiInstagram />
            </a>
            <a href="#" className="border border-gray-700 rounded-full p-2">
              <GiThreeLeaves />
            </a>
          </div>

          {/* Part of Our Family Section */}
          <div className="mt-12 text-gray-300 max-w-[70%] mx-auto">
            <h3 className="text-sm mb-6">PART OF OUR FAMILY</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
              <div className="text-center">
                <img src={logo} alt="Beaches" className="h-6 md:h-8 mx-auto" />
                <p className="text-xs mt-2">Beaches Resorts By Sandals</p>
              </div>
              <div className="text-center">
                <img
                  src={logo}
                  alt="Fowl Cay Resort"
                  className="h-6 md:h-8 mx-auto"
                />
                <p className="text-xs mt-2">Fowl Cay Resort</p>
              </div>
              <div className="text-center">
                <img
                  src={logo}
                  alt="Private Villas"
                  className="h-6 md:h-8 mx-auto"
                />
                <p className="text-xs mt-2">Private Villas</p>
              </div>
              <div className="text-center">
                <img
                  src={logo}
                  alt="Sandals Foundation"
                  className="h-6 md:h-8 mx-auto"
                />
                <p className="text-xs mt-2">Sandals Foundation</p>
              </div>
            </div>
          </div>

          {/* Final Footer Links */}
          <div className="flex justify-center flex-wrap gap-4 mt-12 text-[12px] md:text-sm">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Cookies & Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Your Privacy Choices
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
