import React, { Children } from "react";
import "./styles.sass";

const PagesIntro = ({ introIcon, introTitle, introText, children }) => {
  return (
    <div className='pagesIntro'>
      <div className='introContainer'>
        <div className='introIcon'>
          <i className={`icon ${introIcon}`}></i>
        </div>
        <div className='introTitle'>
          <h2 className='title'>{introTitle}</h2>
        </div>
        <div className='introText'>
          <div className='text'>{introText}</div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default PagesIntro;
