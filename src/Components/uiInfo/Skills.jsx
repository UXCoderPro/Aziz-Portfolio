import React from "react";
import SkillCarousel from "./SkillCarousel";
import SkillContainer from "./SkillContainer";

const Skills = () => {
  return (
    <div className="lg:max-w-5xl [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] md:max-w-3xl max-w-full h-auto overflow-hidden relative text-white mt-60 flex flex-col justify-center items-start gap-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ">
        <SkillContainer
          bgColor="bg-white"
          bTop="border-t-[rgba(0,0,0,0.40)]"
          OtherClass={"lg:w-14 lg:h-14 w-8 h-8"}
          width="lg:w-20"
          height="lg:h-20"
        />
      </div>

      <SkillCarousel direction="left" />
      <SkillCarousel direction="right" />
      <SkillCarousel direction="left" />
    </div>
  );
};

export default Skills;
