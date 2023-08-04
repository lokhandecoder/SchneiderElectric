import React, { useEffect, useState } from "react";
import ToolkitForm from "../Components/ToolKit/ToolkitForm";
import ToolKitList from "../Components/ToolKit/ToolKitList";

const data = [
  {
    id: 1,
    name: "Amit Lokhande",
    material: "Iron",
    link: "www.google.com",
  },
];

function Toolkit() {
  const [tool, setTool] = useState(data);
  const [editingRow, setEditingRow] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const material = e.target.elements.material.value;
    const link = e.target.elements.link.value;

    const newtool = {
      id: tool.length + 1,
      name: name,
      material: material,
      link: link,
    };
    setTool([...tool, newtool]);
    const forLocalStorageToolKit = [...tool, newtool];
    localStorage.setItem("toolkit", JSON.stringify(forLocalStorageToolKit));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("toolkit");
    if (storedData) {
      setTool(JSON.parse(storedData));
    }
  }, []);

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setEditingRow((prev) => ({ ...prev, [field]: value }));
  };
  const handleEdit = (item) => {
    setEditingRow(item);
  };
  const handleSave = () => {
    setTool((prev) =>
      prev.map((row) => (row.id === editingRow.id ? editingRow : row))
    );
    setEditingRow(null);
  };
  const handleCancel = () => {
    setEditingRow(null);
  };

  return (
    <div className="pagebody" >
      <div className="title">
        <h3>Coach ToolKit </h3>
      </div>
      <div className="break">
        <hr></hr>
      </div>
      <div className="container-2">
        <ToolkitForm handleSubmit={handleSubmit} />
      </div>
      <div className="break">
        <hr></hr>
      </div>
      <div className="container-2">
        <ToolKitList
          handleInputChange={handleInputChange}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleCancel={handleCancel}
          editingRow={editingRow}
          data={tool}
        />
      </div>
      <div className="break">
        <hr></hr>
      </div>
    </div>
  );
}

export default Toolkit;
