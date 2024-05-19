import React from "react";
import TestCard from "../TestCard";
import "./styles.sass";

const TextModalBox = ({ onClick }) => {
  return (
    <div className='textModalBox'>
      <div className='container'>
        <div className='modal-box'>
          <TestCard onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default TextModalBox;
