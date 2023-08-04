import React from "react";

function ToolKitList({
  handleCancel,
  handleInputChange,
  handleEdit,
  handleSave,
  editingRow,
  data,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Link</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, key) => (
          <tr key={key}>
            <td>{item.id}</td>
            <td>
              {editingRow && editingRow.id === item.id ? (
                <input
                  type="text"
                  value={editingRow.name}
                  onChange={(e) => handleInputChange(e, "name")}
                />
              ) : (
                item.name
              )}
            </td>
            <td>
              {editingRow && editingRow.id === item.id ? (
                <input
                  type="text"
                  value={editingRow.material}
                  onChange={(e) => handleInputChange(e, "material")}
                />
              ) : (
                item.material
              )}
            </td>
            <td>
              {editingRow && editingRow.id === item.id ? (
                <input
                  type="text"
                  value={editingRow.link}
                  onChange={(e) => handleInputChange(e, "link")}
                />
              ) : (
                item.link
              )}
            </td>
            <td>
              <label className="switch">
                <input type="checkbox" value={item.status} />
                <span className="slider round" />
              </label>
            </td>
            <td>
              {editingRow && editingRow.id === item.id ? (
                <div>
                  <button onClick={handleSave} className="savebutton">
                    Save
                  </button>
                  <button onClick={handleCancel} className="cancelbutton">
                    Cancel
                  </button>
                </div>
              ) : (
                <button onClick={() => handleEdit(item)} className="editbutton">
                  {" "}
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

export default ToolKitList;
