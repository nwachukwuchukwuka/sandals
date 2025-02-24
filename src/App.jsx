import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./ui_components/Home";
import SandalsSaintVincentHome from "./ui_components/sandals_saint_vincent/SandalsSaintVincentHome";
import Navbar from "./ui_components/Navbar";
import Footer from "./ui_components/Footer";
import { RoomFilterProvider } from "./ui_components/sandals_saint_vincent/context/RoomFilterContext";
import { NavbarProvider } from "./ui_components/sandals_saint_vincent/context/NavbarContext";

import ScrollToTop from "./ScrollToTop";
import RoomDetails from "./ui_components/sandals_saint_vincent/RoomDetails";

const App = () => {
  return (
    <RoomFilterProvider>
      <NavbarProvider>
        <div className="bg-gray-100">
          <Navbar />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/sandals-saint-vincent"
                element={<SandalsSaintVincentHome />}
              />
              <Route path="/room-details/:roomId" element={<RoomDetails />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </NavbarProvider>
    </RoomFilterProvider>
  );
};

export default App;
