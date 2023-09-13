import React, { useEffect, useState } from "react";
import ToolkitForm from "../Components/ToolKit/ToolkitForm";
import ToolKitList from "../Components/ToolKit/ToolKitList";
import axios from "axios";
import {toast} from 'react-toastify';

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
  const url = "https://localhost:7151/api/Toolkit";


  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const material = e.target.elements.material.value;
    const link = e.target.elements.link.value;

    const newtool = {
      name: name,
      type: material,
      link: link,
    };
    axios.post(url,newtool).then((res) => setTool(res.data)).catch((e) => console.log(e));
  };

  useEffect(() => {
    // const storedData = localStorage.getItem("toolkit");
    // if (storedData) {
    //   setTool(JSON.parse(storedData));
    // }
    axios.get(url).then((res) => setTool(res.data)).catch((e) => console.log(e));
  }, []);

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setEditingRow((prev) => ({ ...prev, [field]: value }));
  };
  const handleEdit = (item) => {
    setEditingRow(item);
  };
  const handleSave = () => {
    // setTool((prev) =>
    //   prev.map((row) => (row.id === editingRow.id ? editingRow : row))
    // );
    axios.put(`https://localhost:7151/api/Toolkit/${editingRow.id}`,editingRow).then((res) => {console.log(res);
    toast.success("Updated Successfully",{
      position: "top-right",
      autoClose: 2000, // Duration in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }).catch((e) => {console.log(e.response.data);
    toast.error(e.response.data,
    {
      position : 'top-right',
      autoClose : 3000,
      hideProgressBar: true,
      closeOnClick : true,
      pauseOnHover: false,
      draggable : true,
    })
  });
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
