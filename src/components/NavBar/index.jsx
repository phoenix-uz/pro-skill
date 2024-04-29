import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ burgerIsOpen }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
  return (
    <nav className={`nav ${burgerIsOpen ? "activeMenu" : ""}`}>
      <div className='navContainer'>
        <div className='navBox'>
          <div className='links'>
            <Link
              className='navLink'
              to='./'
            >
              Bosh sahifa
            </Link>
            <Link
              className='navLink'
              to='./courses/1'
            >
              Kurs
            </Link>
            <Link
              className='navLink'
              to='./library'
            >
              Kutubhona
            </Link>
            <Link
              className='navLink'
              to='./news'
            >
              Yangiliklar
            </Link>
            <Link
              className='navLink'
              to='./about'
            >
              Biz Hakimizda
            </Link>
            {location.pathname === "/about" ||
            location.pathname === "/news" ||
            location.pathname === "/contacts" ||
            location.pathname === "/library" ||
            location.pathname === "/payment" ? (
              <Link
                to='/#price'
                className='navLink'
              >
                Narxlar
              </Link>
            ) : (
              <a
                className='navLink'
                href='#price'
              >
                Narxlar
              </a>
            )}
            <Link
              className='navLink'
              to='./contacts'
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
