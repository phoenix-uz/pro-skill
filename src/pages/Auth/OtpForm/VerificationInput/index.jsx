import React from "react";
import "./styles.sass";

const CardVerificationInput = ({ otp, setOtp, submit, setFilled }) => {
  const handleChange = (event, index) => {
    const element = event.target;
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (index === 5) {
      let filled = 0;
      otp.forEach((num) => {
        if (num) filled += 1;
      });
      setFilled(filled);
    }
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleKeyDown = (event, index) => {
    const element = event.target;
    if (event.key === "Backspace") {
      event.preventDefault();
      element.value = "";
      setOtp([...otp.map((d, idx) => (idx === index ? "" : d))]);
      if (element.previousSibling) {
        element.previousSibling.focus();
        if (window.getSelection) {
          window.getSelection().removeAllRanges();
        }
        return;
      }
    }
  };

  return (
    <div className='verificationInput'>
      <label htmlFor='otp'>
        {otp.map((data, index) => {
          return (
            <input
              className='inputOtp'
              type='text'
              name='otp'
              maxLength={1}
              key={index}
              value={data}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}
      </label>
    </div>
  );
};

export default CardVerificationInput;
