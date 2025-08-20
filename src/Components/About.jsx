import React from "react";
import { LampDemo } from "./uiPortfolio/Lamp";
import { ShootingStars } from "./uiPortfolio/ShootingStarts";
import { StarsBackground } from "./uiPortfolio/Stars";
import Grid from "./uiAbout/Grid";

const About = () => {
  return (
    <section
      id="about"
      className=" pb-40 z-9 bg-blue w-full h-auto flex justify-center items-center flex-col relative"
    >
      <LampDemo />
      <ShootingStars />
      <StarsBackground />
      <Grid />
    </section>
  );
};

export default About;
