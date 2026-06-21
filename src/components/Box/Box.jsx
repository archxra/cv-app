import React from 'react';
import './Box.scss';

function Box({ title, content, children }) {
  return (
    <section className="box">
      {title && <h2 className="box__title">{title}</h2>}
      <div className="box__body">
        {content && <p className="box__content">{content}</p>}
        {children}
      </div>
    </section>
  );
}

export default Box;
