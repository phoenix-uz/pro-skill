import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import zapier from "../../../assets/images/zapier.png";
import spotify from "../../../assets/images/spotify.png";
import zoom from "../../../assets/images/zoom.png";
import amazon from "../../../assets/images/amazon.png";
import adobe from "../../../assets/images/adobe.png";
import notion from "../../../assets/images/notion.png";
import netflix from "../../../assets/images/netflix.png";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./styles.sass";

const PartnersSlider = () => {
  const PartnersSlideImages = [
    { id: 1, img: zapier, alt: "zapier" },
    { id: 2, img: spotify, alt: "spotify" },
    { id: 3, img: zoom, alt: "zoom" },
    { id: 4, img: amazon, alt: "amazon" },
    { id: 5, img: adobe, alt: "adobe" },
    { id: 6, img: notion, alt: "notion" },
    { id: 7, img: netflix, alt: "netflix" },
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
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PartnersSlider;
