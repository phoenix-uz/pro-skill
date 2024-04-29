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
            introText='We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please do not hesitate to reach out to us using any of the following contact methods'
          >
            <Quote />
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
