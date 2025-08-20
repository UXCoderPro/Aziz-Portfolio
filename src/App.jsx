import React from "react";
import FloatingNav from "./Components/uiHero/floating-navbar";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";

const App = () => {
  const navItems = [
    { name: "About", link: "/" },
    { name: "Skills", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Contact", link: "/" },
  ];
  return (
    <div className="relative w-full bg-blue overflow-hidden">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Portfolio />
      <About />
    </div>
  );
};

export default App;
