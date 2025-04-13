import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Magicbutton from "./ui/Magicbutton";
import { FaDownload, FaLocationArrow } from "react-icons/fa";
import Gradientbutton from "./ui/Gradientbutton";
import Profile from "./ui/Profile";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 bg-blue-gradient-200">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-80 left-full h-[60vh] w-[20vw]"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-white-200 max-w-100 font-amiri">
            Dynamic Web Magic with Creativity with code
          </h1>

          <TextGenerateEffect
            className="text-center max-w-full text-[40px] md:text-5xl lg:text-6xl font-publicsans "
            words="Transforming Concepts into Seamless User Experiences"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl font-amiri text-white-200">
            Hi! I&apos;m Abdul Aziz, a UI/UX Designer & Front End Web Developer.
          </p>

          <div className="flex flex-col md:flex-row gap-4  w-full justify-center items-center">
            <a href="#about">
              <Magicbutton
                title="Show My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a href="#resume">
              <Gradientbutton
                title="Get Resume"
                icon={<FaDownload />}
                position="right"
              />
            </a>
          </div>

          <div className="flex justify-center items-center mt-20">
            <Profile src="/Asset/Aziz.png" alt="Abdul Aziz" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
