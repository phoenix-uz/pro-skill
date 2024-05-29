import React, { useState } from "react";
import Button from "../UI/Button";
import BenefitsCard from "./BenefitsCard";
import "./styles.sass";
import TextModalBox from "../UI/TextModalBox";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Benefits = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLogined = useSelector((state) => state.auth.isLogined);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              <h2 className='heading'>Преимущества работы с нами</h2>
            </div>
            <div className='benefitsText'>
              <p className='text'>
                Обучение в ProSkill обеспечивает актуальные знания и практические навыки, трудоустройство после
                успешного окончания курсов. Преподаватели делятся реальным опытом и инсайтами. Гибкий график позволяет
                учиться в удобное время, что делает процесс максимально эффективным и доступным.
              </p>
            </div>
            <div className='btnContainer'>
              {isLogined ? (
                <Link to='/payment'>
                  <Button className='outline'> Покупка курса</Button>
                </Link>
              ) : (
                <Link to='/auth'>
                  <Button className='outline'> Покупка курса</Button>
                </Link>
              )}
              <Button
                className='outline'
                onClick={openModal}
              >
                Пройти тест
              </Button>
              {isModalOpen && <TextModalBox onClick={closeModal} />}
            </div>
          </div>
          <div className='blob first'></div>

          <div className='blob second'></div>
          <div className='benefitsCards'>
            <div className='cardsBox'>
              <BenefitsCard
                icon='icon-pen'
                title='Преподаватели '
                textFront='Только лучшие в своем деле!'
                textBack='
                За плечами у наших преподавателей многолетний опыт работы и оточенные профессиональные навыки'
              />
            </div>
            <div className='cardsBox'>
              <BenefitsCard
                icon='icon-medal'
                title='Знания'
                textFront='Доступ к ресурсам в любое время.'
                textBack='
                Онлайн-библиотека с более, чем 100+ книг по продажам, маркетингу и психологии. Мы собрали видео-нарезки, новости и  статьи со всего интернета.'
              />
              <BenefitsCard
                icon='icon-shield'
                title='Трудоустройство'
                textFront='Сможете попробовать себя в новой профессии'
                textBack='
                После успешного прохождения нашего курса, мы гарантируем трудоустройство, где вы сможете подкрепить полученные знания, практикой.'
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
