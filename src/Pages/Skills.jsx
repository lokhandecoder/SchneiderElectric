import React, { useState, useEffect } from "react";
import SkillsForm from "../Components/Skills/SkillsForm";
import Skillstable from "../Components/Skills/Skillstable";

const data = [
  {
    id: 1,
    skill: "mechanic",
    status: false,
  },
];
function Skills() {
  const [skill, setSkills] = useState(data);
  const [editingRow, setEditingRow] = useState(null);
  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setEditingRow((prev) => ({ ...prev, [field]: value }));
  };
  const handleEdit = (item) => {
    setEditingRow(item);
  };
  const handleSave = () => {
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

    const newskills = e.target.elements.skills.value;

    const newList = {
      id: skill.length + 1,
      skill: newskills,
      status: false,
    };

    setSkills([...skill, newList]);
    const forLocalStorageskills = [...skill, newList];
    localStorage.setItem("skillsdata", JSON.stringify(forLocalStorageskills));
  };
  useEffect(() => {
    const storedData = localStorage.getItem("skillsdata");
    if (storedData) {
      setSkills(JSON.parse(storedData));
    }
  }, []);
  return (
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
          data={skill}
        />
      </div>
      <div className="break">
        <hr></hr>
      </div>
    </div>
  );
}

export default Skills;
