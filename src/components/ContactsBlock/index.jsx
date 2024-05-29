import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import "./styles.sass";
import ContactsForm from "../UI/ContactsForm";

const ContactsBlock = () => {
  return (
    <section className='contactsBlock'>
      <div className='container'>
        <div className='contactsBlockContainer'>
          <div className='content'>
            <div className='contentInfo'>
              <div className='contentTitle'>
                <h2 className='title'>Свяжитесь с нами</h2>
              </div>
              {/* <div className='contentText'>
                <p className='text'>
                  
                </p>
              </div> */}
            </div>
            <div className='box'>
              <div className='contactInfo'>
                <div className='infoBox'>
                  <div className='icon'>
                    <i className='icon-location'></i>
                  </div>
                  <div className='contactInfoTitle'>
                    <h3 className='title'>Manzil</h3>
                  </div>
                </div>
              </div>
              <div className='contactInfo'>
                <div className='infoBox'>
                  <div className='icon'>
                    <i className='icon-phone'></i>
                  </div>
                  <div className='contactInfoTitle'>
                    <h3 className='title'>+99890 777 88 88</h3>
                  </div>
                </div>
              </div>
              <div className='contactInfo'>
                <div className='infoBox'>
                  <div className='icon'>
                    <i className='icon-mail'></i>
                  </div>
                  <div className='contactInfoTitle'>
                    <h3 className='title'>hello@kkddllll.com</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='contactsMessangers'>
              <div className='messangersTitle'>
                <div className='title'>Наши контакты для связи:</div>
              </div>
              <div className='messangers'>
                <Link className='icon'>
                  <i className='icon-telegram'></i>
                </Link>
                <Link className='icon'>
                  <i className='icon-instagram'></i>
                </Link>
                <Link className='icon'>
                  <i className='icon-facebook'></i>
                </Link>
                <Link className='icon'>
                  <i className='icon-mail'></i>
                </Link>
              </div>
            </div>
          </div>
          <ContactsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactsBlock;
