import React from "react";
import "./styles.sass";

// CHECKBOX COMPONENT
const Checkbox = ({ isChecked, id, htmlFor, text }) => {
  // LAYOUT
  return (
    <label
      className='checkboxLabel'
      htmlFor={htmlFor}
    >
      <input
        className='checkboxInput'
        id={id}
        name='checkbox'
        type='checkbox'
        checked={isChecked && "checked"}
      />
      <p className='checkboxText'>{text}</p>
      <span className='checkbox' />
    </label>
  );
};

// EXPORTING COMPONENT
export default Checkbox;
