import React from "react";
import { LampDemo } from "./ui/Lamp";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const About = () => {
  return (
    <div className="w-full pb-10 z-9 bgg-blue-100 flex justify-center items-center flex-col">
      <div className="h-screen rounded-md bgg-blue-100 flex flex-col items-center justify-center relative w-full">
        <LampDemo />
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
};

export default About;
