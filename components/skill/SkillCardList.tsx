import React from "react";
import { createRampingArray } from "../../utils/createRampingArray";
import { SkillCard } from "./SkillCard";
import { skillsData } from "./skills-data";
interface SkillCardListProps {}

export const SkillCardList: React.FC<SkillCardListProps> = ({}) => {
  const animationDurations: number[] = createRampingArray(
    skillsData.length,
    0.1,
    0.7
  );
  return (
    <div className="flex flex-wrap gap-7 lg:gap-8">
      {skillsData.map((skill, idx) => {
        return (
          <SkillCard
            skill={skill}
            key={idx}
            animate={{ opacity: [0, 1] }}
            transition={{
              duration: animationDurations[idx],
            }}
          />
        );
      })}
    </div>
  );
};
