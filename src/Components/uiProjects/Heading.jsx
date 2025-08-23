import React from "react";
import { motion } from "motion/react";

const Heading = ({ Title, Paragrah, content }) => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-32 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl font-amiri"
      >
        {Title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" text-text-light  text-center font-publicsans text-[14px] md:text-[18px] lg:text-[20px] max-w-7xl"
      >
        {Paragrah}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-5 self-stretch text-white text-center font-amiri lg:text-3xl
        sm:text-2xl font-bold leading-[44px]"
      >
        {content}
      </motion.h2>
    </>
  );
};

export default Heading;
