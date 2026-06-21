import React from 'react';
import './Button.scss';

function Button({ icon, text, onClick, variant = 'default', className = '' }) {
  return (
    <button
      className={`btn btn--${variant} ${className}`}
      onClick={onClick}
      type="button"
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {text && <span className="btn__text">{text}</span>}
    </button>
  );
}

export default Button;
