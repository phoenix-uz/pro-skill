import React from "react";
import firmLogo from "../../../assets/images/firmLogo.png";
import "./styles.sass";

const Rights = () => {
  return (
    <div className='rights'>
      <div className='rightsText'>
        <p className='text'>© 2024 Proskill Powered by </p>
      </div>
      <div className='rightsImage'>
        <img
          src={firmLogo}
          alt='firmLogo'
        />
      </div>
    </div>
  );
};

export default Rights;
