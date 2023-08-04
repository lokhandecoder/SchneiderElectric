import React, { useState } from "react";

function DetailForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-element">
        <label className="required">First Name</label>
        <input type="text" name="fname" className="input-type2 " required />
      </div>
      <div className="form-element">
        <label>MIddle Name</label>
        <input type="text" name="mname" className="input-type2" />
      </div>
      <div className="form-element">
        <label className="required">Last Name</label>
        <input type="text" name="lname" className="input-type2" required />
      </div>
      <div className="form-element">
        <label className="required">Gender</label>
        <select name="gender" id="gender" className="input-type2">
          <option value="Male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="form-element">
        <label>Date of Birth</label>
        <input type="date" name="dob" className="input-type2" />
      </div>
      <div className="center button">
        <button className="centerbutton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default DetailForm;
