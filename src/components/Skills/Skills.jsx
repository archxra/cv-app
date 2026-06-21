import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import './Skills.scss';

function Skills({ data = [] }) {
  const [skills, setSkills] = useState(data);
  const [editOpen, setEditOpen] = useState(false);
  const [name, setName] = useState('');
  const [range, setRange] = useState('');

  const levels = ['Beginner', 'Proficient', 'Expert', 'Master'];

  const addSkill = () => {
    const r = parseInt(range, 10);
    if (!name.trim() || isNaN(r) || r < 0 || r > 100) return;
    setSkills(prev => [...prev, { name: name.trim(), range: r }]);
    setName('');
    setRange('');
  };

  const removeSkill = (idx) => {
    setSkills(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="skills">
      <div className="skills__header">
        <Button
          icon={<FontAwesomeIcon icon="pencil-alt" />}
          text="Open edit"
          onClick={() => setEditOpen(prev => !prev)}
          variant="default"
        />
      </div>

      {editOpen && (
        <div className="skills__form">
          <div className="skills__form-row">
            <label className="skills__label" htmlFor="skill-name">Skill name:</label>
            <input
              id="skill-name"
              className="skills__input"
              type="text"
              placeholder="Enter skill name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="skills__form-row">
            <label className="skills__label" htmlFor="skill-range">Skill range:</label>
            <input
              id="skill-range"
              className="skills__input"
              type="number"
              placeholder="Enter skill range (0-100)"
              value={range}
              onChange={e => setRange(e.target.value)}
              min="0"
              max="100"
            />
          </div>
          <Button
            icon={<FontAwesomeIcon icon="plus" />}
            text="Add skill"
            onClick={addSkill}
            variant="default"
          />
        </div>
      )}

      <div className="skills__bars">
        {skills.map((skill, idx) => (
          <div className="skills__bar-item">
            <div className="skills__bar-track">
              <div
                className="skills__bar-fill"
                style={{ width: `${skill.range}%` }}
                role="progressbar"
                aria-valuenow={skill.range}
                aria-valuemin={0}
                aria-valuemax={100}
              />
              <div className="skills__bar-label">
                <span>{skill.name}</span>
                {editOpen && (
                  <button
                    className="skills__remove"
                    onClick={() => removeSkill(idx)}
                    aria-label={`Remove ${skill.name}`}
                  >
                    <FontAwesomeIcon icon="trash" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="skills__legend">
        {levels.map(l => (
          <span key={l} className="skills__legend-item">{l}</span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
