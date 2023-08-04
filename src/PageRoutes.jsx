import React from "react";
import { Route, Routes } from "react-router-dom";
import Request from "./Pages/Request";
import LoginPage from "./Pages/LoginPage";
import FormList from "./Pages/FormList";
import Skills from "./Pages/Skills";
import Toolkit from "./Pages/Toolkit";
import Details from "./Pages/Details";
import CoachList from "./Pages/CoachList";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/request" element={<Request />}></Route>
      <Route path="/formlist" element={<FormList />}></Route>
      <Route path="/skills" element={<Skills />}></Route>
      <Route path="/toolkit" element={<Toolkit />}></Route>
      <Route path="/detail" element={<Details />}></Route>
      <Route path="coachlist" element={<CoachList />}></Route>
    </Routes>
  );
}

export default PageRoutes;
