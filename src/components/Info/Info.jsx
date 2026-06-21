import React from 'react';
import './Info.scss';

function Info({ text }) {
  return (
    <div className="info">
      <p className="info__text">{text}</p>
    </div>
  );
}

export default Info;
