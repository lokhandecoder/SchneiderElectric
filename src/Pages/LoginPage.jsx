import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Resources/Styles/LoginPage.css";

function LoginPage() {
  const [login, setLogin] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = e.target.elements.username.value;
    const pass = e.target.elements.password.value;

    if (user === "test123" || pass === "1234") {
      alert("You are Logged IN");
      navigate("/request");
    } else {
      alert("PLease enter your correct credentials");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="card"></div>
        <div className="card2">
          <h5>SM Global PA Coaching Services</h5>
        </div>
        <div className="form1">
          <form onSubmit={handleSubmit}>
            <div className="forminput">
              <input
                type="text"
                name="username"
                className="input-type"
                placeholder="Enter your User ID"
              />
            </div>
            <div className="forminput">
              <input
                type="text"
                name="password"
                className="input-type"
                placeholder="Enter your password"
              />
            </div>
            <div className="forminput">
              <button
                type="submit"
                className="input-type"
                style={{ backgroundColor: "#3dcd58", color: "white" }}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
