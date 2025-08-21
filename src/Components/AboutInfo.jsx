import React from "react";
import { ShootingStars } from "./uiPortfolio/ShootingStarts";
import { StarsBackground } from "./uiPortfolio/Stars";
import Skills from "./uiInfo/Skills";
import SkillDescription from "./uiInfo/SkillDescription";
import { LampContainer, LampDemo } from "./uiPortfolio/Lamp";

const AboutInfo = () => {
  return (
    <div className=" bg-blue w-full h-fit flex justify-start items-center flex-col relative">
      <ShootingStars />
      <StarsBackground />
      <Skills />
      <SkillDescription />
      <LampContainer rotate="rotate-180" />
    </div>
  );
};

export default AboutInfo;
