import React, { useState } from "react";

function SkillsForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-element">
        <label className="required">Skills</label>
        <input type="text" name="skills" className="input-type2 " required />
      </div>
      <div className="center button">
        <button className="centerbutton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default SkillsForm;
