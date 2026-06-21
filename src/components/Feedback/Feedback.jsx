import React from 'react';
import './Feedback.scss';

function Feedback({ data = [] }) {
  return (
    <ul className="feedback-list" aria-label="Testimonials">
      {data.map((item, idx) => (
        <li key={idx} className="feedback-item">
          <blockquote className="feedback-item__quote">
            <p className="feedback-item__text">{item.feedback}</p>
          </blockquote>
          <footer className="feedback-item__footer">
            {item.reporter.photoUrl && (
              <img
                className="feedback-item__avatar"
                src={item.reporter.photoUrl}
                alt={item.reporter.name}
              />
            )}
            <cite className="feedback-item__name">{item.reporter.name}</cite>
          </footer>
        </li>
      ))}
    </ul>
  );
}

export default Feedback;
