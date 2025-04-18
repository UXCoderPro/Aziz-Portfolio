import React from "react";
import { LampDemo } from "./ui/Lamp";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Grid from "@/components/Grid";

const About = () => {
  return (
    <div
      id="#About"
      className="w-full pb-1 z-9 bgg-blue-100 flex justify-center items-center flex-col"
    >
      <div className="relative w-full bgg-blue-100 flex flex-col items-center">
        <LampDemo />
        <ShootingStars />
        <StarsBackground />
        <Grid />
      </div>
    </div>
  );
};

export default About;
