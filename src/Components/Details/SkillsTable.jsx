import React from "react";

function SkillsTable({
  editingRow,
  handleInputChange,
  handleEdit,
  handleSave,
  handleCancel,
  data,
}) {
  return (
    <div  className="table-container">
      <table  className={`data-table ${data.length > 5 ? 'scrollable' : ''}`}>
        <thead>
          <tr>
            <th style={{ width: "10%" }}>ID</th>
            <th style={{ width: "60%" }}>Skills</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, k) => (
            <tr key={k}>
              <td>{d.id}</td>
              <td>
                {editingRow && editingRow.id === d.id ? (
                  <select className="input-type3" name="skill" id="skill" value={editingRow.skill} onChange={(e) => handleInputChange(e, 'skill')}>
                    <option value="plumber">PLumber</option>
                    <option value="doctor">doctor</option>
                    <option value="engineer">engineer</option>
                    <option value="astronaut">astronaut</option>
                  </select>
                ) : (
                  d.skill
                )}
              </td>
              <td>
                {editingRow && editingRow.id === d.id ? (
                  <div>
                    <button onClick={handleSave} className="savebutton">
                      Save
                    </button>
                    <button onClick={handleCancel} className="cancelbutton">
                      Cancel
                    </button>
                  </div>
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
    </div>
  );
}

export default SkillsTable;
