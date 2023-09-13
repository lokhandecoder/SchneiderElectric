import React, { useState } from "react";
import arrow from '../../Resources/Images/up.png'

function FormListDisplay({ Data,sortOrder, handleSort, sortBy  }) {
  // const [isVisible, setIsVisible] = useState(false)
  // const [sortBy, setSortBy] = useState(null);
  // const [sortOrder, setSortOrder] = useState('asc');

  // const sortedData = [...Data].sort((a, b) => {
  //   if (a[sortBy] < b[sortBy]) {
  //     return sortOrder === 'asc' ? -1 : 1;
  //   }
  //   if (a[sortBy] > b[sortBy]) {
  //     return sortOrder === 'asc' ? 1 : -1;
  //   }
  //   return 0;
  // });
  // const toggleSortOrder = () => {

  //   setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  //   setIsVisible(true);

  // };

// console.log(Data)
  // const [data, setData] = useState(Data);


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>ID  {sortBy === 'id' && <span>{sortOrder === 'asc' ? '▲' : '▼'} </span>}</th>
            <th onClick={() => handleSort('fname')}>First Name  {sortBy === 'fname' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}</th>
            <th onClick={() => handleSort('mname')}>MIddle Name  {sortBy === 'mname' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}</th>
            <th onClick={() => handleSort('lname')}>Last Name  {sortBy === 'lname' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}</th>
            <th onClick={() => handleSort('email')}>Email  {sortBy === 'email' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}</th>
            <th onClick={() => handleSort('contact')}>Contact  {sortBy === 'contact' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}</th>
            <th onClick={() => handleSort('address')}>Address  {sortBy === 'address' && <span>{sortOrder === 'asc' ? '▲' : '▼'}</span>}</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((d, k) => (
            <tr key={k} >
              <td style={{ padding: "20px 30px"}} >{d.id}</td>
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
