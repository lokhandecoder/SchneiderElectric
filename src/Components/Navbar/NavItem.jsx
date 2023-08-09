import React from "react";
// import "../Resources/Styles/NavItem.css";
import "../../Resources/Styles/NavItem.css";
// import admin from "../Resources/Images/user.png";

import { Link, useLocation } from "react-router-dom";

function NavItem() {
  const location = useLocation();
  return (
    <div>
      <nav>
        <Link to={"/"} className="links" >
          Home
        </Link>
        <Link to={"/request"} className={"/request" === location.pathname ? "links active" : 'links'}>
          Request Form
        </Link>
        <Link to={"/skills"}className={"/skills" === location.pathname ? "links active" : 'links'}>
          Skills Details
        </Link>
        <Link to={"/toolkit"}className={"/toolkit" === location.pathname ? "links active" : 'links'}>
          Coach Toolkit
        </Link>
        <Link to={"/detail"}className={"/detail" === location.pathname ? "links active" : 'links'}>
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
