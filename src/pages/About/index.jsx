import React from "react";
import "./styles.sass";
import PagesIntro from "../../components/UI/PagesIntro";
import AboutCard from "../../components/UI/AboutCard";
import cardAboutInfo from "../../assets/images/cardAboutInfo.png";
import Achivements from "../../components/Achievements";

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <div className='container'>
        <PagesIntro
          introIcon='icon-notebookBookmark'
          introTitle='Biz Hakimizda'
          introText='We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please do not hesitate to reach out to us using any of the following contact methods'
        ></PagesIntro>
        <div className='aboutPageContainer'>
          <AboutCard
            title='Pro Skill kompaniya haqida'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud'
            image={cardAboutInfo}
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
            title='Bizning vazifamiz'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud'
            image={cardAboutInfo}
            className='infoReverse'
          />
          <AboutCard
            title='Bizning vazifamiz'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud'
            image={cardAboutInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
