"use client";
import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Project";
import { Footer } from "./components/Footer/Footer";

const page = () => {
  const sectionAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <React.Fragment>
      <Hero />
      <motion.section id="about" {...sectionAnimation}>
        <About />
      </motion.section>
      <motion.section id="skills" {...sectionAnimation}>
        <Skills />
      </motion.section>
      <motion.section id="projects" {...sectionAnimation}>
        <Projects />
      </motion.section>
      <Footer />
    </React.Fragment>
  );
};

export default page;
