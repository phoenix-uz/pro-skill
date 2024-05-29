import React, { useState } from "react";
import "./styles.sass";
import Checkbox from "../CheckBox";

const DropdownWithSelect = ({ selectedOptions, setSelectedOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (event) => {
    if (event.target.checked) {
      const arr = [...selectedOptions, event.target.value];
      setSelectedOptions(arr);
    } else {
      const arr = selectedOptions.filter((item) => item !== event.target.value);
      setSelectedOptions(arr);
    }
  };
  function isChecked(value) {
    return selectedOptions.includes(value);
  }

  return (
    <div className='dropdown'>
      <div className='dropdownBtnContainer'>
        <button
          onClick={handleDropdownToggle}
          className='dropdownBtn'
        >
          <div className='dropdownIcon'>
            <i className='icon-Notebook'></i>
          </div>

          {isOpen ? "Поиск по балам" : "Поиск по балам"}
          <div className={`dropdownIcon ${isOpen ? "activeIcon" : ""}`}>
            <i className='icon-arrow-right2'></i>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className='dropdownMenu'>
          <div className='menuContainer'>
            <Checkbox
              htmlFor='10'
              id='10'
              option='10-20 Ball'
              value='10,20'
              onChange={(event) => handleOptionChange(event)}
              isChecked={isChecked("10,20")}
            />
            <Checkbox
              htmlFor='20'
              id='20'
              option='20-30 Ball'
              value='20,30'
              isChecked={isChecked("20,30")}
              onChange={(event) => handleOptionChange(event)}
            />
            <Checkbox
              htmlFor='30'
              id='30'
              option='30-40 Ball'
              value='30,40'
              isChecked={isChecked("30,40")}
              onChange={(event) => handleOptionChange(event)}
            />
            <Checkbox
              htmlFor='40'
              id='40'
              value='40,10000000000000'
              option="40 va ko'proq Ball"
              isChecked={isChecked("40,10000000000000")}
              onChange={(event) => handleOptionChange(event)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithSelect;
