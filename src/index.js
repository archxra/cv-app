import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft, faChevronUp, faBars, faTimes, faPencilAlt,
  faPlus, faEnvelope, faPhone, faMapMarkerAlt, faExternalLinkAlt,
  faUser, faGraduationCap, faBriefcase, faStar, faImages,
  faAddressCard, faComment, faTrash
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(
  faChevronLeft, faChevronUp, faBars, faTimes, faPencilAlt,
  faPlus, faEnvelope, faPhone, faMapMarkerAlt, faExternalLinkAlt,
  faUser, faGraduationCap, faBriefcase, faStar, faImages,
  faAddressCard, faComment, faTrash,
  faGithub, faTelegram, faLinkedin
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
