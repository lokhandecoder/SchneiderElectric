import React, { useState } from "react";
import "../../Resources/Styles/SliderRound.css";

function Skillstable({
  handleCancel,
  editingRow,
  handleEdit,
  handleSave,
  handleInputChange,
  data,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th style={{ width: "33%" }}>Skills</th>
          <th>Status</th>
          <th style={{ width: "28%" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, key) => (
          <tr key={key}>
            <td>{d.id}</td>
            <td>
              {editingRow && editingRow.id === d.id ? (
                <input
                  type="text"
                  value={editingRow.skill}
                  onChange={(e) => handleInputChange(e, "skill")}
                />
              ) : (
                d.skill
              )}
            </td>
            <td>
              <label className="switch">
                <input type="checkbox" value={d.status} />
                <span className="slider round" />
              </label>
            </td>
            <td>
              {editingRow && editingRow.id === d.id ? (
                <>
                  <button onClick={handleSave} className="savebutton">
                    Save
                  </button>
                  <button onClick={handleCancel} className="cancelbutton">
                    Cancel
                  </button>
                </>
              ) : (
                <button onClick={() => handleEdit(d)} className="editbutton">
                  Edit
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Skillstable;
