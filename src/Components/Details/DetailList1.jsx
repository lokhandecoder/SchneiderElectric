import React, { useEffect, useState } from "react";
import SkillsTable from "./SkillsTable";

const data = [
  {
    id: 1,
    skill: "PLumber",
  },
];

function DetailList1() {
  const [skill, setSkill] = useState(data);
  const [isVisible, setIsVisible] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setEditingRow((prev) => ({ ...prev, [field]: value }));
  };
  const handleEdit = (item) => {
    setEditingRow(item);
  };
  const handleSave = () => {
    setSkill((prev) =>
      prev.map((row) => (row.id === editingRow.id ? editingRow : row))
    );
    setEditingRow(null);
  };
  const handleCancel = () => {
    setEditingRow(null);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newskill = e.target.elements.skills.value;

    const newList = {
      id: skill.length + 1,
      skill: newskill,
    };

    setSkill([...skill, newList]);
    const forLocalStorageCoachSkill = [...skill, newList];
    localStorage.setItem(
      "coachskills",
      JSON.stringify(forLocalStorageCoachSkill)
    );
  };

  useEffect(() => {
    const storedData = localStorage.getItem("coachskills");
    if (storedData) {
      setSkill(JSON.parse(storedData));
    }
  }, []);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="title">
        <h3>Skills</h3>
      </div>
      <div className="break">
        <hr></hr>
      </div>
      <div className="container-2">
        <form onSubmit={handleAdd}>
          <div className="form-element">
            <label className="required">Skills</label>
            <select className="input-type2" name="skills">
              <option value="Plumber">Plumber</option>
              <option value="Doctor">Doctor</option>
              <option value="Engineer">Engineeer</option>
              <option value="Astronaut">Astronaut</option>
            </select>
          </div>
          <div className="center button">
            <button className="centerbutton" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
      <div>
        <span>
          {isVisible === false ? (
            <button onClick={handleToggle} className="normalbutton">
              Show List
            </button>
          ) : (
            <button onClick={handleToggle} className="normalbutton">
              Hide List
            </button>
          )}
        </span>
      </div>
      <div className={`slide-down ${isVisible ? "visible" : "hidden"}`}>
        <SkillsTable
          handleCancel={handleCancel}
          handleSave={handleSave}
          editingRow={editingRow}
          handleInputChange={handleInputChange}
          handleEdit={handleEdit}
          data={skill}
        />
      </div>
    </>
  );
}

export default DetailList1;
