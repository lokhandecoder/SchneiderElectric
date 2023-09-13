import React, { useEffect, useState } from "react";
import logo from "../../Resources/Images/newlogo.png";
import logout from "../../Resources/Images/exit.png";
import "../../Resources/Styles/Logoutdropdown.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Topheader() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlesignout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };
  useEffect(() => {
    const login = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if ((login, username)) {
      setIsLoggedIn(true);
      setUsername(username);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const iflogin = (
    <>
      <div className="">
        <Link>{username}</Link>
        <Link to={"/"} onClick={handlesignout}>
        <img src={logout} alt="" className="logoutbutton" />
            </Link>
      </div>
    </>
  );

  return (
    <div className="topbar">
      <div className="item">
        <img src={logo} alt="" />
        {isLoggedIn && isLoggedIn ? iflogin : <Link to={"/"}>Login</Link>}
      </div>
    </div>
  );
}

export default Topheader;
