import React from "react";
import "./styles.sass";
import Button from "../Button";
import imageNews from "../../../assets/images/news.png";
import { Link } from "react-router-dom";

const CardNews = ({ title, content, link }) => {
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
            <h4 className='title'>{title}</h4>
          </div>
          <div className='infoText'>
            <p className='text'>{content}</p>
          </div>
          <Link
            className='infoBtn'
            to={link}
          >
            <Button>Далее</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
