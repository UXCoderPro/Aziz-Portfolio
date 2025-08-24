import React from "react";
import Heading from "./uiProjects/Heading";
import { InfiniteMovingCards } from "./uiTest/Cards";
import { testimonials } from "../Data/index";

const Testimonial = () => {
  return (
    <div className="bg-blue pb-56 w-full h-auto flex justify-start items-center flex-col relative">
      <Heading
        Title="Testimonials"
        Paragrah=""
        content="Kind Words from my Clients"
      />

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default Testimonial;
