import React from "react";
import PagesIntro from "../../components/UI/PagesIntro";
import Button from "../../components/UI/Button";
import PaymeImage from "../../assets/images/payme.png";
import Cookies from "js-cookie";
import { IMaskInput } from "react-imask";
import "./styles.sass";

const PaymePage = () => {
  const courseName = Cookies.get("name");
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
  return (
    <div className='paymePage'>
      <div className='container'>
        <div className='paymeContainer'>
          <PagesIntro
            introIcon='icon-Notebook'
            introTitle='Tolov'
            introText="We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods"
          />
          <div className='paymeBox'>
            <div className='paymeItems'>
              <div className='paymeLogo'>
                <img
                  src={PaymeImage}
                  alt='PaymeImage'
                />
              </div>
              <div className='totalAmount'>
                <div className='amountText'>To'lov miqdori:</div>
                <div className='amount'>{price}</div>
              </div>
            </div>
            <form className='paymeForm'>
              <div className='formTitle'>
                <h3 className='title'>Ro'yxatdan holda to'lov</h3>
              </div>
              <div className='formBox'>
                <div className='inputBox'>
                  <label
                    className='label'
                    htmlFor='nomer'
                  >
                    Karta nomer
                  </label>
                  <IMaskInput
                    name='nomer'
                    mask={Mask}
                    className='input'
                    id='nomer'
                    placeholder='1234 1234 1234 1234'
                    // value={formData.phone_number}
                    // onChange={handleForm}
                    required
                  />
                </div>
                <div className='inputBox'>
                  <label
                    className='label'
                    htmlFor='Muddat'
                  >
                    Muddat
                  </label>
                  <IMaskInput
                    name='Muddat'
                    mask={ExpireMask}
                    className='input'
                    id='Muddat'
                    placeholder='MM/YY'
                    // value={formData.phone_number}
                    // onChange={handleForm}
                    required
                  />
                </div>
              </div>
              <Button>Byu</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymePage;