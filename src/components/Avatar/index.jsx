import React from "react";
import { Link } from "react-router-dom";
import firstAvatar from "../../assets/images/firstAvatar.png";
import secondAvatar from "../../assets/images/secondAvatar.png";
import thirdAvatar from "../../assets/images/thirdAvatar.png";
import forthAvatar from "../../assets/images/forthAvatar.png";
import "./styles.sass";

const Avatar = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <div className='avatarGroup'>
      <Link
        to='/registration'
        className='avatar'
      >
        <img
          className='img'
          src={firstAvatar}
        />
      </Link>
      <Link
        to='/registration'
        className='avatar'
      >
        <img
          className='img'
          src={secondAvatar}
        />
      </Link>
      <Link
        to='/registration'
        className='avatar'
      >
        <img
          className='img'
          src={thirdAvatar}
        />
      </Link>
      <Link
        to='/registration'
        className='avatar'
      >
        <img
          className='img'
          src={forthAvatar}
        />
      </Link>
      <div className='onlineUsers'>
        <Link
          to='/registration'
          className='text'
        >
          <span className='plus'>+ </span>
          {random(400, 450)} people online <i className='icon-arrow-right2'></i>
        </Link>
      </div>
    </div>
  );
};

export default Avatar;
