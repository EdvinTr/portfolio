import React from "react";
import { SkillCard } from "./SkillCard";
import { skillsData } from "./skills-data";
interface SkillCardListProps {}

export const SkillCardList: React.FC<SkillCardListProps> = ({}) => {
  return (
    <div className="flex flex-wrap gap-7 lg:gap-8">
      {skillsData.map((skill, idx) => {
        return <SkillCard skill={skill} key={idx} />;
      })}
    </div>
  );
};
