import { motion } from "framer-motion";
import React from "react";
import { SkillCard } from "./SkillCard";
import { skillsData } from "./skills-data";
interface SkillCardListProps {}

export const SkillCardList: React.FC<SkillCardListProps> = ({}) => {
  return (
    <motion.div
      className="flex flex-wrap gap-7 lg:gap-8"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      {skillsData.map((skill, idx) => {
        return <SkillCard skill={skill} key={idx} />;
      })}
    </motion.div>
  );
};
