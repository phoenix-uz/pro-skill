import React from "react";
import { Link } from "react-router-dom";
import Rights from "./Rights";
import "./styles.sass";

const Footer = () => {
  return (
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
                <p className='text'>the quick fox jumps over the lazy dog</p>
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
                <h4 className='title'>Online kurslar</h4>
              </div>
              <div className='itemLinks'>
                <Link
                  to='/about'
                  className='link'
                >
                  Biz hakimizda
                </Link>
                <Link
                  to='/library'
                  className='link'
                >
                  Kutubhona
                </Link>
                <Link
                  to='/news'
                  className='link'
                >
                  Yangiliklar
                </Link>
                <Link
                  to='/courses/1'
                  className='link'
                >
                  Kurs
                </Link>
              </div>
            </div>
            <div className='footerItem'>
              <div className='itemTitle'>
                <h4 className='title'>Xususiyatlar</h4>
              </div>
              <div className='itemLinks'>
                <Link
                  to=''
                  className='link'
                >
                  Sotish boyicha menedger
                </Link>
                <Link
                  to=''
                  className='link'
                >
                  Biz bilan boglanish
                </Link>
              </div>
            </div>
            <div className='footerItem'>
              <div className='itemTitle'>
                <h4 className='title'>Kontakt</h4>
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
  );
};

export default Footer;
