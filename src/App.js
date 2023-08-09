import logo from "./logo.svg";
import "./App.css";
import PageRoutes from "./PageRoutes";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";

function App() {
  return (
    <div>
      <Navbar />
      <PageRoutes />
    </div>
  );
}

export default App;
