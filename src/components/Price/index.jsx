import React from "react";
import Button from "../UI/Button";
import "./styles.sass";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Price = () => {
  const priceCardInfo = [
    {
      id: 1,
      price: "99.000 so‘m",
      name: "Dars",
      text: "Buning ichiga kiradi",
      infoText: [{ text: "1 + 1 dars" }, { text: "1 PDF" }, { text: "5 audio yozuvlar" }, { text: "Ustoz" }],
    },
    {
      id: 2,
      price: "499.000 so‘m",
      className: "primary",
      name: "Modul",
      text: "Buning ichiga kiradi",
      infoText: [
        { text: "6 dan 9 gacha video kurslar" },
        { text: "10 PDF" },
        { text: "50 audio yozuvlar" },
        { text: "Ustoz" },
      ],
    },
    {
      id: 3,
      price: "3.999.000 so‘m",
      name: "Kurs",
      text: "Buning ichiga kiradi",
      infoText: [
        { text: "9 modullar" },
        { text: "48 videolar" },
        { text: "48 PDF" },
        { text: "1000 audio yozuvlar" },
        { text: "+ kompaniyadan maxfiy sovg‘a" },
        { text: "Ustoz" },
      ],
    },
  ];

  const handleCourseName = (name) => {
    Cookies.set("name", name);
  };
  return (
    <section
      className='price'
      id='price'
    >
      <div className='container'>
        <div className='priceCardContainer'>
          {priceCardInfo.map((item, index) => (
            <div
              className={`priceCard ${item.className}`}
              key={index}
            >
              <div className='cardBox'>
                <div className='cardItems'>
                  <div className='cardSubtitle'>
                    <p className='subtitle'>{item.name}</p>
                  </div>
                  <div className='cardTitle'>
                    <h4 className='title'>{item.price}</h4>
                  </div>
                  <div className='cardText'>
                    <p className='text'>{item.text}:</p>
                  </div>
                  {item.infoText.map((item, index) => (
                    <div
                      className='cardInfo'
                      key={index}
                    >
                      <div className='infoIcon'>
                        <i className='icon-Pointer'></i>
                      </div>
                      <div className='infoText'>
                        <p className='text'>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {Cookies.get("access_token") ? (
                  <Link
                    to='/payment'
                    className='cardBtn'
                  >
                    <Button onClick={() => handleCourseName(item.name)}>Sotib olish</Button>
                  </Link>
                ) : (
                  <Link
                    to='/auth'
                    className='cardBtn'
                  >
                    <Button>Приобрести курс</Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
