import React, { useEffect, useState } from "react";
import CoachListDisplay from "../Components/Details/CoachListDisplay";

function CoachList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("coachdetail");
    if (storedData) {
      setList(JSON.parse(storedData));
    }
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
