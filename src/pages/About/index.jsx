import React from "react";
import PagesIntro from "../../components/UI/PagesIntro";
import AboutCard from "../../components/UI/AboutCard";
import cardAboutInfo1 from "../../assets/images/about3.jpg";
import cardAboutInfo2 from "../../assets/images/about5.jpg";
import cardAboutInfo3 from "../../assets/images/about6.jpg";
import Achivements from "../../components/Achievements";
import "./styles.sass";

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <div className='container'>
        <PagesIntro
          introIcon='icon-notebookBookmark'
          introTitle='О нас'
          introText='Мы всегда открыты к вашим предложением для совершенствования нашей платформы. Наша задача сделать процесс обучения комфортным и интересным.'
        ></PagesIntro>
        <div className='aboutPageContainer'>
          <AboutCard
            title='Компания Pro Skill'
            text='Мы представляем собой современную образовательную платформу, предоставляющую доступ современным и востребованным профессиям. Основное преимущество нашей компании заключается в гибкости и удобстве: обучаться можно в любое время и в любом месте, что особенно важно в условиях современной занятости.'
            image={cardAboutInfo1}
          />
          <video
            autoPlay
            muted
            loop
            className='videoAbout'
          >
            <source
              src='https://proskill-academy.com/video/002.mp4'
              type='video/mp4'
            />
          </video>
          <Achivements />
          <AboutCard
            title='Наша миссия'
            text='Эти достижения являются результатом слаженной работы нашей команды профессионалов, которая стремится к постоянному улучшению и удовлетворению потребностей наших клиентов. Мы гордимся достигнутым и нацелены на дальнейшее развитие и успех.'
            image={cardAboutInfo2}
            className='infoReverse'
          />
          {/* <AboutCard
            title='Bizning vazifamiz'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud'
            image={cardAboutInfo3}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
