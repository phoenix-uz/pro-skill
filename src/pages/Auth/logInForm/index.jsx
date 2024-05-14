import React, { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import { useDispatch, useSelector } from "react-redux";
import { loginForm } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";
import "./styles.sass";

const LogInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const phoneMask = "+998 (00) 000-00-00";
  const isLogined = useSelector((state) => state.auth.isLogined);
  const Mask = [
    {
      mask: phoneMask,
    },
  ];
  const [loginData, setLoginData] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleCahnge = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isLogined) navigate("/");
  }, [isLogined]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginForm(loginData));
  };
  return (
    <div className='formContainer'>
      <div className='formTitle'>
        <h4 className='title'>Kirish</h4>
      </div>
      <form
        action=''
        className='formBox'
        onSubmit={handleSubmit}
      >
        <div className='inputBox'>
          <IMaskInput
            className='input'
            placeholder='Telefon nomer'
            mask={Mask}
            name='phoneNumber'
            value={loginData.phoneNumber}
            onChange={handleCahnge}
            required
          />
        </div>
        <div className='inputBox'>
          <Input
            type='password'
            placeholder='Parol'
            className='input'
            name='password'
            value={loginData.password}
            onChange={handleCahnge}
            required
          />
        </div>
        <Button>Kirish</Button>
      </form>
      <div className='formLink'>
        {/* <Link to='logIn' */}
        {/* <Typography>
      Akkaunt bormi? <span>Kirish</span>
    </Typography> */}
      </div>
    </div>
  );
};

export default LogInForm;
