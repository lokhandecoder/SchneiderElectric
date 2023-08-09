import React, { useState } from "react";
import "../Resources/Styles/Details.css";
import line from "../Resources/Images/line.png";
import ReuqestForm from "../Components/RequestForm/ReuqestForm";
import { useNavigate } from "react-router-dom";

const input = [
  {
    id: 1,
    fname: "Amit",
    mname: "Suresh",
    lname: "Lokhande",
    email: "amitlokhande909@gmail.com",
    contact: 9987753904,
    address: "H-2, Room no-6, Deonar Colony",
  },
];
function Request() {
  const [data, setData] = useState(input);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = e.target.elements.fname.value;
    const mname = e.target.elements.mname.value;
    const lname = e.target.elements.lname.value;
    const email = e.target.elements.email.value;
    const contact = e.target.elements.contact.value;
    const address = e.target.elements.address.value;

    const newList = {
      id: data.length + 1,
      fname: fname,
      mname: mname,
      lname: lname,
      email: email,
      contact: contact,
      email: email,
      address: address,
    };

    setData([...data, newList]);
    const forLocalStorageRequest = [...data, newList];
    localStorage.setItem("request", JSON.stringify(forLocalStorageRequest));
    Navigate("/formlist");
  };
  return (
    <div className="pagebody">
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
