import logo from "./logo.svg";
import "./App.css";
import PageRoutes from "./PageRoutes";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Top from "./Components/Navbar/Top";

function App() {
  return (
    <div>
      <Top />
      <Navbar />
      <PageRoutes />
    </div>
  );
}

export default App;
