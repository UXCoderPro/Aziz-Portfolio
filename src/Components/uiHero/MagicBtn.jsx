import { motion } from "motion/react";
import React from "react";

const MagicBtn = ({
  title,
  icon,
  position,
  handleClick,
  color,
  outline = false,
  shadow = false,
}) => {
  const outlineClasses = outline
    ? "border-solid border-[rgba(105,113,162,0.40)] border"
    : "";
  const shadowClasses = shadow ? "shadow-purple-custom" : "";
  return (
    <motion.button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 py-4 px-6 md:py-4 md:px-8 lg:py-6 lg:px-10 lg:rounded-2xl rounded-xl ${color} ${outlineClasses} ${shadowClasses} text-white font-amiri lg:text-lg text-base  font-normal`}
      initial={{ opacity: 0, scale: 0.9 }} // fade + shrink on mount
      animate={{ opacity: 1, scale: 1 }} // grow into place
      whileHover={{ scale: 1.05, y: -2 }} // subtle pop + lift
      whileTap={{ scale: 0.95, y: 0 }} // press down effect
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </motion.button>
  );
};

export default MagicBtn;
