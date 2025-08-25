import React from "react";
import { motion } from "motion/react";

const SocialMedia = ({ icon, bgColor, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="social media link"
      className={`
        flex flex-wrap justify-center items-center ${bgColor} lg:w-10 lg:h-10 md:w-7 md:h-7 w-7 h-7 p-1 lg:rounded-xl cursor-pointer rounded-md text-white lg:text-2xl text-lg`}
      initial={{ opacity: 0, scale: 0.9 }} // fade + shrink on mount
      animate={{ opacity: 1, scale: 1 }} // grow into place
      whileHover={{ scale: 1.05, y: -2 }} // subtle pop + lift
      whileTap={{ scale: 0.95, y: 0 }} // press down effect
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {icon}
    </motion.a>
  );
};

export default SocialMedia;
