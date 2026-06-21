import React from 'react';
import './TimeLine.scss';

function TimeLine({ data = [] }) {
  const sorted = [...data].sort((a, b) => a.date - b.date);

  return (
    <div className="timeline" role="list" aria-label="Timeline">
      {sorted.map((item, idx) => (
        <article key={idx} className="timeline__item" role="listitem">
          <div className="timeline__year">
            <time dateTime={String(item.date)}>{item.dateLabel || item.date}</time>
          </div>
          <div className="timeline__marker">
            <span className="timeline__dot" />
            <span className="timeline__line" />
          </div>
          <div className="timeline__content">
            <h3 className="timeline__title">{item.title}</h3>
            <p className="timeline__text">{item.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default TimeLine;
