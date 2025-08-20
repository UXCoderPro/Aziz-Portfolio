"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "../../lib/utils";
import logo from "../../assets/logo.svg"; // Adjust the path as necessary

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit   fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-[rgba(105,113,162,0.16)] rounded-2xl dark:bg-[rgba(9,0,38,0.30)] backdrop-blur- bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-6 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        <button className=" relative  px-4 py-2 ">
          <img src={logo} alt="Abdul Aziz" className="w-36 h-auto" />
          <span className="absolute inset-x-0 w-2/3 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-light to-transparent  h-px" />
        </button>
        {navItems.map((navItem, idx) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-6  "
            )}
          >
            <span className="block sm:hidden  ">{navItem.icon}</span>
            <span className="hidden sm:block text-normal font-amiri font-normal text-white hover:bg-blue-light hover:bg-clip-text hover:text-transparent ">
              {navItem.name}
            </span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
export default FloatingNav;
