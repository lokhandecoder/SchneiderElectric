import React from "react";

function AvailabilityTable({
  editingRow,
  handleInputChange,
  handleEdit,
  handleSave,
  handleCancel,
  data,
}) {
  return (
    <div className="table-container">
      <table  className={`data-table ${data.length > 5 ? 'scrollable' : ''}`}>
      <thead>
        <tr>
          <th style={{ width: "10%" }}>ID</th>
          <th>From</th>
          <th>To</th>
          <th style={{ width: "30%" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, k) => (
          <tr key={k}>
            <td>{d.id}</td>
            <td>
              {editingRow && editingRow.id === d.id ? (
                <input
                  type="date"
                  value={editingRow.from}
                  onChange={(e) => handleInputChange(e, "from")}
                />
              ) : (
                d.from
              )}
            </td>
            <td>
              {editingRow && editingRow.id === d.id ? (
                <input
                  type="date"
                  value={editingRow.to}
                  onChange={(e) => handleInputChange(e, "to")}
                />
              ) : (
                d.to
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

export default AvailabilityTable;
