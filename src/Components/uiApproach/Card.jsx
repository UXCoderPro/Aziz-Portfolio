"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./Canvas";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-32  flex flex-col lg:flex-row items-center justify-center bg-blue w-full  mx-auto px-8">
        <Card
          title="Discover & Define"
          icon={<AceternityIcon btnName="Phase1" />}
          description="I begin by understanding the client’s vision, user pain points, and business goals. Through research, competitor analysis, and user journey mapping, I define clear problem statements and set the foundation for meaningful design."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Design & Prototype"
          icon={<AceternityIcon btnName="Phase2" />}
          description="Translating insights into solutions, I create wireframes, user flows, and interactive prototypes. My focus is on usability, accessibility, and modern aesthetics—ensuring every design decision enhances the overall user experience."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
        </Card>
        <Card
          title="Build & Deliver"
          icon={<AceternityIcon btnName="Phase3" />}
          description="As a web developer, I bring designs to life with clean, responsive, and scalable code. I collaborate closely with clients and developers to ensure the final product matches the vision and performs seamlessly across devices."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({ title, icon, children, description }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] bg-blue max-w-sm w-full mx-auto p-4  lg:h-[35rem] rounded-3xl relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0  transition duration-200 w-full  mx-auto flex items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  justify-center">
          {icon}
        </div>

        <h2 className="dark:text-white font-amiri text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative text-center z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className=" font-publicSans text-base opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-text-light mt-4  font-normal text-center group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ btnName }) => {
  return (
    <>
      <button className=" inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#10132E,45%,#1e2631,55%,#10132E)] bg-[length:200%_100%] px-6 font-amiri font-bold text-blue-pink transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        {btnName}
      </button>
    </>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
