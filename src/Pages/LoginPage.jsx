import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import "../Resources/Styles/LoginPage.css";
import Topheader from "../Components/Navbar/Topheader";
import axios from 'axios';

function LoginPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();


    // const email = "test123";
    // const password = "1234";


    // if (user === email || pass === password ) {
    //   // alert("You are Logged IN");
    //   navigate("/request");
    // } else {
    //   setErrorMessage("Please enter your correct credentials");
    // }
    const user = e.target.elements.username.value;
    const pass = e.target.elements.password.value;
    const url = "https://localhost:7151/api/Login";
    const login = {
      username : user,
      password : pass,
    }
    function send(){
      navigate("/request");
      localStorage.setItem("login", login.username);
    }
    console.log(login);
    if(user,pass){
      axios.post(url,login).then((res) => {
        console.log(res);
        toast.success("Login Successfully!",{
          position: "top-right",
          autoClose: 3000, // Duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        send();
      }).catch((e) => 
      {
        console.log(e);
        toast.error("Login Failed",
        {
          position : 'top-right',
          autoClose : 3000,
          hideProgressBar: true,
          closeOnClick : true,
          pauseOnHover: false,
          draggable : true,
        });
      });
    }else{
      toast.warn("All Fields are mandatory",{
        position: "top-right",
        autoClose: true,
        hideProgressBar: true,
        closeOnClick : true,
        draggable: true,
      })
    }

  };

  return (

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

  );
}

export default LoginPage;
