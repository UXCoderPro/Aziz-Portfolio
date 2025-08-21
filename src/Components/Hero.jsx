import React from "react";
import { Spotlight } from "./uiHero/Spotlight";
import Grid from "./uiHero/Grid";
import { TextGenerateEffect } from "./uiHero/text-generate";
import MagicBtn from "./uiHero/MagicBtn";
import { GiChainedArrowHeads } from "react-icons/gi";
import { GiCloudDownload } from "react-icons/gi";
import Profile from "./uiHero/Profile";
import Aziz from "../assets/Aziz.png"; // Adjust the path as necessary

const Hero = () => {
  return (
    <div className="w-full h-screen ">
      <div className="z-9 ">
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
      <Grid />

      <div className="flex justify-center items-center relative lg:my-40 my-28  z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest lg:text-lg md:text-base text-sm text-center text-text-light max-w-100 font-amiri font-normal">
            Dynamic Web Magic with Creativity with code
          </h1>

          <TextGenerateEffect
            className="text-center max-w-full text-[40px] md:text-5xl lg:text-7xl font-publicsans "
            words="Transforming Concepts into Seamless User Experiences"
          />

          <p className="text-center mt-4 md:tracking-wider mb-4 text-base md:text-lg lg:text-2xl font-amiri font-normal text-text-light">
            Hi! I&apos;m Abdul Aziz, a UI/UX Designer & Front End Web Developer.
          </p>

          <div className="flex mt-9 flex-col md:flex-row gap-6  w-full justify-center items-center ">
            <a href="#about">
              <MagicBtn
                title="View My Work"
                icon={<GiChainedArrowHeads />}
                position="right"
                color="bg-btn-purple"
                shadow={true}
              />
            </a>
            <a href="#Resume">
              <MagicBtn
                title="Get Resume"
                icon={<GiCloudDownload />}
                position="right"
                color="bg-btn-black"
                outline={true}
              />
            </a>
          </div>

          <div className="flex justify-center items-center lg:mt-20 mt-14">
            <Profile src={Aziz} alt="Abdul Aziz" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
