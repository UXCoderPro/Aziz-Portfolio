import React from "react";
import Heading from "./uiProjects/Heading";
import { CanvasRevealEffectDemo } from "./uiApproach/Card";

const Approach = () => {
  return (
    <div className="bg-blue h-auto pb-28 w-full flex justify-start items-center flex-col relative ">
      <Heading
        Title="My Approach"
        Paragrah=""
        content="How I Work With Clients"
      />

      <CanvasRevealEffectDemo />
    </div>
  );
};

export default Approach;
