import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import firstTutor from "../../assets/images/firstTutor.png";
import secondTutor from "../../assets/images/secondTutor.png";
import "./styles.sass";
import { useSelector } from "react-redux";

const OurTeachers = () => {
  const isLogined = useSelector((state) => state.auth.isLogined);
  const teacherCard = [
    {
      id: 1,
      img: firstTutor,
      alt: "firstTutor",
      name: "Мишина Людмила",
      text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      text: "Бизнес-тренер по продажам, переговорам, управлению персоналом В продажах с 2007 года В обучении и развитии специалистов с 2012 года",
    },
    {
      id: 2,
      img: secondTutor,
      alt: "secondTutor",
      name: "Jane Cooper ",
      text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    },
    {
      id: 3,
      img: firstTutor,
      alt: "firstTutor",
      name: "Jane Cooper",
      text: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    },
  ];
  return (
    <section className='teachers'>
      <div className='container'>
        <div className='sectionTitleBlack'>
          <h3 className='title'>Bizning o'qituvchilarimiz</h3>
        </div>
        <div className='learnMore'>
          <Link
            className='link'
            to='/library'
          >
            Batafsil
          </Link>
        </div>
        <div className='cardsContainer'>
          {teacherCard.map((item, index) => (
            <div
              className='teacherCard'
              key={index}
            >
              <div className='cardImage'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='img'
                />
              </div>
              <div className='cardContent'>
                <div className='cardTitile'>
                  <h4 className='title'>{item.name}</h4>
                </div>
                <div className='cardText'>
                  <p className='text'>{item.text}</p>
                </div>
              </div>
              {isLogined ? (
                <Link
                  to='/payment'
                  className='cardBtn'
                >
                  <Button> Приобрести курс</Button>
                </Link>
              ) : (
                <Link
                  to='/auth'
                  className='cardBtn'
                >
                  <Button> Приобрести курс</Button>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className='skroll-btn'>
          <a
            href='#price'
            className='skrollContent'
          >
            <div className='skrollTitle'>
              <h3 className='title'>Достигайте своих целей вместе с</h3>
            </div>
            <div className='skrollText'>
              <span className='text'>Proskill</span>
            </div>
          </a>
          <a
            href='#price'
            className='arrowDown'
          >
            <i className='icon-Play'></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurTeachers;
