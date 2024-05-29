import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { useDispatch } from "react-redux";
import { clickPaymentData } from "../../store/clickPaymentSlice";
import { useNavigate } from "react-router-dom";
import PagesIntro from "../../components/UI/PagesIntro";
import Button from "../../components/UI/Button";
import ClickImage from "../../assets/images/Click.png";
import Cookies from "js-cookie";
import "./styles.sass";

const ClickPage = () => {
  const courseName = Cookies.get("name");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState({ cardNumber: "", expireDate: "" });
  const cardMask = "0000 0000 0000 0000";
  const expireDateMask = "00/00";
  const Mask = [
    {
      mask: cardMask,
    },
  ];
  const ExpireMask = [
    {
      mask: expireDateMask,
    },
  ];

  let price;
  if (courseName === "Dars") {
    price = "99.000 so‘m";
  } else if (courseName === "Modul") {
    price = "499.000 so‘m";
  } else if (courseName === "Kurs") {
    price = "3.999.000 so‘m";
  } else {
    price = "Unknown course";
  }
  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clickPaymentData(cardData));
    navigate(`/paymentOtp`);
    setCardData({
      cardNumber: "",
      expireDate: "",
    });
  };
  return (
    <div className='clickPage'>
      <div className='container'>
        <div className='clickContainer'>
          <PagesIntro
            introIcon='icon-Notebook'
            introTitle='Tolov'
            introText="We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods"
          />
          <div className='clickBox'>
            <div className='clickItems'>
              <div className='clickLogo'>
                <img
                  src={ClickImage}
                  alt='ClickImage'
                />
              </div>
              <div className='totalAmount'>
                <div className='amountText'>Цена:</div>
                <div className='amount'>{price}</div>
              </div>
            </div>
            <form
              className='clickForm'
              onSubmit={handleSubmit}
            >
              <div className='formTitle'>
                <h3 className='title'>Оплата без регистрации</h3>
              </div>
              <div className='formBox'>
                <div className='inputBox'>
                  <label
                    className='label'
                    htmlFor='nomer'
                  >
                    Номер карты
                  </label>
                  <IMaskInput
                    name='cardNumber'
                    mask={Mask}
                    className='input'
                    id='nomer'
                    placeholder='1234 1234 1234 1234'
                    value={cardData.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='inputBox'>
                  <label
                    className='label'
                    htmlFor='Muddat'
                  >
                    Срок истечения
                  </label>
                  <IMaskInput
                    name='expireDate'
                    mask={ExpireMask}
                    className='input'
                    id='Muddat'
                    placeholder='MM/YY'
                    value={cardData.expireDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <Button>Купить</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClickPage;
