import React from "react";
import "./skills.css";
import { SkillCard } from "./skillCard";

interface SkillsListProps {
  skills: string[];
}

export const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  const [cardVisible, setCardVisible] = React.useState(false);
  const [skill, setSkill] = React.useState();

  const handleSkillClick = (skill: any) => {
    setSkill(skill);
    setCardVisible(true);
  };

  return (
    <div className="skills-list">
      <>
        {skills.map((skill, index) => (
          <div
            role="button"
            onClick={handleSkillClick.bind(null, skill)}
            key={index}
            className="skill"
          >
            {skill.title}
          </div>
        ))}

        {cardVisible && skill
          ? (
            <SkillCard
              title={skill.title}
              icon={skill.icon}
              desc={skill.desc}
              exp={skill.exp}
              onClose={() => setCardVisible(false)}
            />
          )
          : ""}
      </>
    </div>
  );
};
