import React, { useState } from "react";
import firstGalaxyUser from "../../assets/images/img1 1.png";
import secondGalaxyUser from "../../assets/images/img2.png";
import thirdGalaxyUser from "../../assets/images/img5 (1).png";
import forthGalaxyUser from "../../assets/images/img4.png";
import fithGalaxyUser from "../../assets/images/img6.png";
import sixthGalaxyUser from "../../assets/images/img3.png";
import sevenGalaxyUser from "../../assets/images/img81.png";
import eightGalaxyUser from "../../assets/images/img91.png";
import "./styles.sass";

const GalaxyBanner = () => {
  const [activeContentId, setActiveContentId] = useState(null);

  const handleMouseOver = (e) => {
    const id = e.target.dataset.id;
    setActiveContentId(id);
  };

  const imageBoxContent = [
    { id: 1, dataContent: "content1", style: { "--i": 1 }, img: firstGalaxyUser, alt: "content1" },
    { id: 2, dataContent: "content2", style: { "--i": 2 }, img: secondGalaxyUser, alt: "content2" },
    { id: 3, dataContent: "content3", style: { "--i": 3 }, img: thirdGalaxyUser, alt: "content3" },
    { id: 4, dataContent: "content4", style: { "--i": 4 }, img: forthGalaxyUser, alt: "content4" },
    { id: 5, dataContent: "content5", style: { "--i": 5 }, img: fithGalaxyUser, alt: "content5" },
    { id: 6, dataContent: "content6", style: { "--i": 6 }, img: sixthGalaxyUser, alt: "content6" },
    { id: 7, dataContent: "content7", style: { "--i": 7 }, img: sevenGalaxyUser, alt: "content7" },
    { id: 8, dataContent: "content8", style: { "--i": 8 }, img: eightGalaxyUser, alt: "content8" },
  ];
  const lineBoxContent = [
    { id: 1, dataContent: "content1", img: firstGalaxyUser, alt: "content1", text: "Привет, я Дамир" },
    { id: 2, dataContent: "content2", img: secondGalaxyUser, alt: "content2", text: "Привет, я Эльвира" },
    { id: 3, dataContent: "content3", img: thirdGalaxyUser, alt: "content3", text: "Привет, я Людмила" },
    { id: 4, dataContent: "content4", img: forthGalaxyUser, alt: "content4", text: "Привет, я Анастасия" },
    { id: 5, dataContent: "content5", img: fithGalaxyUser, alt: "content5", text: "Привет, я Рустам" },
    { id: 6, dataContent: "content6", img: sixthGalaxyUser, alt: "content6", text: "Привет, я Александра" },
    { id: 7, dataContent: "content7", img: sevenGalaxyUser, alt: "content7", text: "Привет, я Екатерина" },
    { id: 8, dataContent: "content8", img: eightGalaxyUser, alt: "content8", text: "Привет, я Махмуд" },
  ];

  return (
    <div className='galaxyBanner'>
      <div className='bannerContainer'>
        {imageBoxContent.map((item, index) => (
          <div
            onMouseOver={(e) => handleMouseOver(e)}
            className={`imageBox ${activeContentId === item.dataContent ? "active" : ""}`}
            data-id={item.dataContent}
            style={item.style}
            key={index}
          >
            <img
              src={item.img}
              alt={item.alt}
              data-id={item.dataContent}
              className='img'
            />
          </div>
        ))}
      </div>
      <div className='line'>
        {lineBoxContent.map((item, index) => (
          <div
            className={`lineBox ${activeContentId === item.dataContent ? "active" : ""}`}
            id={item.dataContent}
            key={index}
          >
            <div className='lineCard'>
              <div className='imageBox'>
                <img
                  src={item.img}
                  alt={item.alt}
                  className='img'
                />
              </div>
              <div className='lineText'>
                <p className='text'>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalaxyBanner;
