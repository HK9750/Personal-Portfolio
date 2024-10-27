import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

const page = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Skills />
    </React.Fragment>
  );
};
export default page;
