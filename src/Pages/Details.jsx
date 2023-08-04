import React, { useState } from "react";
import DetailForm from "../Components/Details/DetailForm";
import DetailList1 from "../Components/Details/DetailList1";
import DetailList2 from "../Components/Details/DetailList2";
import { Navigate, useNavigate } from "react-router-dom";

function Details() {
  const [detail, setDetail] = useState([]);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = e.target.elements.fname.value;
    const mname = e.target.elements.mname.value;
    const lname = e.target.elements.lname.value;
    const gender = e.target.elements.gender.value;
    const dob = e.target.elements.dob.value;

    const newList = {
      id: detail.length + 1,
      fname: fname,
      mname: mname,
      lname: lname,
      gender: gender,
      dob: dob,
    };

    setDetail([...detail, newList]);
    const forLocalStorageCoach = [...detail, newList];
    localStorage.setItem("coachdetail", JSON.stringify(forLocalStorageCoach));
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
