import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const quizData = [
  { question: 'How many days did the Romans have in a week?', options: ['5', '6', '7', '8'], answer: '8' },
  { question: 'Which year did the Titanic sink?', options: ['1900', '1912', '1921', '1901'], answer: '1912' },
  { question: 'Who created The Last Supper?', options: ['Da Vinci', 'Rembrandt', 'Michelangelo', 'Van Gogh'], answer: 'Da Vinci' },
  { question: 'Where did the first human civilization emerge?', options: ['Babylon', 'Indus Valley', 'Egypt', 'Mesopotamia'], answer: 'Mesopotamia' },
  { question: 'How many colors are present in a rainbow?', options: ['5', '6', '7', '8'], answer: '7' }
];

function QuizPage({ isDarkMode }) {
  const [index, setIndex] = useState(0);
  const [pickedOption, setPickedOption] = useState('');
  const [points, setPoints] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const handleSelect = (option) => {
    setPickedOption(option);
  };

  const nextQuestion = () => {
    if (pickedOption === quizData[index].answer) {
      setPoints(points + 1);
    } else {
      setIncorrect(incorrect + 1);
    }

    setPickedOption('');
    setIndex(index + 1);
  };

  return (
    <div className="quiz-area">
      <div className="progress-container">
        <div className="progress-fill" style={{ width: `${((index + 1) / quizData.length) * 100}%` }}></div>
      </div>

      {index < quizData.length ? (
        <div className={`wrapper fade-effect ${isDarkMode ? 'dark-mode-card' : 'light-mode-card'}`}>
          <h2><center><u>Question {index + 1}</u></center></h2>
          <p>{quizData[index].question}</p>
          <div>
            {quizData[index].options.map((option, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  id={option}
                  name="options"
                  value={option}
                  checked={pickedOption === option}
                  onChange={() => handleSelect(option)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <div className="btn-container">
            <center><button onClick={nextQuestion}>Next</button></center>
          </div>
        </div>
      ) : (
        <div className={`wrapper fade-effect ${isDarkMode ? 'dark-mode-card' : 'light-mode-card'}`}>
          <h2>Quiz finished!</h2>
          <p>Your score: {points}</p>
          <p>Incorrect answers: {incorrect}</p>
          <Link to="/">
            <center><button className="return-home-btn">Return Home</button></center>
          </Link>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
