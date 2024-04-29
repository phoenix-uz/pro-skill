import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import NavBar from "../NavBar";
import "./styles.sass";

const Header = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const toggleMenu = (toOpen) => {
    setBurgerIsOpen(toOpen);
  };

  return (
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
          <div className='headerItem'>
            <Link
              className='registrationLink'
              to='registration'
            >
              Registracia
            </Link>
            <div className='desktopOnly'>
              <Button>Kirish</Button>
            </div>
            {/* language switcher */}
          </div>
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
  );
};

export default Header;
