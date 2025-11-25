// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Добро пожаловать в мини-опросник!</h1>
      <p>Пройдите небольшой тест, чтобы узнать, какое направление в IT вам подходит больше всего.</p>
      <Link to="/quiz">
        <button className="start-button">Начать опрос</button>
      </Link>
    </div>
  );
};

export default HomePage;