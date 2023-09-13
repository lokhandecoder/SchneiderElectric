import React, { useState, useEffect } from "react";
import SkillsForm from "../Components/Skills/SkillsForm";
import Skillstable from "../Components/Skills/Skillstable";
import axios from "axios";
import { toast } from "react-toastify";

const data = [
  {
    id: 1,
    Skills: "mechanic",
    status: false,
  },
];

function Skills() {
  // const [fieldToUpdate, setFieldToUpdate] = useState('');
  const [skills, setSkills] = useState(data);
  const [editingRow, setEditingRow] = useState(null);
  const url = "https://localhost:7151/api/SkillsDetails";

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setEditingRow((prev) => ({ ...prev, [field]: value }));
    console.log(editingRow);
  };

  const handleEdit = (item) => {
    setEditingRow(item);
    console.log(item);
  };

  const handleSave = () => {
    axios
      .put(
        `https://localhost:7151/api/SkillsDetails/${editingRow.id}`,
        editingRow
      )
      .then((res) => {
        console.log(res);
        toast.success("Updated Successfully", {
          position: "top-right",
          autoClose: 2000, // Duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((e) => {
        console.log(e.response.data);
        toast.error(e.response.data, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      });
    setSkills((prev) =>
      prev.map((row) => (row.id === editingRow.id ? editingRow : row))
    );
    setEditingRow(null);
  };

  const handleCancel = () => {
    setEditingRow(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newskills = e.target.elements.Skills.value;
    const user = localStorage.getItem("token");

    if (user) {
      const newList = {
        skills: newskills,
        status: false,
      };
      axios
        .post(url, newList)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    } else {
      alert("please login to add skills");
    }
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setSkills(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {/* <div className="pagebody">
        <div className="row">
          <div className="col-5">
            <div className="title">
              <h3>Skills Details</h3>
            </div>
            <div className="break">
              <hr></hr>
            </div>
            <div className="container-2">
              <SkillsForm handleSubmit={handleSubmit} />
            </div>
          </div>
          <div className="col-6">
            <div className="container-2">
              <Skillstable
                editingRow={editingRow}
                handleInputChange={handleInputChange}
                handleEdit={handleEdit}
                handleSave={handleSave}
                handleCancel={handleCancel}
                data={skills}
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="pagebody" >
      <div className="title">
        <h3>Skills Details</h3>
      </div>
      <div className="break">
        <hr></hr>
      </div>
      <div className="container-2">
        <SkillsForm handleSubmit={handleSubmit} />
      </div>
      <div className="break">
        <hr></hr>
      </div>
      <div className="container-2">
        <Skillstable
          editingRow={editingRow}
          handleInputChange={handleInputChange}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleCancel={handleCancel}
          data={skills}
        />
      </div>
      <div className="break">
        <hr></hr>
      </div>
    </div>
    </>
  );
}

export default Skills;
