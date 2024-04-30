import React from "react";
import "./styles.sass";

const BenefitsCard = ({ icon, title, text }) => {
  return (
    <div className='benefitsCard'>
      <div className='benefitsCardInner'>
        <div className='flipCardFront'>
          <div className='cardIcon'>
            <i className={icon}></i>
          </div>
          <div className='cardTitle'>
            <h4 className='title'>{title}</h4>
          </div>
          <div className='cardText'>
            <p className='text'>{text}</p>
          </div>
        </div>
        <div className='flipCardBack'>
          <div className='cardText'>
            <p className='text'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
