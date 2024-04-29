import React from "react";
import "./styles.sass";

const Quote = () => {
  return (
    <div className='quote'>
      <div className='quoteContainer'>
        <div className='quoteHeader'>
          <div className='quoteName'>
            <h4 className='name'>John Anderson</h4>
          </div>
          <div className='quoteLabel'>
            <p className='label'>Kun iqtibos</p>
          </div>
        </div>
        <div className='quoteRole'>
          <p className='role'>Assistant Professor at Mcmaster University</p>
        </div>
        <div className='quoteText'>
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore
            magna aliqua. Ut enum ad minim veniam, quis nostrud
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
