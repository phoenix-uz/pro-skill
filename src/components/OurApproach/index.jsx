import React from "react";
import ourApproach from "../../assets/images/ourApproach.png";
import "./styles.sass";

const OurApproach = () => {
  return (
    <section className='ourApproach'>
      <div className='container'>
        <div className='ourApproachContainer'>
          <div className='ourApproachBox'>
            <div className='imageBox'>
              <img
                className='img'
                src={ourApproach}
                alt='ourApproach'
              />
              <div className='mainHeading'>
                <h2 className='heading'>
                  <span className='primary'>Наш подход к обучению</span>
                </h2>
              </div>
            </div>
          </div>
          <div className='ourApproachBox'>
            <div className='boxHeading'>
              <h2 className='heading'>Менеджер по продажам</h2>
            </div>
            <div className='boxText'>
              <p className='text'>
                Обучение менеджера по продажам основан на сочетании теоретических знаний и практических навыков. Мы
                понимаем, что в быстро меняющемся мире маркетинга важно не только знать основные концепции, но и уметь
                применять их на практике. Поэтому каждый наш курс включает в себя актуальные кейсы, интерактивные
                задания и реальные проекты.
              </p>
              <p className='text'>
                Наши преподаватели — это эксперты с многолетним опытом работы в сфере продаж, готовые поделиться своими
                знаниями и инсайтами. Мы создаем комфортную и поддерживающую среду, где каждый студент может задать
                вопросы и получить обратную связь. Особое внимание уделяется персонализации обучения: студенты могут
                выбирать темп прохождения курсов, а также ставить конкретные карьерные цели.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
