import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.sass";
import { useSelector } from "react-redux";

const TopBanner = () => {
  const isAuteficated = useSelector((state) => state.auth.isLogined);
  const location = useLocation();
  return (
    <>
      {location.pathname === "/auth" || location.pathname === "/otp" ? (
        <></>
      ) : (
        <div className='container'>
          <div className='bannerInner'>
            {isAuteficated ? (
              <Link
                className='topLink'
                to='/payment'
              >
                Bepul kurs <i className='star icon-star-full' /> Akcia yaqinda tugidi, kurs sotib olish{" "}
                <i className='icon-arrow-right2' />
              </Link>
            ) : (
              <Link
                className='topLink'
                to='/auth'
              >
                Bepul kurs <i className='star icon-star-full' /> Akcia yaqinda tugidi, kurs sotib olish{" "}
                <i className='icon-arrow-right2' />
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TopBanner;
