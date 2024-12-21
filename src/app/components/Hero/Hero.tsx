"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";
import Introduction from "./Introduction";
import InfoCard from "./InfoCard";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-bg1 text-white">
      <Navbar />
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between p-6 lg:p-10 gap-6 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/3 flex justify-center lg:justify-start"
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
          className="w-full lg:w-1/3 flex justify-center lg:justify-end"
        >
          <InfoCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
