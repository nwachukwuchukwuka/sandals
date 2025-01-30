import logo from '../assets/logo.svg'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-[85%] mx-auto">




                {/* Top Navigation */}
                <div className="flex justify-between items-center px-4 md:px-0 py-4 border-b border-gray-500">
                    <div className="flex items-center space-x-4">
                        <img
                            src={logo}
                            alt="Sandals Select Members"
                            className="w-[20%]"
                        />
                        <span className='text-[15px]'>SANDALS SELECT MEMBERS</span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm">
                        <a href="#" className="hover:underline">
                            FIND A TRAVEL AGENT
                        </a>
                        <a href="#" className="hover:underline">
                            MEET A SANDALS SPECIALIST
                        </a>
                        <a href="#" className="hover:underline">
                            VISIT THE SANDALS BLOG
                        </a>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="text-center py-8 border-b border-gray-500">
                    <img
                        src={logo}
                        alt="Sandals Logo"
                        className="mx-auto w-40 mb-8"
                    />
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
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 md:px-10 py-8 text-sm text-gray-500">
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
                        <h4 className=" mb-2 text-white">Sandals</h4>
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
                                    Anniversaries
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Anniversaries
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Anniversaries
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Anniversaries
                                </a>
                            </li>
                        </ul>
                    </div>
                
                </div>
            </div>
        </footer>
    );
};

export default Footer;
