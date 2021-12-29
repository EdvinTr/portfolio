import React from "react";
import { hoverScaleClassNames } from "../../styles/utilStyles";
import { SkillData } from "./skills-data";

interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  skill: SkillData;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  children,
  ...props
}) => {
  return (
    <a href={skill.href} rel="noopener noreferrer" target="_blank">
      <div
        className={`max-w-[5.5rem] ${hoverScaleClassNames} hover:scale-110 `}
        {...props}
      >
        <div
          className={`${skill.labelBackgroundColor} text-xs w-24 font-semibold mb-4 text-center`}
        >
          {skill.name.toUpperCase()}
        </div>
        <i className={`text-8xl ${skill.icon}`}></i>
      </div>
    </a>
  );
};
