import logo from "../assets/logo.svg";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { GiThreeLeaves } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-[20px]">
      <div className="max-w-[85%] mx-auto">
        {/* Top Navigation */}
        <div className="flex justify-between items-center px-4 md:px-0 py-4 border-b border-gray-500">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Sandals Select Members" className="w-[20%]" />
            <span className="text-[13px] font-semibold">
              SANDALS SELECT MEMBERS
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {/* <img src={logo} alt="Sandals Select Members" className="w-[20%]" /> */}
            <span className="text-[13px] font-semibold">
              SANDALS SELECT MEMBERS
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {/* <img src={logo} alt="Sandals Select Members" className="w-[20%]" /> */}
            <span className="text-[13px] font-semibold">
              SANDALS SELECT MEMBERS
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {/* <img src={logo} alt="Sandals Select Members" className="w-[20%]" /> */}
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
              className="w-[60%] p-3 rounded-l-md text-sm focus:outline-none cursor-pointer"
            />
            <button className="bg-blue-500  text-white px-4 py-[11px] rounded-r-md flex items-center justify-center">
              <IoIosArrowForward size={22} />
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 md:px-10 py-8 text-sm text-gray-300">
          <div>
            <h4 className=" mb-2 text-white">Book a Vacation</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Book Online
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Get a Price Quote
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  View Specials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Find All-Inclusive Resort
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Find a Travel Agent
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sandals Specialists
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" mb-2 text-white">Already Booked?</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Check-in Online
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Book Optional Extras
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Balance Payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Butler Preferences
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" mb-2 text-white">All-Inclusive Resorts</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  View All Resorts
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Saint Vincent Resorts
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Jamaica Resorts
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Saint Lucia Resorts
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Antigua Resorts
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bahamas Resorts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" mb-2 text-white">Weddings & Celebrations</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Destination Weddings
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wedding Venues
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Inquire
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Honeymoons
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Elopements
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Anniversaries
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className=" mb-2 text-white">About Sandals</h4>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Destination Weddings
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wedding Venues
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Inquire
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Honeymoons
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Elopements
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Anniversaries
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News & Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Site Map
                </a>
              </li>
            </ul>
          </div>
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
            <h3 className="text-sm mb-6 text-gray-300">PART OF OUR FAMILY</h3>
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

          {/* Footer Links */}
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
    </footer>
  );
};

export default Footer;
