import React from "react";
import { LampDemo } from "./ui/Lamp";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Grid from "@/components/Grid";

const About = () => {
  return (
    <div
      id="#About"
      className=" pb-1 z-9 bgg-blue-100 flex justify-center items-center flex-col relative"
    >
      <LampDemo />
      <ShootingStars />
      <StarsBackground />
      <Grid />
    </div>
  );
};

export default About;
