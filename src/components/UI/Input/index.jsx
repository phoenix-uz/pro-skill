import React from "react";
import "./styles.sass";

const Input = ({ ...props }) => {
  return (
    <input
      className='input'
      {...props}
    />
  );
};

export default Input;
