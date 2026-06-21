import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navigation.scss';

const navItems = [
  { href: '#about',      icon: 'user',          label: 'About me'   },
  { href: '#education',  icon: 'graduation-cap', label: 'Education'  },
  { href: '#experience', icon: 'briefcase',      label: 'Experience' },
  { href: '#skills',     icon: 'star',           label: 'Skills'     },
  { href: '#portfolio',  icon: 'images',         label: 'Portfolio'  },
  { href: '#contacts',   icon: 'address-card',   label: 'Contacts'   },
  { href: '#feedback',   icon: 'comment',        label: 'Feedback'   },
];

function Navigation({ activeSection, onNavClick }) {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <ul className="navigation__list">
        {navItems.map(({ href, icon, label }) => {
          const id = href.replace('#', '');
          const isActive = activeSection === id;
          return (
            <li key={href} className="navigation__item">
              <a
                href={href}
                className={`navigation__link${isActive ? ' navigation__link--active' : ''}`}
                onClick={onNavClick}
              >
                <span className="navigation__icon">
                  <FontAwesomeIcon icon={icon} />
                </span>
                <span className="navigation__label">{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
