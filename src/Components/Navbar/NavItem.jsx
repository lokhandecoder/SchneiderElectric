import React from "react";
// import "../Resources/Styles/NavItem.css";
import "../../Resources/Styles/NavItem.css";
// import admin from "../Resources/Images/user.png";

import { Link } from "react-router-dom";

function NavItem() {
  return (
    <div>
      <nav>
        <Link to={"/"} className="links">
          Home
        </Link>
        <Link to={"/request"} className="links">
          Request Form
        </Link>
        <Link to={"/skills"} className="links">
          Skills Details
        </Link>
        <Link to={"/toolkit"} className="links">
          Coach Toolkit
        </Link>
        <Link to={"/detail"} className="links">
          Coach Details
        </Link>
        <div className="dropdown-menu">
          <button className="menu-btn">Lists </button>
          <div className="menu-content">
            <Link to={"/formlist"} className="links">
              Registration Details
            </Link>
            <Link to={"/coachlist"} className="links">
              Coach Details
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavItem;
