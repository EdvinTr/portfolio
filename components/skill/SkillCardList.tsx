import React from "react";
import { SkillCard } from "./SkillCard";
import { skillsData } from "./skills-data";
interface SkillCardListProps {}

export const SkillCardList: React.FC<SkillCardListProps> = ({}) => {
  return (
    <div className=" grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-8">
      {skillsData.map((skill, idx) => {
        return <SkillCard skill={skill} key={idx} />;
      })}
    </div>
  );
};
