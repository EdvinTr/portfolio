import React from "react";
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
    <a
      href={skill.href}
      rel="noopener noreferrer"
      target="_blank"
      className={`hover:scale-110 transition-transform duration-150`}
      aria-label={`${skill.name} documentation`}
    >
      <div className={`max-w-[5.5rem]`} {...props}>
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
