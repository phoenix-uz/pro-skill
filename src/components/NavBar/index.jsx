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
              Главная
            </Link>
            <Link
              className='navLink'
              to='./courses/1'
            >
              Курсы
            </Link>
            <Link
              className='navLink'
              to='./library'
            >
              Библиотека
            </Link>
            <Link
              className='navLink'
              to='./news'
            >
              Новости
            </Link>
            <Link
              className='navLink'
              to='./about'
            >
              О нас
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
                Цены
              </Link>
            ) : (
              <a
                className='navLink'
                href='#price'
              >
                Цены
              </a>
            )}
            <Link
              className='navLink'
              to='./contacts'
            >
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
