import React from "react";
// import '../Resources/Styles/Navbar.css'
import "../../Resources/Styles/Navbar.css";
// import logo from '../Resources/Images/logo2.png'
import logo from "../../Resources/Images/newlogo.png";
import NavItem from "./NavItem";

function Navbar(data) {
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
      <NavItem data={data} />
    </>
  );
}

export default Navbar;
