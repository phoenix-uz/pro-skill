import React, { useState } from "react";
import firstGalaxyUser from "../../assets/images/firstGalaxyUser.png";
import secondGalaxyUser from "../../assets/images/secondGalaxyUser.png";
import thirdGalaxyUser from "../../assets/images/thirdGalaxyUser.png";
import forthGalaxyUser from "../../assets/images/forthGalaxyUser.png";
import fithGalaxyUser from "../../assets/images/fifthGalaxyUser.png";
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
    { id: 6, dataContent: "content6", style: { "--i": 6 }, img: forthGalaxyUser, alt: "content6" },
    { id: 7, dataContent: "content7", style: { "--i": 7 }, img: fithGalaxyUser, alt: "content7" },
    { id: 8, dataContent: "content8", style: { "--i": 8 }, img: thirdGalaxyUser, alt: "content8" },
  ];
  const lineBoxContent = [
    { id: 1, dataContent: "content1", img: firstGalaxyUser, alt: "content1", text: "Hey, I'm Joge" },
    { id: 2, dataContent: "content2", img: secondGalaxyUser, alt: "content2", text: "Hey, I'm Alexa" },
    { id: 3, dataContent: "content3", img: thirdGalaxyUser, alt: "content3", text: "Hey, I'm Anna" },
    { id: 4, dataContent: "content4", img: forthGalaxyUser, alt: "content4", text: "Hey, I'm Sam" },
    { id: 5, dataContent: "content5", img: fithGalaxyUser, alt: "content5", text: "Hey, I'm Susana" },
    { id: 6, dataContent: "content6", img: forthGalaxyUser, alt: "content6", text: "Hey, I'm Sam" },
    { id: 7, dataContent: "content7", img: fithGalaxyUser, alt: "content7", text: "Hey, I'm Susana" },
    { id: 8, dataContent: "content8", img: thirdGalaxyUser, alt: "content8", text: "Hey, I'm Anna" },
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
