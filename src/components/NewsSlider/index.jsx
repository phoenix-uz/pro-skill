import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./styles.sass";
import "./styles.sass";
import newsImage from "../../assets/images/newsSlider.png";
const NewsSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 100 }}
        freeMode={true}
        modules={[Autoplay]}
        speed={3200}
        className='newsSlider'
        breakpoints={{
          911: {
            slidesPerView: 1.5,
          },
        }}
      >
        <SwiperSlide>
          <div className='imageContainer'>
            <img
              src={newsImage}
              alt='newsImage'
              className='img'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imageContainer'>
            <img
              src={newsImage}
              alt='newsImage'
              className='img'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imageContainer'>
            <img
              src={newsImage}
              alt='newsImage'
              className='img'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imageContainer'>
            <img
              src={newsImage}
              alt='newsImage'
              className='img'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='imageContainer'>
            <img
              src={newsImage}
              alt='newsImage'
              className='img'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewsSlider;
