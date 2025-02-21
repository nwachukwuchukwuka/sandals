import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./ui_components/Home";
import SandalsSaintVincentHome from "./ui_components/sandals_saint_vincent/SandalsSaintVincentHome";
import Hero from "./ui_components/Hero";
import Navbar from "./ui_components/Navbar";
import Footer from "./ui_components/Footer";
import { RoomFilterProvider } from './ui_components/sandals_saint_vincent/context/RoomFilterContext';

const App = () => {
  return (
    <RoomFilterProvider>
      <div className="bg-gray-100">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/sandals-saint-vincent"
              element={<SandalsSaintVincentHome />}
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </RoomFilterProvider>
  );
};

export default App;
