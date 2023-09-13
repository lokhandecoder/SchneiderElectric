import React, { useEffect, useState } from "react";
import "../../Resources/Styles/Navbar.css";
import NavItem from "./NavItem";
import Topheader from "./Topheader";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";

function Navbar(data) {
  return (
    <>
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
