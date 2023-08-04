import React, { useState } from "react";

function ReuqestForm({ handleSubmit }) {
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
        <label className="required">Email</label>
        <input type="text" name="email" className="input-type2" required />
      </div>
      <div className="form-element">
        <label>Contact No</label>
        <input type="text" name="contact" className="input-type2" />
      </div>
      <div className="form-element">
        <label>Address</label>
        <textarea
          className="input-type2"
          style={{ height: "150px" }}
          name="address"
        ></textarea>
      </div>
      <div className="center button">
        <button className="centerbutton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReuqestForm;
