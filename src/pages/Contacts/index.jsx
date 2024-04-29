import React from "react";
import "./styles.sass";
import PagesIntro from "../../components/UI/PagesIntro";
import ContactsForm from "../../components/UI/ContactsForm";
import contactsMap from "../../assets/images/map.png";
import { Link } from "react-browser-router";

const ContactsPage = () => {
  return (
    <div className='contactsPage'>
      <div className='container'>
        <div className='contactsPageContainer'>
          <PagesIntro
            introIcon='icon-Play'
            introTitle='Kontaktlar'
            introText='We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please do not hesitate to reach out to us using any of the following contact methods'
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
                  <div className='title'>Biz bilan bog'lanish:</div>
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
