import React from "react";
// import '../Resources/Styles/Navbar.css'
import "../../Resources/Styles/Navbar.css";
// import logo from '../Resources/Images/logo2.png'
import logo from "../../Resources/Images/newlogo.png";
import NavItem from "./NavItem";
import { Route, Routes } from "react-router-dom";

function Navbar(data) {
  const pathname = window.location.pathname;
  return (
    <>
      <div className="topbar">
        <div className="item">
          <img src={logo} alt="" />
          <a href="#contact" className="services">
            PA Coaching Services
          </a>
        </div>
      </div>
      <Routes>
        <Route path="/"></Route>
        <Route path="/request" element={<NavItem />}></Route>
        <Route path="/formlist" element={<NavItem />}></Route>
        <Route path="/skills" element={<NavItem />}></Route>
        <Route path="/toolkit" element={<NavItem />}></Route>
        <Route path="/detail" element={<NavItem />}></Route>
        <Route path="coachlist" element={<NavItem />}></Route>
      </Routes>
    </>
  );
}

export default Navbar;
