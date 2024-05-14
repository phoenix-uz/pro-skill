import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../UI/Button";
import NavBar from "../NavBar";
import "./styles.sass";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const isAuteficated = useSelector((state) => state.auth.isAuteficated);

  const toggleMenu = (toOpen) => {
    setBurgerIsOpen(toOpen);
  };

  return (
    <>
      {location.pathname === "/auth" || location.pathname === "/otp" ? (
        <></>
      ) : (
        <header className={`header  ${burgerIsOpen ? "white" : ""}`}>
          <div className=' container'>
            <div className='headerItems'>
              <div className='headerItem'>
                <Link
                  to='./'
                  className='headerLogo'
                >
                  Proskill
                </Link>
              </div>
              <div className='headerItem'>
                <span
                  className={`mobileOverlay ${burgerIsOpen ? "activeMenu" : ""}`}
                  onClick={(e) => toggleMenu(false)}
                ></span>
                <NavBar burgerIsOpen={burgerIsOpen} />
              </div>
              {isAuteficated ? (
                <div className='headerItem'>
                  <Link
                    className='registrationLink'
                    to='/auth'
                  >
                    Registracia
                  </Link>
                  <Link
                    to='./auth'
                    className='desktopOnly'
                  >
                    <Button>Kirish</Button>
                  </Link>
                  {/* language switcher */}
                </div>
              ) : (
                <></>
              )}
              <div
                className='burgerBtnContainer'
                onClick={() => toggleMenu(!burgerIsOpen)}
              >
                <div className={`burgerBtn ${burgerIsOpen ? "active" : ""}`}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
