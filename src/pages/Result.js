import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { results } from '../data/quizData';

const Result = () => {
  const [searchParams] = useSearchParams();
  const resultType = searchParams.get('resultType');

  const result = results[resultType] || {
    title: "Результат не определён",
    description: "Попробуйте пройти тест ещё раз."
  };

  return (
    <div className="result-container">
      <h2>Ваш результат:</h2>
      <h3>{result.title}</h3>
      <p>{result.description}</p>
      <Link to="/">
        <button className="retry-button">Пройти ещё раз</button>
      </Link>
    </div>
  );
};

export default Result;