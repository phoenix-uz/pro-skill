import React from "react";
import "./styles.sass";

const Checkbox = ({ key, isChecked, id, htmlFor, option, value, onChange }) => {
  return (
    <label
      className='checkboxLabel'
      htmlFor={htmlFor}
      key={key}
    >
      <input
        className='checkboxInput'
        id={id}
        name='checkbox'
        type='checkbox'
        checked={isChecked && "checked"}
        value={value}
        onChange={onChange}
      />

      <p className='checkboxText'>{option}</p>
      <span className='checkbox' />
    </label>
  );
};

// EXPORTING COMPONENT
export default Checkbox;
