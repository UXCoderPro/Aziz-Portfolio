import React from "react";
import { ShootingStars } from "./uiPortfolio/ShootingStarts";
import { StarsBackground } from "./uiPortfolio/Stars";
import Skills from "./uiInfo/Skills";
import SkillDescription from "./uiInfo/SkillDescription";
import { LampContainer } from "./uiPortfolio/Lamp";

const AboutInfo = () => {
  return (
    <section
      id="skills"
      className=" bg-blue w-full h-fit flex justify-start items-center flex-col relative"
    >
      <ShootingStars />
      <StarsBackground />
      <Skills />
      <SkillDescription />
      <LampContainer rotate="rotate-180" />
    </section>
  );
};

export default AboutInfo;
