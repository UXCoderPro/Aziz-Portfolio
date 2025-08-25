import React from "react";

import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import AboutInfo from "./Components/AboutInfo";
import Project from "./Components/Project";
import NavbarSize from "./Components/Nav-Bar";
import Testimonial from "./Components/Testimonial";
import Approach from "./Components/Approach";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main className="relative w-full bg-blue overflow-clip flex justify-center items-center flex-col mx-auto ">
      <div className=" w-full">
        <NavbarSize />
        <Hero />
        <Portfolio />
        <About />
        <AboutInfo />
        <Project />
        <Testimonial />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default App;
