import React, { useState } from 'react';
import './Portfolio.scss';

function Portfolio({ data = [] }) {
  const [active, setActive] = useState('all');
  const allTags = ['all', ...Array.from(new Set(data.flatMap(p => p.tags)))];
  const filtered = active === 'all' ? data : data.filter(p => p.tags.includes(active));

  return (
    <div className="portfolio">
      <div className="portfolio__filters" role="tablist">
        {allTags.map(tag => (
          <button
            key={tag}
            className={`portfolio__filter${active === tag ? ' portfolio__filter--active' : ''}`}
            onClick={() => setActive(tag)}
            role="tab"
            aria-selected={active === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      <ul className="portfolio__grid" role="tabpanel">
        {filtered.map(item => (
          <li key={item.id} className="portfolio__card">
            <div className="portfolio__image-wrap">
              <img
                className="portfolio__image"
                src={item.image}
                alt={item.title}
              />
              <div className="portfolio__hover">
                <h3 className="portfolio__title">{item.title}</h3>
                <p className="portfolio__desc">{item.desc}</p>
                <a
                  href={item.link}
                  className="portfolio__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View resource
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
