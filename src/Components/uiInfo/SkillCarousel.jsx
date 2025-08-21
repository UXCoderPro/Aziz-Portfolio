import React from "react";
import SkillContainer from "./SkillContainer";
import { skills } from "../../Data/index";
import { motion } from "framer-motion";

const SkillCarousel = ({ direction = "left" }) => {
  return (
    <motion.div
      animate={
        direction === "left"
          ? { x: ["0%", "-100%"] } // move left
          : { x: ["-50%", "0%"] } // move right
      }
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 50, // adjust speed
        ease: "linear",
      }}
      className="flex gap-7"
    >
      {[...skills, ...skills, ...skills].map((item, i) => (
        <SkillContainer key={i} icon={item.icon} />
      ))}
    </motion.div>
  );
};

export default SkillCarousel;
