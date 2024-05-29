import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoursesData } from "../../data";
import PagesIntro from "../../components/UI/PagesIntro";
import coursesImage from "../../assets/images/corses.png";
import LibraryCard from "../../components/UI/LibraryCard";
import library1 from "../../assets/images/course1.jpg";
import library2 from "../../assets/images/course2.jpg";
import coursesImage1 from "../../assets/images/courses8.png";
import coursesImage2 from "../../assets/images/courses12.jpg";
import coursesImage3 from "../../assets/images/courses13.jpg";
import Price from "../../components/Price";
import "./styles.sass";

const CoursesPage = () => {
  const { id } = useParams();
  const [pagesData, setPagesData] = useState();
  useEffect(() => {
    setPagesData(CoursesData.filter((courses) => courses.id == id));
  }, [id]);
  return !pagesData ? (
    <>Loading</>
  ) : (
    <div className='coursesPage'>
      <div className='container'>
        <div className='coursesPageContainer'>
          <PagesIntro
            introIcon='icon-Notebook'
            introTitle='Онлайн курс'
            introText='Самый доступный и удобный способ освоить новую профессию и получить знания из любой точки мира.'
          ></PagesIntro>
          {pagesData.map((item, index) => (
            <div
              className='pagesData'
              key={index}
            >
              <div className='coursesInfo'>
                <div className='infoContainer'>
                  <div className='coursesHeader'>
                    <div className='headerTitle'>
                      <h3 className='title'>Цель курса</h3>
                    </div>
                    <div className='headerSubtitle'>
                      <p className='subTitle'>
                        Вы узнаете и научитесь как влиять на свой результат в продажах, чтобы много и стабильно
                        зарабатывать, расти по карьерной лестнице, быть на хорошем счету у руководителя, быть ценным,
                        дорогим и востребованным специалистом.
                      </p>
                    </div>
                  </div>
                  <div className='coursesBody'>
                    <div className='imageBox'>
                      <img
                        src={coursesImage1}
                        alt='coursesImage'
                        className='img'
                      />
                    </div>
                    <div className='imageBox'>
                      <img
                        src={coursesImage2}
                        alt='coursesImage'
                        className='img'
                      />
                    </div>
                    <div className='imageBox'>
                      <img
                        src={coursesImage3}
                        alt='coursesImage'
                        className='img'
                      />
                    </div>
                  </div>
                  <div className='coursesFooter'>
                    <div className='footerDuration'>
                      <p className='duration'>{item.courseInfo.courseDuration}</p>
                    </div>
                    <div className='teacherName'>
                      <p className='name'>{item.courseInfo.courseTeaxher}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='coursesList'>
                <div className='listContainer'>
                  <div className='listItems'>
                    <div className='listHeading'>
                      <div className='listTitle'>
                        <h4 className='titile'>Преимущества профессии </h4>
                      </div>
                      <div className='listSubtitle'>
                        <p className='subtitle'>Урок 01</p>
                      </div>
                    </div>
                    <div className='listDuration'>
                      <div className='durationIcon'>
                        <i className='icon-Play'></i>
                      </div>
                      <div className='durationText'>
                        <p className='text'>45 минут</p>
                      </div>
                    </div>
                  </div>
                  <div className='listItems'>
                    <div className='listHeading'>
                      <div className='listTitle'>
                        <h4 className='titile'>Продажа это</h4>
                      </div>
                      <div className='listSubtitle'>
                        <p className='subtitle'>Урок 02</p>
                      </div>
                    </div>
                    <div className='listDuration'>
                      <div className='durationIcon'>
                        <i className='icon-Play'></i>
                      </div>
                      <div className='durationText'>
                        <p className='text'>45 минут</p>
                      </div>
                    </div>
                  </div>
                  <div className='listItems'>
                    <div className='listHeading'>
                      <div className='listTitle'>
                        <h4 className='titile'>Этапы продаж и цели</h4>
                      </div>
                      <div className='listSubtitle'>
                        <p className='subtitle'>Урок 03</p>
                      </div>
                    </div>
                    <div className='listDuration'>
                      <div className='durationIcon'>
                        <i className='icon-Play'></i>
                      </div>
                      <div className='durationText'>
                        <p className='text'>45 минут</p>
                      </div>
                    </div>
                  </div>
                  <div className='listItems'>
                    <div className='listHeading'>
                      <div className='listTitle'>
                        <h4 className='titile'>Результативность и эффективность</h4>
                      </div>
                      <div className='listSubtitle'>
                        <p className='subtitle'>Урок 04</p>
                      </div>
                    </div>
                    <div className='listDuration'>
                      <div className='durationIcon'>
                        <i className='icon-Play'></i>
                      </div>
                      <div className='durationText'>
                        <p className='text'>45 минут</p>
                      </div>
                    </div>
                  </div>
                  <div className='listItems'>
                    <div className='listHeading'>
                      <div className='listTitle'>
                        <h4 className='titile'>Воронка продаж</h4>
                      </div>
                      <div className='listSubtitle'>
                        <p className='subtitle'>Урок 05</p>
                      </div>
                    </div>
                    <div className='listDuration'>
                      <div className='durationIcon'>
                        <i className='icon-Play'></i>
                      </div>
                      <div className='durationText'>
                        <p className='text'>45 минут</p>
                      </div>
                    </div>
                  </div>
                  <div className='listItems'>
                    <div className='listHeading'>
                      <div className='listTitle'>
                        <h4 className='titile'>Чек лист </h4>
                      </div>
                      <div className='listSubtitle'>
                        <p className='subtitle'>Урок 06</p>
                      </div>
                    </div>
                    <div className='listDuration'>
                      <div className='durationIcon'>
                        <i className='icon-Play'></i>
                      </div>
                      <div className='durationText'>
                        <p className='text'>45 минут</p>
                      </div>
                    </div>
                  </div>
                  <div className='listItems'>
                    <div className='listHeading'>
                      <div className='listTitle'>
                        <h4 className='titile'>Скрипт</h4>
                      </div>
                      <div className='listSubtitle'>
                        <p className='subtitle'>Урок 07</p>
                      </div>
                    </div>
                    <div className='listDuration'>
                      <div className='durationIcon'>
                        <i className='icon-Play'></i>
                      </div>
                      <div className='durationText'>
                        <p className='text'>45 минут</p>
                      </div>
                    </div>
                  </div>
                  <div className='listItems'>
                    <div className='listHeading'>
                      <div className='listTitle'>
                        <h4 className='titile'>Разбор звонков </h4>
                      </div>
                      <div className='listSubtitle'>
                        <p className='subtitle'>Урок 08</p>
                      </div>
                    </div>
                    <div className='listDuration'>
                      <div className='durationIcon'>
                        <i className='icon-Play'></i>
                      </div>
                      <div className='durationText'>
                        <p className='text'>45 минут</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='coursesCards'>
                <LibraryCard
                  key={index}
                  image={library1}
                  alt={item.coursesCards.secondPage.teacherName}
                  contentText={item.coursesCards.secondPage.teacherName}
                  iconDuration='icon-Play'
                  durationText={item.coursesCards.secondPage.duration}
                  totalNumver={item.coursesCards.secondPage.title}
                  btnText='Приобрести курс'
                  btnLink={item.coursesCards.secondPage.btnLink}
                  infoText={item.coursesCards.secondPage.subtitle}
                />
                <LibraryCard
                  key={index}
                  image={library2}
                  alt={item.coursesCards.thirdPage.teacherName}
                  contentText={item.coursesCards.thirdPage.teacherName}
                  iconDuration='icon-Play'
                  durationText={item.coursesCards.thirdPage.duration}
                  totalNumver={item.coursesCards.thirdPage.title}
                  btnText='Приобрести курс'
                  btnLink={item.coursesCards.thirdPage.btnLink}
                  infoText={item.coursesCards.thirdPage.subtitle}
                />
              </div>
            </div>
          ))}
          <div className='coursesPrice'>
            <Price />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
