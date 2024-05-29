import React from "react";
import "./styles.sass";

const Timeline = () => {
  return (
    <section className='timeline'>
      <div className='container'>
        <div className='sectionTitleBlack'>
          <h3 className='title'>Процесс обучения</h3>
        </div>
        <div className='timelineItems'>
          <div className='timelineItem'>
            <div className='timelineDot'></div>
            <div className='timelineTitle'>
              <h4 className='title'>Тест</h4>
            </div>
            <div className='timelineText'>
              <p className='text'>Вы проходите тест, и мы определим сколько модулей вам стоит пройти.</p>
            </div>
          </div>
          <div className='timelineItem'>
            <div className='timelineDot'></div>
            <div className='timelineTitle'>
              <h4 className='title'>Оформление курса</h4>
            </div>
            <div className='timelineText'>
              <p className='text'>
                Выбираете нужный вам тариф, производится оплата и вы становитесь частью нашего комьнити.
              </p>
            </div>
          </div>

          <div className='timelineItem'>
            <div className='timelineDot'></div>
            <div className='timelineTitle'>
              <h4 className='title'>Обучение</h4>
            </div>
            <div className='timelineText'>
              <p className='text'>
                В удобное для вас время приступаете к изучению материала, в чем вам помогут наши менторы.
              </p>
            </div>
          </div>
          <div className='timelineItem'>
            <div className='timelineDot'></div>
            <div className='timelineTitle'>
              <h4 className='title'>Оффер</h4>
            </div>
            <div className='timelineText'>
              <p className='text'>
                Благополучно заканчиваете курсы и вам предоставляется возможность трудоустроиться в компанию-партнера.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
