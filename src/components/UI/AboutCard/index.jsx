import React from "react";
import cardAboutInfo from "../../../assets/images/cardAboutInfo.png";
import "./styles.sass";

const AboutCard = ({ title, text, image, className }) => {
  return (
    <div className='aboutCard'>
      <div className={`cardContainer ${className}`}>
        <div className='cardInfo'>
          <div className='infoTitle'>
            <h4 className='title'>{title}</h4>
          </div>
          <div className='infoText'>
            <p className='text'>{text}</p>
          </div>
        </div>
        <div className='cardImage'>
          <img
            src={image}
            alt={title}
            className='img'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
