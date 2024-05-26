import React from "react";
import "./styles.sass";
import PagesIntro from "../../components/UI/PagesIntro";
import Quote from "../../components/UI/Quote";
import CardNews from "../../components/UI/CardNews";
import NewsSlider from "../../components/NewsSlider";

const NewsPage = () => {
  return (
    <div className='newsPage'>
      <div className='container'>
        <div className='pageNewsContainer'>
          <PagesIntro
            introIcon='icon-Notebook'
            introTitle='Yangiliklar'
            introText='Важно следить за тенденциями, находится в информационной повестке и не отставать, тогда вы всегда будете востребованы и актуальны.'
          >
            <Quote
              name='Энди Уорхол'
              text='"Быть успешным в бизнесе - это самое увлекательное искусство. Делать деньги - это искусство и работа - это искусство, а хороший бизнес - лучшее искусство".'
            />
          </PagesIntro>
          <div className='cardsNewsContainer'>
            <div className='cards'>
              <CardNews />
              <CardNews />
            </div>
            <div className='cards'>
              <CardNews />
              <CardNews />
            </div>
            <div className='cards'>
              <CardNews />
              <CardNews />
            </div>
          </div>
        </div>
      </div>
      <div className='newsSliderContainer'>
        <NewsSlider />
      </div>
    </div>
  );
};

export default NewsPage;
