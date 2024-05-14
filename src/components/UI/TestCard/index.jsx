import React, { useState } from "react";
import Checkbox from "../CheckBox";
import testImage from "../../../assets/images/testImage.png";
import "./styles.sass";
import Button from "../Button";
import finishImage from "../../../assets/images/finishTest.png";

const TestCard = ({ onClick }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [checkboxData, setCheckboxData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const tests = [
    {
      question: "Nechi yoshda siz?",
      options: ["15-20", "20-25", "25-30", "Boshqasi"],
    },
    {
      question: "Nima bilan mashgulsiz?",
      options: ["Oqiman", "Ishliman", "Ishsizman", "Boshqasi"],
    },
    {
      question: "Question 3",
      options: ["Option A", "Option B", "Option C"],
    },
  ];

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckboxData((prevData) => [...prevData, value]);
    } else {
      setCheckboxData((prevData) => prevData.filter((item) => item !== value));
    }
  };

  const handleNextCard = () => {
    setCheckboxData([]);
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = () => {
    console.log("Submitted data:", checkboxData);
    setSubmitted(true);
  };

  const renderTestCard = () => {
    const currentTest = tests[currentCardIndex];
    return (
      <div className='testCard'>
        <div className='cardContainer'>
          <div className='cardHeader'>
            <div className='pageNumber'>
              <p className='number'>
                <span className='current'>{currentCardIndex + 1}</span>/10
              </p>
            </div>
            <div
              className='closeBtn'
              onClick={onClick}
            >
              <span className='close'></span>
            </div>
          </div>
          <div className='cardBody'>
            <div className='bodyImage'>
              <img
                src={testImage}
                alt='testImage'
                className='img'
              />
            </div>
            <div className='bodyTest'>
              <div className='testTitle'>
                <h4 className='title'>{currentTest.question}</h4>
              </div>
              <div className='tests'>
                {currentTest.options.map((option) => (
                  <Checkbox
                    key={option}
                    htmlFor={option}
                    id={option}
                    value={option}
                    isChecked={checkboxData.includes(option)}
                    onChange={handleCheckboxChange}
                    option={option}
                  />
                ))}
              </div>
            </div>
            {currentCardIndex < tests.length - 1 ? (
              <Button onClick={handleNextCard}>Kengisi</Button>
            ) : (
              <Button onClick={handleSubmit}>submit</Button>
            )}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {!submitted && renderTestCard()}
      {submitted && (
        <div className='testCard testFinishCard'>
          <div className='cardContainer'>
            <div className='cardHeader'>
              <div
                className='closeBtn'
                onClick={onClick}
              >
                <span className='close'></span>
              </div>
            </div>
            <div className='cardBody'>
              <div className='bodyImage'>
                <img
                  src={finishImage}
                  alt='testImage'
                />
              </div>
              <div className='cardTitle'>
                <h3 className='title'>Siz testdan muvaffaqiyatli otdingiz!</h3>
              </div>
              <div className='cardText'>
                <p className='text'>Natijalaringiz</p>
              </div>
              <div className='cardTextFinishBox'>
                <div className='boxTextContainer'>
                  <div className='boxTitle'>
                    <h4 className='title'>Sotuv boyicha menejeri</h4>
                  </div>
                  <div className='boxText'>
                    <p className='text'>
                      Learn the fundamentals of web design, including HTML, CSS, and responsive design principles.
                      Develop the skills to create visually appealing and user-friendly websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestCard;
