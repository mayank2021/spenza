import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import MainCompo from "./components/MainCompo/MainCompo";
import MarketPlace from "./components/MarketPlace/MarketPlace";
import VendorDetail from "./components/VendorDetailPage/VendorDetail";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("0");
  return (
    <div className="app-main--container">
      <Sidebar setActive={setActive} active={active} />
      <div className="app-right-container">
        <Navbar />
        {active === "0" ? (
          <MainCompo />
        ) : active === "3" ? (
          <MarketPlace setActive={setActive} active={active} />
        ) : active === "zoom" ? (
          <VendorDetail />
        ) : null}
      </div>
    </div>
  );
}

export default App;
