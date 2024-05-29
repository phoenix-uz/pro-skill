import React from "react";
import "./styles.sass";
import TestCard from "../../components/UI/TestCard";
import PagesIntro from "../../components/UI/PagesIntro";
import { Link } from "react-router-dom";
import payme from "../../assets/images/payme.png";
import click from "../../assets/images/Click.png";
import Button from "../../components/UI/Button";

const PaymentPage = () => {
  return (
    <div className='paymnerPage'>
      <div className='container'>
        <div className='paymentPageContainer'>
          <PagesIntro
            introIcon='icon-Notebook'
            introTitle='Оплата'
            // introText='We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please do not hesitate to reach out to us using any of the following contact methods'
          ></PagesIntro>
          <div className='paymentBox'>
            <div className='paymentText'>
              <div className='text'>
                <strong>Внимание. Оплата этого счета означает согласие с условиями обслуживания.</strong>
                Уведомление об оплате является необязательным. Услуги предоставляются при поступлении денежных средств
                на наш банковский счет. предоставлен. После оказания услуги мы отправим вам электронное письмо на адрес
                q.wert.y_1111@gmail.com. Мы отправим уведомление на ваш адрес.
              </div>
            </div>
            <div className='payment'>
              <div className='paymentTitle'>
                <h4 className='title'>Выберите способ оплаты:</h4>
              </div>
              <div className='paymentBtns'>
                <Link
                  to='/payme'
                  className='links'
                >
                  <img
                    src={payme}
                    alt='payme'
                    className='img'
                  />
                </Link>
                <Link
                  to='/click'
                  className='links'
                >
                  <img
                    src={click}
                    alt='click'
                    className='img'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
