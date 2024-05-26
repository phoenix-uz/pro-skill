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
                Жаркое лето плавит цены 50% скидка на наш курс <i className='star icon-star-full' /> менеджера по
                продажам <i className='icon-arrow-right2' />
              </Link>
            ) : (
              <Link
                className='topLink'
                to='/auth'
              >
                Жаркое лето плавит цены 50% скидка на наш курс <i className='star icon-star-full' /> менеджера по
                продажам <i className='icon-arrow-right2' />
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TopBanner;
