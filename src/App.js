import React from "react";
import Headers from "./Components/Header1";
import "./Components/style.css"
import FooterPage from "./Components/Footer";
import Menu from "./Screens/Menu/Menu"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Screens/Homepage/Home"
import Reservation from "./Screens/Reserve/Reservation";
import AboutUs from "./Screens/About/About";

function App() {
  return (
    <div classnname="App" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Reserve" element={<Reservation />} />
          <Route path="/About" element={<AboutUs />} />





        </Routes>

      </Router>



      \

    </div>

  );
}
export default App;