import React, { useState } from "react";
import "../../Resources/Styles/form.css";

function SkillsForm({ handleSubmit }) {
  return (
    // <>
    //   <div className="form5">
    //     <form className="register-form">
    //       <input type="text" placeholder="enter your skills" />
    //       <button>Submit</button>
    //     </form>
    //   </div>
    // </>
    <form onSubmit={handleSubmit}>
      <div className="form-element">
        <label className="required">Skills</label>
        <input type="text" name="Skills" className="input-type2 " required />
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
