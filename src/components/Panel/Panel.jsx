import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import PhotoBox from '../PhotoBox/PhotoBox';
import Navigation from '../Navigation/Navigation';
import { userData } from '../../services/data';
import './Panel.scss';

function Panel({ activeSection, isCollapsed, onToggle }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="panel-mobile-bar">
        <span className="panel-mobile-bar__name">{userData.name}</span>
        <button
          className="panel-mobile-bar__toggle"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <FontAwesomeIcon icon={mobileOpen ? 'times' : 'bars'} />
        </button>
      </header>

      {mobileOpen && (
        <div className="panel-overlay" onClick={closeMenu} aria-hidden="true" />
      )}

      <div className={`panel-wrap ${isCollapsed ? 'panel-wrap--collapsed' : ''}`}>
        <aside className={`panel ${mobileOpen ? 'panel--mobile-open' : ''}`}>
          <div className="panel__inner">
            <PhotoBox
              name={userData.name}
              title={userData.title}
              avatar={userData.avatar}
            />
            <Navigation activeSection={activeSection} onNavClick={closeMenu} />
            <div className="panel__footer">
              <button
                className="panel__go-back"
                onClick={() => navigate('/home')}
              >
                <FontAwesomeIcon icon="chevron-left" />
                <span>Go back</span>
              </button>
            </div>
          </div>
        </aside>

        <button
          className="panel-toggle"
          onClick={onToggle}
          aria-label={isCollapsed ? 'Expand panel' : 'Collapse panel'}
        >
          <FontAwesomeIcon
            icon="chevron-left"
            style={{ transform: isCollapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}
          />
        </button>
      </div>
    </>
  );
}

export default Panel;