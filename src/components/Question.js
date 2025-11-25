// src/components/Question.js
import React from 'react';

const Question = ({ question, onAnswerSelect }) => {
  return (
    <div className="question-container">
      <h3>{question.question}</h3>
      <div className="answers-list">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => onAnswerSelect(answer.score)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;