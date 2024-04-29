import React from "react";
import "./styles.sass";
import TestCard from "../../components/UI/TestCard";
import PagesIntro from "../../components/UI/PagesIntro";
import { Link } from "react-router-dom";
import payme from "../../assets/images/payme.png";
import click from "../../assets/images/click.png";

const PaymentPage = () => {
  return (
    <div className='paymnerPage'>
      <div className='container'>
        <div className='paymentPageContainer'>
          <PagesIntro
            introIcon='icon-Notebook'
            introTitle='Tolov'
            introText='We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please do not hesitate to reach out to us using any of the following contact methods'
          ></PagesIntro>
          <div className='paymentBox'>
            <div className='paymentText'>
              <div className='text'>
                <strong>Diqqat. Ushbu hisob-fakturani to'lash xizmat ko'rsatish shartlariga rozilik bildiradi.</strong>
                To'lov haqida xabar berish ixtiyoriy. Xizmatlar bizning bank hisobimizga mablag' kelib tushgandan so'ng
                taqdim etiladi. Xizmatni taqdim etgandan so'ng, biz sizning q.wert.y_1111@gmail.com elektron pochta
                manzilingizga bu haqda bildirishnoma yuboramiz.
              </div>
            </div>
            <div className='payment'>
              <div className='paymentTitle'>
                <h4 className='title'>To'lov usulini tanlang:</h4>
              </div>
              <div className='paymentBtns'>
                <Link
                  to=''
                  className='links'
                >
                  <img
                    src={payme}
                    alt='payme'
                    className='img'
                  />
                </Link>
                <Link
                  to=''
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
      {/* <TestCard /> */}
    </div>
  );
};

export default PaymentPage;
