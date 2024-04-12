import React from "react";
import "./styles.sass";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      type='submit'
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
