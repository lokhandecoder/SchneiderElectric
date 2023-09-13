import React, { useState } from "react";
import "../Resources/Styles/Details.css";
import line from "../Resources/Images/line.png";
import ReuqestForm from "../Components/RequestForm/ReuqestForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";



function Request() {
  const Navigate = useNavigate();
  const url = "https://localhost:7151/api/RequestForm";


  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = e.target.elements.fname.value;
    const mname = e.target.elements.mname.value;
    const lname = e.target.elements.lname.value;
    const email = e.target.elements.email.value;
    const contact = e.target.elements.contact.value;
    const address = e.target.elements.address.value;

    const newList = {
      fname: fname,
      mname: mname,
      lname: lname,
      email: email,
      contact: contact,
      email: email,
      address: address,
    };

    axios.post(url,newList).then((res) => toast.success("Your Request has been noted",{
      position: "top-center",
      autoClose: 2000, // Duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
      
    }) ).catch((e) => toast.error(e.data,{
      position : "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    }));
    Navigate("/formlist");
  };
  return (

    <div className="pagebody square-in-bottom-right">
      <div className="title">
        <h3>Request Form</h3>
      </div>
      <div className="break">
        <hr></hr>
      </div>
      <div className="container-2">
        <ReuqestForm handleSubmit={handleSubmit} />
      </div>

    </div>
  );
}

export default Request;
