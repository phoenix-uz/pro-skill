import React from "react";
import { Link } from "react-browser-router";
import Button from "../Button";
import "./styles.sass";

const LibraryCard = ({
  iconDuration,
  durationText,
  image,
  alt,
  contentText,
  infoTitle,
  infoText,
  totalIcon,
  totalNumber,
  btnText,
  btnLink,
}) => {
  return (
    <div className='libraryItem'>
      <div className='itemContent'>
        <div className='topContent'>
          <div className='contentImage'>
            <img
              src={image}
              alt={alt}
              className='img'
            />
          </div>
          <div className='contentText'>
            <div className='listDuration'>
              <div className='durationIcon'>
                <i className={iconDuration}></i>
              </div>
              <div className='durationText'>
                <p className='text'>{durationText}</p>
              </div>
            </div>
            <p className='text'>{contentText}</p>
          </div>
        </div>
        <div className='bottomContent'>
          <div className='contentTotal'>
            <div className='totalIcon'>
              <i className={totalIcon}></i>
            </div>
            <div className='totalNumber'>
              <p className='number'>{totalNumber}</p>
            </div>
          </div>
          <div className='cardInfo'>
            <div className='infoTitle'>
              <h4 className='title'>{infoTitle}</h4>
            </div>
            <div className='infoText'>
              <h4 className='text'>{infoText}</h4>
            </div>
          </div>
          <Link
            to={btnLink}
            className='contentBtn'
          >
            <Button>{btnText}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
