import React from "react";
import "./styles.sass";
import Intro from "../../components/Intro";
import Partners from "../../components/Partners";
import OurApproach from "../../components/OurApproach";
import Benefits from "../../components/Benefits";
import Timeline from "../../components/Timeline";
import Library from "../../components/Library";
import OurTeachers from "../../components/OurTeachers";
import CoursesInformation from "../../components/CoursesInformation";
import Reviews from "../../components/Reviews";
import Price from "../../components/Price";
import ContactsBlock from "../../components/ContactsBlock";

const MainPage = () => {
  return (
    <div>
      <Intro />
      <Partners />
      <OurApproach />
      <Benefits />
      <Timeline />
      <Library />
      <OurTeachers />
      <CoursesInformation />
      <Reviews />
      <Price />
      <ContactsBlock />
    </div>
  );
};

export default MainPage;
