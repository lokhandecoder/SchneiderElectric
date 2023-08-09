import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Resources/Styles/LoginPage.css";

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = "test123";
    const password = "1234";
    const user = e.target.elements.username.value;
    const pass = e.target.elements.password.value;

    if (user === email || pass === password ) {
      // alert("You are Logged IN");
      navigate("/request");
    } else {
      setErrorMessage("Please enter your correct credentials");
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
                type="password"
                name="password"
                className="input-type"
                placeholder="Enter your password"
              />
            </div>
            {errorMessage && <p style={{ color: 'red', marginLeft : '15px'}}>{errorMessage}</p>}
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
