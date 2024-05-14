import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp } from "../../../store/authSlice";
import Timer from "../../../components/Timer";
import Button from "../../../components/UI/Button";
import CardVerificationInput from "./VerificationInput";
import "./styles.sass";

const OtpForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [filled, setFilled] = useState(0);
  const phoneNumber = location.search.replace("?phone=", "");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(
    (e) => {
      if (filled === 5) {
        handleSubmit(e);
      }
    },
    [filled],
  );
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const handleSubmit = () => {
    dispatch(sendOtp(otp));
  };
  return (
    <div className='otp'>
      <div className='container'>
        <div className='otpContainer'>
          <div className='otpHeader'>
            <div className='headerTitle'>
              <h3 className='title'>Sms kod tasdiqlash talab etiladi</h3>
            </div>
            <div className='headerSubtitle'>
              <p className='subtitle'>Tasdiqlash kodi elektron xatga yuborildi</p>
              <p className='phone'>{decodeURI(phoneNumber)}</p>
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
                <CardVerificationInput
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

export default OtpForm;
