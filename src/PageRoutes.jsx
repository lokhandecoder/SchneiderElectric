import React from "react";
import { Route, Routes } from "react-router-dom";
import Request from "./Pages/Request";
import LoginPage from "./Pages/LoginPage";
import FormList from "./Pages/FormList";
import Skills from "./Pages/Skills";
import Toolkit from "./Pages/Toolkit";
import Details from "./Pages/Details";
import CoachList from "./Pages/CoachList";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import Topheader from "./Components/Navbar/Topheader";
import { useEffect, useState } from "react";
import Protected from "./Protected";
import UpdateData from "./Pages/UpdateData ";

function PageRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/demo" element={<UpdateData />}></Route>
      <Route
        path="/"
        element={<HomePage setIsLoggedIn={setIsLoggedIn} />}
      ></Route>
      <Route
        path="/request"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Request />
          </Protected>
        }
      ></Route>
      <Route
        path="/formlist"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <FormList />
          </Protected>
        }
      ></Route>
      <Route
        path="/skills"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Skills />
          </Protected>
        }
      ></Route>
      <Route
        path="/toolkit"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Toolkit />
          </Protected>
        }
      ></Route>
      <Route
        path="/detail"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Details />
          </Protected>
        }
      ></Route>
      <Route
        path="coachlist"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <CoachList />
          </Protected>
        }
      ></Route>
    </Routes>
  );
}

export default PageRoutes;
