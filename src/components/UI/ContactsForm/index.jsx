import React, { useState } from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { IMaskInput } from "react-imask";
import "./styles.sass";
import { addSms } from "../../../store/mainSlice";

const ContactsForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", surname: "", phone_number: "", sms: "" });
  const phoneMask = "+998 (00) 000-00-00";
  const Mask = [
    {
      mask: phoneMask,
    },
  ];
  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSms(formData));
    setFormData({ name: "", surname: "", phone_number: "", sms: "" });
  };
  return (
    <div className='contactForm'>
      <form
        className='form'
        onSubmit={handleSubmit}
      >
        <div className='formTitle'>
          <h2 className='title'>Отправьте нам сообщение</h2>
        </div>
        <div className='formSubtitle'>
          <p className='subTitle'>
            Если у вас остались вопросы, или хотите больше узнать о ProSkill, оставьте заявку — и мы вам перезвоним.
          </p>
        </div>
        <div className='inputBox'>
          <input
            type='text'
            name='name'
            required
            value={formData.name}
            onChange={handleForm}
          />
          <span>Имя</span>
        </div>
        <div className='inputBox'>
          <input
            type='text'
            name='surname'
            required
            value={formData.surname}
            onChange={handleForm}
          />
          <span>Фамилия</span>
        </div>
        <div className='inputBox'>
          <IMaskInput
            name='phone_number'
            mask={Mask}
            value={formData.phone_number}
            onChange={handleForm}
            required
          />
          <span>Номер телефона</span>
        </div>
        <div className='inputBox'>
          <textarea
            name='sms'
            value={formData.sms}
            onChange={handleForm}
            required
          ></textarea>
          <span>Ваше сообщение</span>
        </div>
        <div className='formBtn'>
          <Button>Отправить</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactsForm;
