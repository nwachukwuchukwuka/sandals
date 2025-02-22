
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./ui_components/Home";
import SandalsSaintVincentHome from "./ui_components/sandals_saint_vincent/SandalsSaintVincentHome";
import Navbar from "./ui_components/Navbar";
import Footer from "./ui_components/Footer";
import { RoomFilterProvider } from './ui_components/sandals_saint_vincent/context/RoomFilterContext';
import RoutePract from "./ui_components/RoutePract";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <RoomFilterProvider>
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
            <Route path="/route-pract" element={<RoutePract />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </RoomFilterProvider>
  );
};

export default App;
