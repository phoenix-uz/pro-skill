import React from "react";
import Avatar from "../Avatar";
import GalaxyBanner from "../GalaxyBanner";
import "./styles.sass";

const Intro = () => {
  return (
    <section className='intro'>
      <div className='blob first'></div>
      <div className='container'>
        <div className='intoContainer'>
          <div className='introItems'>
            <div className='blob first'></div>
            <div className='introHeading'>
              <h1 className='heading'>
                {" "}
                Меняй свою жизнь и достигай новых вершин вместе с <span className='introLogo'> Pro Skill</span>
              </h1>
            </div>
            <div className='introSubtitle'>
              <p className='subtitle'>
                Квалифицированные менторы, более — студентов прошли наш курс и успешно были трудоустроены. Присоединяйся
                и ты, получай знания, прокачивай свои скиллы, зарабатывай.
              </p>
            </div>
            <Avatar />
            <div className='blob first'></div>
            <div className='totalAmount'>
              <div className='totalAmountContainer'>
                <div className='total line'>
                  <div className='totalNumber'>700</div>
                  <div className='text'>bizning talabalarimiz</div>
                </div>
                <div className='total'>
                  <div className='totalNumber'>30</div>
                  <div className='text'>o'qituvchilar</div>
                </div>
              </div>
            </div>
          </div>
          <div className='blob first'></div>
          <div className='introBanner'>
            <div className='blob first'></div>
            <GalaxyBanner />
          </div>
        </div>
        <div className='blob first'></div>
      </div>
    </section>
  );
};

export default Intro;
