import React from "react";
import Button from "../UI/Button";
import BenefitsCard from "./BenefitsCard";
import "./styles.sass";

const Benefits = () => {
  return (
    <section className='benefits'>
      <div className='blob first'></div>

      <div className='blob second'></div>

      <div className='blob third'></div>

      <div className='blob forth'></div>

      <div className='container'>
        <div className='benefitsContainer'>
          <div className='benefitsIformation'>
            <div className='benefitsHeading'>
              <h2 className='heading'>Biz bilan ishlashning afzalliklari</h2>
            </div>
            <div className='benefitsText'>
              <p className='text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sit nunc mauris arcu blandit. Turpis
                vitae lectus a ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sit nunc mauris arcu
                blandit. Turpis vitae lectus a ut.
              </p>
            </div>
            <div className='btnContainer'>
              <Button className='outline'>Kurs sotib olish</Button>
              <Button className='outline'>Testdan otish</Button>
            </div>
          </div>
          <div className='blob first'></div>

          <div className='blob second'></div>
          <div className='benefitsCards'>
            <div className='cardsBox'>
              <BenefitsCard
                icon='icon-pen'
                title='Perfectly Responsive'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'
              />
            </div>
            <div className='cardsBox'>
              <BenefitsCard
                icon='icon-medal'
                title='Perfectly Responsive'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'
              />
              <BenefitsCard
                icon='icon-shield'
                title='Perfectly Responsive'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'
              />
            </div>
          </div>
        </div>
        <div className='blob first'></div>

        <div className='blob second'></div>

        <div className='blob third'></div>

        <div className='blob forth'></div>
      </div>
    </section>
  );
};

export default Benefits;
