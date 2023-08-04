import React, { useState } from "react";

function FormListDisplay({ Data }) {
  console.log(Data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>MIddle Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((d, k) => (
            <tr key={k}>
              <td>{d.id}</td>
              <td>{d.fname}</td>
              <td>{d.mname}</td>
              <td>{d.lname}</td>
              <td>{d.email}</td>
              <td>{d.contact}</td>
              <td>{d.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormListDisplay;
