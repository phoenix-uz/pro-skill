import React from "react";
import Button from "../UI/Button";
import firstTutor from "../../assets/images/firstTutor.png";
import coursesBg from "../../assets/images/coursesBg.png";
import "./styles.sass";

const CoursesInformation = () => {
  return (
    <section className='coursesInformation'>
      <div className='container'>
        <div className='coursesContainer'>
          <div className='coursesInfo'>
            <div className='infoHeader'>
              <div className='sectionTitleBlack'>
                <h3 className='title'>Online Video Courslar</h3>
              </div>
              <div className='sectionSubtitle'>
                <p className='subtitle'>We provide the best service that comes with the best results.</p>
              </div>
            </div>
            <div className='infoBody'>
              <div className='bodyBlock'>
                <div className='blockTitle'>
                  <h3 className='title'>Bepul Video Courslar</h3>
                </div>
                <div className='blockText'>
                  <p className='text'>
                    These courses are designed to help people learn new skills or improve existing ones through a series
                    of video lectures, interactive activities, and assessments.
                  </p>
                </div>
              </div>
              <div className='bodyBlock'>
                <div className='blockTitle'>
                  <h3 className='title'>Bepul Video Courslar</h3>
                </div>
                <div className='blockText'>
                  <p className='text'>
                    These courses are designed to help people learn new skills or improve existing ones through a series
                    of video lectures, interactive activities, and assessments.
                  </p>
                </div>
              </div>
            </div>
            <div className='inforFooter'>
              <Button>Kurslar</Button>
            </div>
          </div>
          <div className='coursesImagesGroup'>
            <div className='mainImageInformation'>
              <img
                src={coursesBg}
                alt='coursesBg'
                className='img'
              />
            </div>
            <div className='imagesContainer'>
              <div className='imageBox'>
                <img
                  src={firstTutor}
                  alt='firstTutor'
                  className='img'
                />
              </div>
              <div className='glass'>
                <h3 className='title'>The best cmm manager</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesInformation;
