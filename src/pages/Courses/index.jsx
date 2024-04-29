import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoursesData } from "../../data";
import PagesIntro from "../../components/UI/PagesIntro";
import coursesImage from "../../assets/images/corses.png";
import LibraryCard from "../../components/UI/LibraryCard";
import library from "../../assets/images/library.png";
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
            introTitle='Bizning onlayn kurslar'
            introText='We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please do not hesitate to reach out to us using any of the following contact methods'
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
                      <h3 className='title'>{item.courseInfo.title}</h3>
                    </div>
                    <div className='headerSubtitle'>
                      <p className='subTitle'>{item.courseInfo.subtitle}</p>
                    </div>
                  </div>
                  <div className='coursesBody'>
                    <div className='imageBox'>
                      <img
                        src={coursesImage}
                        alt='coursesImage'
                        className='img'
                      />
                    </div>
                    <div className='imageBox'>
                      <img
                        src={coursesImage}
                        alt='coursesImage'
                        className='img'
                      />
                    </div>
                    <div className='imageBox'>
                      <img
                        src={coursesImage}
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
                  {item.coursesList.map((listInfo, index) => (
                    <div
                      className='listItems'
                      key={index}
                    >
                      <div className='listHeading'>
                        <div className='listTitle'>
                          <h4 className='titile'>{listInfo.title}</h4>
                        </div>
                        <div className='listSubtitle'>
                          <p className='subtitle'>{listInfo.subtitle}</p>
                        </div>
                      </div>
                      <div className='listDuration'>
                        <div className='durationIcon'>
                          <i className='icon-Play'></i>
                        </div>
                        <div className='durationText'>
                          <p className='text'>{listInfo.duration}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='coursesCards'>
                <LibraryCard
                  key={index}
                  image={library}
                  alt={item.coursesCards.secondPage.teacherName}
                  contentText={item.coursesCards.secondPage.teacherName}
                  iconDuration='icon-Play'
                  durationText={item.coursesCards.secondPage.duration}
                  totalNumver={item.coursesCards.secondPage.title}
                  btnText='Kutubhonaga otish'
                  btnLink={item.coursesCards.secondPage.btnLink}
                  infoText={item.coursesCards.secondPage.subtitle}
                />
                <LibraryCard
                  key={index}
                  image={library}
                  alt={item.coursesCards.thirdPage.teacherName}
                  contentText={item.coursesCards.thirdPage.teacherName}
                  iconDuration='icon-Play'
                  durationText={item.coursesCards.thirdPage.duration}
                  totalNumver={item.coursesCards.thirdPage.title}
                  btnText='Kutubhonaga otish'
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
