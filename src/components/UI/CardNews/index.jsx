import React from "react";
import "./styles.sass";
import Button from "../Button";
import imageNews from "../../../assets/images/news.png";

const CardNews = () => {
  return (
    <div className='cardNews'>
      <div className='cardNewsContainer'>
        <div className='cardImage'>
          <img
            src={imageNews}
            alt=''
            className='img'
          />
        </div>
        <div className='cardInfo'>
          <div className='infoTitle'>
            <h4 className='title'>Новость</h4>
          </div>
          <div className='infoText'>
            <p className='text'>
              Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers
              must have the foresight and prepare for new challenges around the corner
            </p>
          </div>
          <div className='infoBtn'>
            <Button>batafsil</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
