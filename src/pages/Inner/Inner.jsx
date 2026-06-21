import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Panel from '../../components/Panel/Panel';
import Box from '../../components/Box/Box';
import Info from '../../components/Info/Info';
import TimeLine from '../../components/TimeLine/TimeLine';
import Expertise from '../../components/Expertise/Expertise';
import Skills from '../../components/Skills/Skills';
import Portfolio from '../../components/Portfolio/Portfolio';
import Address from '../../components/Address/Address';
import Feedback from '../../components/Feedback/Feedback';
import {
  userData, educationData, experienceData,
  skillsData, portfolioData, feedbackData, aboutText
} from '../../services/data';
import './Inner.scss';

const sectionIds = ['about', 'education', 'experience', 'skills', 'portfolio', 'contacts', 'feedback'];

function Inner() {
  const [activeSection, setActiveSection] = useState('about');
  const [panelCollapsed, setPanelCollapsed] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const handleScroll = () => {
      setShowBackTop(el.scrollTop > 300);

      // Determine active section by scroll position
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && el.scrollTop >= section.offsetTop - 80) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('about');
  };

  return (
    <div className="inner">
      <Panel
        activeSection={activeSection}
        isCollapsed={panelCollapsed}
        onToggle={() => setPanelCollapsed(prev => !prev)}
      />

      <main
        className={`inner__content ${panelCollapsed ? 'inner__content--expanded' : ''}`}
        ref={contentRef}
      >
        <section id="about" className="inner__section">
          <Box title="About me">
            <Info text={aboutText} />
          </Box>
        </section>

        <section id="education" className="inner__section">
          <Box title="Education">
            <TimeLine data={educationData} />
          </Box>
        </section>

        <section id="experience" className="inner__section">
          <Box title="Experience">
            <Expertise data={experienceData} />
          </Box>
        </section>

        <section id="skills" className="inner__section">
          <Box title="Skills">
            <Skills data={skillsData} />
          </Box>
        </section>

        <section id="portfolio" className="inner__section">
          <Box title="Portfolio">
            <Portfolio data={portfolioData} />
          </Box>
        </section>

        <section id="contacts" className="inner__section">
          <Box title="Contacts">
            <Address
              email={userData.email}
              phone={userData.phone}
              location={userData.location}
              github={userData.github}
              itch={userData.itch}
            />
          </Box>
        </section>

        <section id="feedback" className="inner__section">
          <Box title="Feedbacks">
            <Feedback data={feedbackData} />
          </Box>
        </section>

        {showBackTop && (
          <button
            className="inner__back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FontAwesomeIcon icon="chevron-up" />
          </button>
        )}
      </main>
    </div>
  );
}

export default Inner;
