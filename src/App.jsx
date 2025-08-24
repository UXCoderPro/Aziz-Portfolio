import React from "react";

import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import AboutInfo from "./Components/AboutInfo";
import Project from "./Components/Project";
import NavbarSize from "./Components/Nav-Bar";
import Testimonial from "./Components/Testimonial";
import Approach from "./Components/Approach";

const App = () => {
  return (
    <div className="relative w-full bg-blue overflow-hidden">
      <NavbarSize />
      <Hero />
      <Portfolio />
      <About />
      <AboutInfo />
      <Project />
      <Testimonial />
      <Approach />
    </div>
  );
};

export default App;
