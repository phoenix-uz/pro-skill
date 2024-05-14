import React from "react";
import TestCard from "../TestCard";
import "./styles.sass";

const ModalBox = ({ onClick }) => {
  return (
    <div className='modal'>
      <div className='container'>
        <div className='modal-box'>
          <TestCard onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
