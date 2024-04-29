import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./styles.sass";

const ReviewsSlider = () => {
  const reviewsItems = [
    {
      id: 1,
      message:
        " We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend",
      name: "Emily Johnson",
      from: "USA, California",
    },
    {
      id: 2,
      message:
        " We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend",
      name: "John Johnson",
      from: "USA, California",
    },
    {
      id: 3,
      message:
        " We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend",
      name: "Alex Johnson",
      from: "USA, California",
    },
    {
      id: 4,
      message:
        " We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend",
      name: "lily Johnson",
      from: "USA, California",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={50}
        loop={true}
        autoplay={{ delay: 100 }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        speed={3200}
        className='reviewsSlider'
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          420: {
            slidesPerView: 1,
          },
          577: {
            slidesPerView: 1,
          },
          865: {
            slidesPerView: 2,
          },
          911: {
            slidesPerView: 3,
          },
        }}
      >
        {reviewsItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='sliderContainer'>
              <div className='sliderMessage'>
                <div className='messageText'>
                  <p className='text'>{item.message}</p>
                </div>
              </div>
              <div className='sliderBottomItems'>
                <div className='itemInfo'>
                  <div className='infoTitle'>
                    <h4 className='title'>{item.name}</h4>
                  </div>
                  <div className='infoSubtitle'>
                    <p className='subTitle'>{item.from}</p>
                  </div>
                </div>
                <div className='itemStars'>
                  <div className='star'>
                    <i className='icon-star-full'></i>
                  </div>
                  <div className='star'>
                    <i className='icon-star-full'></i>
                  </div>
                  <div className='star'>
                    <i className='icon-star-full'></i>
                  </div>
                  <div className='star'>
                    <i className='icon-star-full'></i>
                  </div>
                  <div className='star'>
                    <i className='icon-star-full'></i>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewsSlider;
