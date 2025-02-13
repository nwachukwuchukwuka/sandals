import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { background_images } from "@/constants/constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "@/assets/logo.svg";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = ["English", "Spanish", "French"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % background_images.length);
    }, 5000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(imageInterval);
    };
  }, [background_images.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black text-white shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="md:max-w-[85%] mx-auto flex items-center justify-between px-5 py-2 md:p-4">
          <div className="flex items-center justify-center">
            <img src={logo} alt="Sandals Select Members" className="w-[100px] md:w-[150px]" />
          </div>

          <div className="flex items-center">
            <div>
              <div
                className={`space-x-4 ${
                  scrolled
                    ? "hidden"
                    : "flex justify-end mr-[15px] text-[10px] mb-1 "
                }`}
              >
                <button className="hover:text-gray-400 hidden md:block">
                  SIGN IN OR JOIN
                </button>
                <button className="hover:text-gray-400 hidden md:block">
                  SEARCH
                </button>

                {/* Language Dropdown */}
                <div className="relative hidden md:block">
                  <button
                    className="flex items-center space-x-1 hover:text-gray-400"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{selectedLanguage}</span>
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  {isDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 w-32 mt-2 bg-white text-black border rounded-lg shadow-lg overflow-hidden"
                    >
                      {languages.map((language, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSelectedLanguage(language);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {language}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              </div>

              <nav className="hidden md:flex space-x-6 mr-4">
                <a href="#resorts" className="uppercase hover:text-gray-400">
                  Resorts
                </a>
                <a href="#inclusions" className="uppercase hover:text-gray-400">
                  Inclusions
                </a>
                <a href="#weddings" className="uppercase hover:text-gray-400">
                  Weddings & Celebrations
                </a>
                <a href="#groups" className="uppercase hover:text-gray-400">
                  Groups
                </a>
                <a href="#specials" className="uppercase hover:text-gray-400">
                  Specials
                </a>
              </nav>
            </div>

            <button className="md:bg-gray-400/50 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded md:text-[18px] -mr-[10px] md:mr-0 leading-tight">
              CHECK RATES <br />
              <span
                className={`${
                  scrolled ? "hidden" : "flex"
                } text-[11px] md:text-[14px]`}
              >
                & AVAILABILITY
              </span>
            </button>

            {/* Menu Button for Mobile */}
            <button onClick={toggleMenu} className="block md:hidden ml-4">
              {!isMenuOpen && <AiOutlineMenu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-full bg-black text-white z-50 shadow-lg"
            >
              {/* Sidebar Header with Close Icon */}
              <div className="flex justify-between items-center p-2 px-4 border-b border-gray-700">
                <h2 className="text-xl font-bold">Sandals</h2>

                <button className="bg-transparent hover:bg-gray-700 text-white font-bold py-1 px-2 rounded text-[13px] -mr-[100px] ">
                  CHECK RATES <br />
                  <span className={`text-[11px]`}>& AVAILABILITY</span>
                </button>

                <button onClick={toggleMenu} className="hover:text-gray-400">
                  <AiOutlineClose size={24} />
                </button>
              </div>

              {/* Sidebar Content */}
              <div className="p-4">
                <nav className="flex flex-col space-y-4">
                  <a href="#resorts" className="hover:text-gray-400">
                    Resorts
                  </a>
                  <a href="#inclusions" className="hover:text-gray-400">
                    Inclusions
                  </a>
                  <a href="#weddings" className="hover:text-gray-400">
                    Weddings & Celebrations
                  </a>
                  <a href="#groups" className="hover:text-gray-400">
                    Groups
                  </a>
                  <a href="#specials" className="hover:text-gray-400">
                    Specials
                  </a>
                  <button className="hover:text-gray-400 text-left">
                    SIGN IN OR JOIN
                  </button>
                  <button className="hover:text-gray-400 text-left">
                    SEARCH
                  </button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="relative h-[560px] md:h-[750px] overflow-hidden">
        <AnimatePresence>
        <motion.div
  key={currentImage}
  initial={{ x: "100%" }}
  animate={{ x: "0%" }}
  exit={{ x: "-100%" }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
  className="absolute inset-0 w-full h-full"
  style={{
    backgroundImage: `url('${background_images[currentImage]}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
/>
        </AnimatePresence>

    

        {/* Dots Navigation */}
        <div className="absolute bottom-[50px] left-4 flex space-x-2">
          {background_images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-[6px] h-[6px] rounded-full cursor-pointer ${
                index === currentImage ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
