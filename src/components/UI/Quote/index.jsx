import React from "react";
import "./styles.sass";

const Quote = ({ name, text }) => {
  return (
    <div className='quote'>
      <div className='quoteContainer'>
        <div className='quoteHeader'>
          <div className='quoteName'>
            <h4 className='name'>{name}</h4>
          </div>
          <div className='quoteLabel'>
            <p className='label'>Цитата дня</p>
          </div>
        </div>
        <div className='quoteRole'>
          <p className='role'>Assistant Professor at Mcmaster University</p>
        </div>
        <div className='quoteText'>
          <p className='text'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
