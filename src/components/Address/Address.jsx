import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Address.scss';

function Address({ email, phone, location, github, itch }) {
  return (
    <address className="address">
      {phone && (
        <a href={`tel:${phone}`} className="address__item">
          <span className="address__icon"><FontAwesomeIcon icon="phone" /></span>
          <span className="address__value">{phone}</span>
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`} className="address__item">
          <span className="address__icon"><FontAwesomeIcon icon="envelope" /></span>
          <span className="address__value">{email}</span>
        </a>
      )}
      {github && (
        <a href={github} className="address__item" target="_blank" rel="noopener noreferrer">
          <span className="address__icon"><FontAwesomeIcon icon={['fab', 'github']} /></span>
          <span className="address__value">{github}</span>
        </a>
      )}
      {itch && (
        <a href={itch} className="address__item" target="_blank" rel="noopener noreferrer">
          <span className="address__icon"><FontAwesomeIcon icon="images" /></span>
          <span className="address__value">{itch}</span>
        </a>
      )}
      {location && (
        <span className="address__item">
          <span className="address__icon"><FontAwesomeIcon icon="map-marker-alt" /></span>
          <span className="address__value">{location}</span>
        </span>
      )}
    </address>
  );
}

export default Address;
