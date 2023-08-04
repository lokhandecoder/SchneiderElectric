import React from "react";

function CoachListDisplay({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, key) => (
          <tr key={key}>
            <td>{item.id}</td>
            <td>{item.fname}</td>
            <td>{item.mname}</td>
            <td>{item.lname}</td>
            <td>{item.gender}</td>
            <td>{item.dob}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CoachListDisplay;
