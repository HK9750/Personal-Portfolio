"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";
import Introduction from "./Introduction";
import InfoCard from "./InfoCard";

const Hero: React.FC = () => {
  return (
    <section className="h-screen bg-bg1 text-white">
      <Navbar />
      <div className="container mx-auto flex flex-col h-full lg:flex-row items-center justify-between p-10 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-start w-full lg:w-1/3"
        >
          <ProfileCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full lg:w-2/3"
        >
          <Introduction />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center lg:justify-end w-full lg:w-1/3"
        >
          <InfoCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
