import React from 'react';
import './skills.css';

interface SkillsListProps {
  skills: string[];
}

export const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  return (
    <div className="skills-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          {skill}
        </div>
      ))}
    </div>
  );
};

