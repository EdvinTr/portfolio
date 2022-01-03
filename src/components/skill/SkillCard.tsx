import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import { SkillData } from "./skills-data";

interface SkillCardProps extends HTMLMotionProps<"div"> {
  skill: SkillData;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  children: _,
  ...props
}) => {
  return (
    <a
      href={skill.href}
      rel="noopener noreferrer"
      target="_blank"
      className={`hover:scale-110 transition-transform duration-150 rounded-md shadow-md `}
      aria-label={`${skill.name} documentation`}
    >
      <div
        className={`${skill.labelBackgroundColor} text-xs font-semibold mb-4 text-center`}
      >
        {skill.name.toUpperCase()}
      </div>
      <motion.div className={`p-2`} {...props}>
        <i className={`text-8xl ${skill.icon}`}></i>
      </motion.div>
    </a>
  );
};
