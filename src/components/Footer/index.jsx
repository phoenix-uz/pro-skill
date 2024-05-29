import React from "react";
import { Link, useLocation } from "react-router-dom";
import Rights from "./Rights";
import "./styles.sass";

const Footer = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/auth" || location.pathname === "/otp" ? (
        <></>
      ) : (
        <footer className='footer'>
          <div className='container'>
            <div className='footerContainer'>
              <div className='footerItems'>
                <div className='footerItem'>
                  <div className='footerLogo'>
                    <Link
                      to='./'
                      className='logo'
                    >
                      Proskill
                    </Link>
                  </div>
                  <div className='footerText'>
                    <p className='text'>Быстрая лиса перепрыгивает через ленивую собаку</p>
                  </div>
                  <div className='footerIcons'>
                    <Link
                      to=''
                      className='icon'
                    >
                      <i className='icon-telegram'></i>
                    </Link>
                    <Link
                      to=''
                      className='icon'
                    >
                      <i className='icon-instagram'></i>
                    </Link>
                    <Link
                      to=''
                      className='icon'
                    >
                      <i className='icon-facebook'></i>
                    </Link>
                    <Link
                      to=''
                      className='icon'
                    >
                      <i className='icon-mail'></i>
                    </Link>
                  </div>
                </div>
                <div className='footerItem'>
                  <div className='itemTitle'>
                    <h4 className='title'>Онлайн курсы</h4>
                  </div>
                  <div className='itemLinks'>
                    <Link
                      to='/about'
                      className='link'
                    >
                      О нас
                    </Link>
                    <Link
                      to='/library'
                      className='link'
                    >
                      Библиотека
                    </Link>
                    <Link
                      to='/news'
                      className='link'
                    >
                      Новости
                    </Link>
                    <Link
                      to='/courses/1'
                      className='link'
                    >
                      Курсы
                    </Link>
                  </div>
                </div>
                <div className='footerItem'>
                  <div className='itemTitle'>
                    <h4 className='title'>Функции</h4>
                  </div>
                  <div className='itemLinks'>
                    <Link
                      to=''
                      className='link'
                    >
                      Менеджер по продажам
                    </Link>
                    <Link
                      to=''
                      className='link'
                    >
                      Связаться с нами
                    </Link>
                  </div>
                </div>
                <div className='footerItem'>
                  <div className='itemTitle'>
                    <h4 className='title'>Контакты</h4>
                  </div>
                  <div className='itemLinks'>
                    <Link
                      to=''
                      className='linkBox link'
                    >
                      <div className='icon'>
                        <i className='icon-phone'></i>
                      </div>
                      <div className='linkText'>
                        <p className='text'>(480) 555-0103</p>
                      </div>
                    </Link>
                    <Link
                      to=''
                      className='linkBox link'
                    >
                      <div className='icon'>
                        <i className='icon-mail'></i>
                      </div>
                      <div className='linkText'>
                        <p className='text'>companyWeb@example.com</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <Rights />
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
