import React from "react";
import "./styles.sass";

const Button = ({ disabled, className, children, ...props }) => {
  return (
    <button
      {...props}
      type='submit'
      className={`btn ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
