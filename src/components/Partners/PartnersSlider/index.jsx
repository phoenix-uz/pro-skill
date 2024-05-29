import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import click from "../../../assets/images/Click.png";
import payme from "../../../assets/images/payme.png";
import hamkor from "../../../assets/images/Hamkorbank.png";
import ofb from "../../../assets/images/OFB.png";
import uzum from "../../../assets/images/Uzum.png";
import notion from "../../../assets/images/notion.png";
import netflix from "../../../assets/images/netflix.png";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./styles.sass";

const PartnersSlider = () => {
  const PartnersSlideImages = [
    { id: 1, img: click, alt: "click" },
    { id: 2, img: payme, alt: "payme" },
    { id: 3, img: hamkor, alt: "hamkor" },
    { id: 4, img: ofb, alt: "ofb" },
    { id: 5, img: uzum, alt: "uzum" },
    { id: 1, img: click, alt: "click" },
    { id: 2, img: payme, alt: "payme" },
    { id: 3, img: hamkor, alt: "hamkor" },
    { id: 4, img: ofb, alt: "ofb" },
    { id: 5, img: uzum, alt: "uzum" },
  ];

  return (
    <>
      <Swiper
        spaceBetween={50}
        // slidesPerView={6}
        loop={true}
        autoplay={{ delay: 100 }}
        freeMode={true}
        modules={[Autoplay]}
        speed={1200}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          420: {
            slidesPerView: 3,
          },
          577: {
            slidesPerView: 4,
          },
          911: {
            slidesPerView: 5,
          },
          1100: {
            slidesPerView: 6,
          },
        }}
      >
        {PartnersSlideImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='imagesBlock'>
              <img
                src={item.img}
                alt={item.alt}
                className='img'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PartnersSlider;
