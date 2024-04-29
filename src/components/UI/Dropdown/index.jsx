import React, { useState } from "react";
import "./styles.sass";
import Checkbox from "../CheckBox";

const DropdownWithSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  return (
    <div className='dropdown'>
      <div className='dropdownBtnContainer'>
        <button
          onClick={handleDropdownToggle}
          className='dropdownBtn'
        >
          <div className='dropdownIcon'>
            <i className='icon-Play'></i>
          </div>

          {isOpen ? "Ball boyicha filtrlash" : "Ball boyicha filtrlash"}
          <div className={`dropdownIcon ${isOpen ? "activeIcon" : ""}`}>
            <i className='icon-Play'></i>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className='dropdownMenu'>
          <div className='menuContainer'>
            <Checkbox
              htmlFor='10'
              id='10'
              text='10-20 Ball'
            />
            <Checkbox
              htmlFor='20'
              id='20'
              text='20-30 Ball'
            />
            <Checkbox
              htmlFor='30'
              id='30'
              text='30-40 Ball'
            />
            <Checkbox
              htmlFor='40'
              id='40'
              text='40 va koproq Ball'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithSelect;
