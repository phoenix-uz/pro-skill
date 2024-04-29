import React, { useState } from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addSms } from "../../../store/userReducer";
import { IMaskInput } from "react-imask";
import "./styles.sass";

const ContactsForm = () => {
  const dispatch = useDispatch();
  // const { isSuccess } = useSelector((state) => state.user);
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
          <h2 className='title'>SMS Yozing</h2>
        </div>
        <div className='formSubtitle'>
          <p className='subTitle'>
            Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you
            promptlyHave a specific
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
          <span>Ism</span>
        </div>
        <div className='inputBox'>
          <input
            type='text'
            name='surname'
            required
            value={formData.surname}
            onChange={handleForm}
          />
          <span>Familiya</span>
        </div>
        <div className='inputBox'>
          <IMaskInput
            name='phone_number'
            mask={Mask}
            value={formData.phone_number}
            onChange={handleForm}
            required
          />
          <span>Telefon raqam</span>
        </div>
        <div className='inputBox'>
          <textarea
            name='sms'
            value={formData.sms}
            onChange={handleForm}
            required
          ></textarea>
          <span>Sms</span>
        </div>
        <div className='formBtn'>
          <Button>Yuborish</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactsForm;
