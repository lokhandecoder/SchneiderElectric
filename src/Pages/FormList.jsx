import React, { useEffect, useState } from "react";
import FormListDisplay from "../Components/RequestForm/FormListDisplay";
import Topheader from "../Components/Navbar/Topheader";
import { json, useLocation } from "react-router-dom";
import axios from "axios";

function FormList() {
  const [list, setList] = useState([]);
  const url = "https://localhost:7151/api/RequestForm";

  const location = useLocation();

  useEffect(() => {
    axios.get(url).then((res) => {console.log(res.data);setList(res.data);}).catch((e) => console.log(e));
  }, []);

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("id");

  const handleSort = (sortField) => {
    let sortedData = [...list];

    if (sortField === "id") {
      setSortBy("id");
      sortedData.sort((a, b) =>
        sortOrder === "asc" ? a.id - b.id : b.id - a.id
      );
    } else if (sortField === "fname") {
      setSortBy("fname");
      sortedData.sort((a, b) =>
        sortOrder === "asc"
          ? a.fname.localeCompare(b.fname)
          : b.fname.localeCompare(a.fname)
      );
    } else if (sortField === "mname") {
      setSortBy("mname");
      sortedData.sort((a, b) =>
        sortOrder === "asc"
          ? a.fname.localeCompare(b.fname)
          : b.fname.localeCompare(a.fname)
      );
    } else if (sortField === "lname") {
      setSortBy("lname");
      sortedData.sort((a, b) =>
        sortOrder === "asc"
          ? a.fname.localeCompare(b.lname)
          : b.fname.localeCompare(a.lname)
      );
    } else if (sortField === "email") {
      setSortBy("email");
      sortedData.sort((a, b) =>
        sortOrder === "asc"
          ? a.fname.localeCompare(b.email)
          : b.fname.localeCompare(a.email)
      );
    } else if (sortField === "contact") {
      setSortBy("contact");
      sortedData.sort((a, b) =>
        sortOrder === "asc"
          ? a.fname.localeCompare(b.contact)
          : b.fname.localeCompare(a.contact)
      );
    } else if (sortField === "address") {
      setSortBy("address");
      sortedData.sort((a, b) =>
        sortOrder === "asc"
          ? a.fname.localeCompare(b.address)
          : b.fname.localeCompare(a.address)
      );
    } else {
      setSortBy("id");
    }

    setList(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  return (

    <div className="pagebody">
      <div className="title">
        <h3>Registration Details</h3>
      </div>
      <div className="break">
        <hr></hr>
      </div>
      <div className="container-2">
        <FormListDisplay
          Data={list}
          handleSort={handleSort}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
      </div>
      <div className="break">
        <hr></hr>
      </div>
    </div>
  );
}

export default FormList;
