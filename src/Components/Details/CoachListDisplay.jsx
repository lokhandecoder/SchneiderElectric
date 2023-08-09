import React,{useState} from "react";

function CoachListDisplay({ data }) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedData = [...data].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th onClick={() => {setSortBy('fname'); toggleSortOrder();}}>First Name</th>
          <th onClick={() => {setSortBy('mname'); toggleSortOrder();}}>Middle Name</th>
          <th onClick={() => {setSortBy('lname'); toggleSortOrder();}}>Last Name</th>
          <th onClick={() => {setSortBy('gender'); toggleSortOrder();}}>Gender</th>
          <th onClick={() => {setSortBy('dob'); toggleSortOrder();}}>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, key) => (
          <tr key={key} >
            <td style={{ padding: "20px 30px"}}>{item.id}</td>
            <td >{item.fname}</td>
            <td >{item.mname}</td>
            <td >{item.lname}</td>
            <td >{item.gender}</td>
            <td >{item.dob}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CoachListDisplay;
