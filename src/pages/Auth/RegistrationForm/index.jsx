import React, { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registrationForm } from "../../../store/authSlice";
import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";
import Cookies from "js-cookie";
import "./styles.sass";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const phoneMask = "+998 (00) 000-00-00";
  const Mask = [
    {
      mask: phoneMask,
    },
  ];
  const [registrationData, setRegistrationData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    city: "",
    birthday: "",
    password: "",
    repeatPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    phoneNumber: false,
    gender: false,
    city: false,
    birthday: false,
    password: false,
    repeatPassword: false,
  });

  const handleChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registrationForm(registrationData));
    navigate(`/otp?phone=${registrationData?.phoneNumber}`);
    setRegistrationData({
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      city: "",
      birthday: "",
      password: "",
      repeatPassword: "",
    });
  };

  const isFormValid = () => {
    return (
      registrationData.fullName.trim() !== "" &&
      registrationData.email.trim() !== "" &&
      registrationData.phoneNumber.trim() !== "" &&
      registrationData.city.trim() !== "" &&
      registrationData.password &&
      registrationData.repeatPassword &&
      registrationData.password === registrationData.repeatPassword
    );
  };
  useEffect(() => {
    Cookies.remove("phoneNumber");
  }, []);

  return (
    <div className='formContainer'>
      <div className='formTitle'>
        <h4 className='title'>Зарегистрироваться</h4>
      </div>
      <form
        action=''
        className='formBox'
        onSubmit={handleSubmit}
      >
        <div className='inputBox'>
          <Input
            type='text'
            name='fullName'
            className='input'
            placeholder='Ф.И.O'
            value={registrationData.fullName}
            // onChange={(e) => setRegistrationData({ ...registrationData, fullName: e.target.value })}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputBox'>
          <Input
            type='text'
            name='city'
            className='input'
            placeholder='Улица'
            value={registrationData.city}
            // onChange={(e) => setRegistrationData({ ...registrationData, city: e.target.value })}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputBox'>
          <Input
            type='text'
            name='email'
            className='input'
            placeholder='Почта'
            value={registrationData.email}
            // onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputBox'>
          <IMaskInput
            name='phoneNumber'
            className='input'
            placeholder='Номер телефона'
            value={registrationData.phoneNumber}
            // onChange={(e) => setRegistrationData({ ...registrationData, phoneNumber: e.target.value })}
            onChange={handleChange}
            mask={Mask}
            required
          />
        </div>
        <div className='inputBox'>
          <Input
            type='password'
            placeholder='Пароль'
            className='input'
            name='password'
            value={registrationData.password}
            // onChange={(e) => setRegistrationData({ ...registrationData, password: e.target.value })}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputBox'>
          <Input
            type='password'
            placeholder='Повторите пароль'
            className='input'
            name='repeatPassword'
            value={registrationData.repeatPassword}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          className={!isFormValid() ? "disabled" : ""}
          disabled={!isFormValid()}
        >
          Вход
        </Button>
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

export default RegistrationForm;
