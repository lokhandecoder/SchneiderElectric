import React, { useState } from "react";



function ToolkitForm({handleSubmit}) {
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-element">
        <label className="required">Name</label>
        <input type="text" name="name" className="input-type2 " required />
      </div>
      <div className="form-element">
        <label className="required">Material Type</label>
        <input type="text" name="material" className="input-type2 " required />
      </div>
      <div className="form-element">
        <label className="required">Link</label>
        <input type="text" name="link" className="input-type2 " required />
      </div>
      <div className="center button">
        <button className="centerbutton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ToolkitForm;
