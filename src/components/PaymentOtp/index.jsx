import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendPaymentOtp } from "../../store/clickPaymentSlice";
import PaymentVerificationInput from "./PaymentVerification";
import Timer from "../Timer";
import Button from "../UI/Button";
import "./styles.sass";

const PaymentOtp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [filled, setFilled] = useState(0);
  const isPurchesed = useSelector((state) => state.clickPayment.isPurchesed);
  useEffect(
    (e) => {
      if (filled === 5) {
        handleSubmit(e);
      }
    },
    [filled],
  );
  useEffect(() => {
    if (isPurchesed) navigate("/");
  }, [isPurchesed]);

  const handleSubmit = () => {
    dispatch(sendPaymentOtp(otp));
    window.location.herf = "https://proskill-academy.net/";
  };
  return (
    <div className='paymentOtp'>
      <div className='container'>
        <div className='otpContainer'>
          <div className='otpHeader'>
            <div className='headerTitle'>
              <h3 className='title'>Требуется подтверждение кода по СМС</h3>
            </div>
            <div className='headerSubtitle'>
              <p className='subtitle'>Код подтверждения был отправлен на вашу электронную почту</p>
            </div>
          </div>
          <div className='otpBody'>
            <div className='bodyTitle'>
              <h4 className='title'>Введите СМС-код</h4>
            </div>
            <form
              action=''
              className='otpVerificationForm'
              onSubmit={handleSubmit}
            >
              <div className='verificationCard'>
                <PaymentVerificationInput
                  otp={otp}
                  setOtp={setOtp}
                  submit={handleSubmit}
                  setFilled={setFilled}
                />
              </div>
              <div className='btnGroup'>
                <Link to='/auth'>
                  <Button className='outline'>Назад</Button>
                </Link>
                <Button>Подтверждение</Button>
              </div>
            </form>
          </div>
          <div className='otpFooter'>
            <div className='footerTimer'>
              <Timer />
            </div>
            <div className='footerText'>
              <p className='text'>Отправить код повторно</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOtp;
