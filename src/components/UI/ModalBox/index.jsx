import React from "react";
import Button from "../Button";
import "./styles.sass";

const ModalBox = ({ cancel, purchase, bookData }) => {
  return (
    <div className='modalBox'>
      <div className='container'>
        <div className='modalBoxContainer'>
          <div className='modalBoxTitle'>
            <h3 className='title'>
              Are you sure you wanna buy "{bookData.title}" for {bookData.price}?
            </h3>
          </div>

          <div className='btnsGroup'>
            <Button
              className='error'
              onClick={cancel}
            >
              No
            </Button>
            <Button onClick={purchase}>Yes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
