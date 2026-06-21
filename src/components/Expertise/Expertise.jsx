import React from 'react';
import './Expertise.scss';

function Expertise({ data = [] }) {
  return (
    <ul className="expertise" aria-label="Experience list">
      {data.map((item, idx) => (
        <li key={idx} className="expertise__item">
          <div className="expertise__meta">
            <span className="expertise__company">{item.info.company}</span>
            <time className="expertise__date">{item.date}</time>
          </div>
          <div className="expertise__details">
            <h3 className="expertise__job">{item.info.job}</h3>
            <p className="expertise__desc">{item.info.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Expertise;
