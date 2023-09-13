import React, { useState } from "react";
import DetailForm from "../Components/Details/DetailForm";
import DetailList1 from "../Components/Details/DetailList1";
import DetailList2 from "../Components/Details/DetailList2";
import { Navigate, useNavigate } from "react-router-dom";
import Topheader from "../Components/Navbar/Topheader";
import axios from 'axios';


function Details() {
  const [detail, setDetail] = useState([]);
  const url = "https://localhost:7151/api/CoachDetails";

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = e.target.elements.fname.value;
    const mname = e.target.elements.mname.value;
    const lname = e.target.elements.lname.value;
    const gender = e.target.elements.gender.value;
    const dob = e.target.elements.dob.value;

    const newList = {
      fname: fname,
      mname: mname,
      lname: lname,
      gender: gender,
      dob: dob,
    };
    console.log(newList);
    axios.post(url,newList).then((res) => setDetail(res.data)).catch((e) => console.log(e));
    Navigate("/coachlist");
  };

  return (

    <div className="pagebody" >
      <div className="title">
        <h3>Coach Details Form</h3>
      </div>
      <div className="break">
        <hr></hr>
      </div>
      <div className="container-2">
        <DetailForm handleSubmit={handleSubmit} />
      </div>
      <div className="break">
        <hr></hr>
      </div>
      <div className="container-2">
        <DetailList1 />
      </div>

      <div className="container-2">
        <DetailList2 />
      </div>
      <div className="break">
        <hr></hr>
      </div>
    </div>
  );
}

export default Details;
