// Альтернативный вариант Quiz.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import { quizData } from '../data/quizData';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const navigate = useNavigate();

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerSelect = (answerScore) => {
    const newAnswers = [...userAnswers, answerScore];
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const scoreCount = {};
      newAnswers.forEach(score => {
        scoreCount[score] = (scoreCount[score] || 0) + 1;
      });
      
      let mostFrequentScore = '';
      let maxCount = 0;
      for (const [score, count] of Object.entries(scoreCount)) {
        if (count > maxCount) {
          mostFrequentScore = score;
          maxCount = count;
        }
      }
      navigate(`/result?resultType=${mostFrequentScore}`);
    }
  };

  const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;

  return (
    <div className="quiz-container">
      <h2>Опросник</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      
      {/* Простой и надежный вывод */}
      <div style={{ textAlign: 'center', margin: '15px 0' }}>
        <strong>Вопрос {currentQuestionIndex + 1} из {quizData.length}</strong>
      </div>
      
      <Question 
        question={currentQuestion} 
        onAnswerSelect={handleAnswerSelect}
      />
    </div>
  );
};

export default Quiz;