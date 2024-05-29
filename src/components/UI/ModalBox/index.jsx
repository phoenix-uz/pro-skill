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
              Вы уверены, что хотите купить "{bookData.title}" за {bookData.price}?
            </h3>
          </div>

          <div className='btnsGroup'>
            <Button
              className='error'
              onClick={cancel}
            >
              нет
            </Button>
            <Button onClick={purchase}>да</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
