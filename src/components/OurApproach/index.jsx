import React from "react";
import ourApproach from "../../assets/images/ourApproach.png";
import "./styles.sass";

const OurApproach = () => {
  return (
    <section className='ourApproach'>
      <div className='container'>
        <div className='ourApproachContainer'>
          <div className='ourApproachBox'>
            <div className='imageBox'>
              <img
                className='img'
                src={ourApproach}
                alt='ourApproach'
              />
              <div className='mainHeading'>
                <h2 className='heading'>
                  <span className='primary'>O'rganishga</span> bizning yondashuvimiz
                </h2>
              </div>
            </div>
          </div>
          <div className='ourApproachBox'>
            <div className='boxHeading'>
              <h2 className='heading'>Текст</h2>
            </div>
            <div className='boxText'>
              <p className='text'>
                Damien Braun's love affair with photography began at a young age, nurtured by the captivating landscapes
                and vibrant cultures surrounding her in the heart of the USA. Her passion for storytelling through
                imagery led her to embark on a photography journey that has spanned over 15 years. Driven by an
                insatiable curiosity to explore the beauty in everyday moments, Damien has honed her craft meticulously.
                Her background in digital media provided her with a solid foundation, but it's her keen eye for detail
                and an innate ability to capture raw emotions that truly set her apart. Damien's journey is more than
                just taking pictures; it's about capturing the essence of the human spirit, the fleeting magic of
                nature, and the emotions that define our lives. With each click of her camera, she weaves stories that
                transcend time and space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
