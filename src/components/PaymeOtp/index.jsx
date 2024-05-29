import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { sendPaymePaymentOtp } from "../../store/paymePaymentSlice";
import Timer from "../Timer";
import Button from "../UI/Button";
import PaymeVerificationInput from "./PaymeVerificationInput";
import "./styles.sass";

const PaymeOtp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [filled, setFilled] = useState(0);
  const isPurchesed = useSelector((state) => state.paymePayment.isPurchesed);
  useEffect(
    (e) => {
      if (filled === 5) {
        handleSubmit(e);
      }
    },
    [filled],
  );
  useEffect(() => {
    if (isPurchesed) window.location.herf = "https://proskill-academy.net/";
  }, [isPurchesed]);

  const handleSubmit = () => {
    dispatch(sendPaymePaymentOtp(otp));
    window.location.herf = "https://proskill-academy.net/";
  };
  return (
    <div className='paymeOtp'>
      <div className='container'>
        <div className='otpContainer'>
          <div className='otpHeader'>
            <div className='headerTitle'>
              <h3 className='title'>Sms kod tasdiqlash talab etiladi</h3>
            </div>
            <div className='headerSubtitle'>
              <p className='subtitle'>Tasdiqlash kodi elektron xatga yuborildi</p>
            </div>
          </div>
          <div className='otpBody'>
            <div className='bodyTitle'>
              <h4 className='title'>SMS kodni kiriting</h4>
            </div>
            <form
              action=''
              className='otpVerificationForm'
              onSubmit={handleSubmit}
            >
              <div className='verificationCard'>
                <PaymeVerificationInput
                  otp={otp}
                  setOtp={setOtp}
                  submit={handleSubmit}
                  setFilled={setFilled}
                />
              </div>
              <div className='btnGroup'>
                <Link to='/auth'>
                  <Button className='outline'>Orqaga</Button>
                </Link>
                <Button>Tastiqlash</Button>
              </div>
            </form>
          </div>
          <div className='otpFooter'>
            <div className='footerTimer'>
              <Timer />
            </div>
            <div className='footerText'>
              <p className='text'>Kodni qayta yuborish</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymeOtp;
