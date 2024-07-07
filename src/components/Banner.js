// components/Banner.js
import React from 'react';

const Banner = ({ title, subtitle, buttons }) => (
  <div className="banner">
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <div className="button-container">
      {buttons.map((button, index) => (
        <button key={index} onClick={() => window.open(button.href, '_blank')}>
          {button.text}
        </button>
      ))}
    </div>
  </div>
);

export default Banner;