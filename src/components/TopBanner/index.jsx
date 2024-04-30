import React from "react";
import { Link } from "react-router-dom";
import "./styles.sass";

const TopBanner = () => {
  return (
    <div className='container'>
      <div className='bannerInner'>
        <Link
          className='topLink'
          to='./'
        >
          Bepul kurs <i className='star icon-star-full' /> Akcia yaqinda tugidi, kurs sotib olish{" "}
          <i className='icon-arrow-right2' />
        </Link>
      </div>
    </div>
  );
};

export default TopBanner;
