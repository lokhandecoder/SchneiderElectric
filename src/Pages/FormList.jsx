import React, { useEffect, useState } from "react";
import FormListDisplay from "../Components/RequestForm/FormListDisplay";
import { json } from "react-router-dom";

function FormList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem("request");
    if (storedData) {
      setList(JSON.parse(storedData));
    }
  }, []);
  return (
    <div className="pagebody" >
      <div className="title">
        <h3>Registration Details</h3>
      </div>
      <div className="break">
        <hr></hr>
      </div>
      <div className="container-2">
        <FormListDisplay Data={list} />
      </div>
      <div className="break">
        <hr></hr>
      </div>
    </div>
  );
}

export default FormList;
