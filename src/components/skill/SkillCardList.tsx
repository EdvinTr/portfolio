import { motion } from "framer-motion";
import React from "react";
import { SkillCard } from "./SkillCard";
import { skillsData } from "./skills-data";
interface SkillCardListProps {}

export const SkillCardList: React.FC<SkillCardListProps> = ({}) => {
  // stagger children animation
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const variantItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
      className="flex flex-wrap gap-7 lg:gap-8"
      variants={containerVariant}
      initial="hidden"
      animate="show"
    >
      {skillsData.map((skill, idx) => {
        return (
          <SkillCard
            data-cy="skill-card"
            skill={skill}
            key={idx}
            variants={variantItem}
          />
        );
      })}
    </motion.div>
  );
};
