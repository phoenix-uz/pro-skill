import React from "react";
import Checkbox from "../CheckBox";
import testImage from "../../../assets/images/testImage.png";
import "./styles.sass";

const TestCard = () => {
  return (
    <div className='testCard'>
      <div className='cardContainer'>
        <div className='cardHeader'>
          <div className='pageNumber'>
            <p className='number'>
              <span className='current'>1</span>/10
            </p>
          </div>
          <div className='closeBtn'>
            <span className='close'></span>
          </div>
        </div>
        <div className='cardBody'>
          <div className='bodyImage'>
            <img
              src={testImage}
              alt='testImage'
              className='img'
            />
          </div>
          <div className='bodyTest'>
            <div className='testTitle'>
              <h4 className='title'>Nechi yoshda siz?</h4>
            </div>
            <div className='tests'>
              <Checkbox
                htmlFor='10'
                id='10'
                text='10-20 Ball'
              />
              <Checkbox
                htmlFor='10'
                id='10'
                text='10-20 Ball'
              />
              <Checkbox
                htmlFor='10'
                id='10'
                text='10-20 Ball'
              />
              <Checkbox
                htmlFor='10'
                id='10'
                text='10-20 Ball'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
