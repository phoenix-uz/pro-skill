import React from "react";
import { Link } from "react-browser-router";
import PagesIntro from "../../components/UI/PagesIntro";
import ContactsForm from "../../components/UI/ContactsForm";
import contactsMap from "../../assets/images/map.png";
import "./styles.sass";

const ContactsPage = () => {
  return (
    <div className='contactsPage'>
      <div className='container'>
        <div className='contactsPageContainer'>
          <PagesIntro
            introIcon='icon-Play'
            introTitle='Контакты'
            introText='Если у вас остались вопросы, или хотите больше узнать о ProSkill, оставьте заявку — и мы вам перезвоним.'
          ></PagesIntro>
          <div className='contactsPageItems'>
            <div className='contactItem'>
              <ContactsForm />
            </div>
            <div className='contactItem'>
              <div className='itemImage'>
                <img
                  src={contactsMap}
                  alt='contactsMap'
                  className='img'
                />
              </div>
              <div className='contactsMessangers'>
                <div className='messangersTitle'>
                  <div className='title'>Связаться с нами:</div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
