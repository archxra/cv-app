import React from 'react';
import './PhotoBox.scss';

function PhotoBox({ name, title, avatar }) {
  return (
    <div className="photobox">
      <div className="photobox__avatar-wrap">
        <img
          className="photobox__avatar"
          src={avatar || 'https://via.placeholder.com/80'}
          alt={name}
        />
      </div>
      <h2 className="photobox__name">{name}</h2>
      {title && <p className="photobox__title">{title}</p>}
    </div>
  );
}

export default PhotoBox;
