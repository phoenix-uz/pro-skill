import React, { useState } from "react";

const TestComponent = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [checkboxData, setCheckboxData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const tests = [
    {
      question: "Question 1",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      question: "Question 2",
      options: ["Option A", "Option B", "Option C"],
    },
    {
      question: "Question 3",
      options: ["Option A", "Option B", "Option C"],
    },
    // Add more test questions as needed
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
    setCheckboxData([]); // Reset checkbox data for the next test
    setCurrentCardIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmit = () => {
    // Handle submission logic, e.g., send data to server
    console.log("Submitted data:", checkboxData);
    setSubmitted(true);
  };

  const renderTestCard = () => {
    const currentTest = tests[currentCardIndex];
    return (
      <>
        <h1>Test Card {currentCardIndex + 1}</h1>
        <h2>{currentTest.question}</h2>
        {currentTest.options.map((option) => (
          <label key={option}>
            <input
              type='checkbox'
              value={option}
              checked={checkboxData.includes(option)}
              onChange={handleCheckboxChange}
            />
            {option}
          </label>
        ))}
        {currentCardIndex < tests.length - 1 ? (
          <button onClick={handleNextCard}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit Test</button>
        )}
      </>
    );
  };

  return (
    <div>
      {!submitted && renderTestCard()}
      {submitted && <p>Test submitted successfully!</p>}
    </div>
  );
};

export default TestComponent;
