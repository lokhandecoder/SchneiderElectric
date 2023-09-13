import React, { useEffect, useState } from "react";
import CoachListDisplay from "../Components/Details/CoachListDisplay";
import Topheader from "../Components/Navbar/Topheader";
import axios from "axios";


function CoachList() {
  const [list, setList] = useState([]);
  const url = "https://localhost:7151/api/CoachDetails";

  useEffect(() => {
    axios.get(url).then((res) => setList(res.data)).catch((e) => console.log(e));
  }, []);

  return (

    <div className="pagebody" >
      <div className="title">
        <h3>Coach List</h3>
      </div>
      <div className="break">
        <hr />
      </div>
      <div className="container-2">
        <CoachListDisplay data={list} />
      </div>
      <div className="break">
        <hr></hr>
      </div>
    </div>
  );
}

export default CoachList;
