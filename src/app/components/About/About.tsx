import React from "react";
import Image from "next/image";
import AboutMeImg from "../../../../public/AboutMeImg.png";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="h-screen bg-bg-1 flex items-center justify-center p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-3/4 p-8 bg-bg-2 rounded-lg shadow-xl gap-10"
      >
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl text-brand-1 font-bold border-b-4 border-brand-1 inline-block pb-2">
            About Me
          </h1>
          <p className="text-lg text-grey leading-8">
            Hello! I’m <span className="font-semibold">Hasnain Khan</span>, a
            passionate Full-Stack Developer dedicated to crafting seamless and
            efficient web applications. With experience in{" "}
            <span className="font-semibold">React</span>,{" "}
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">Node.js</span>, and{" "}
            <span className="font-semibold">TypeScript</span>, I thrive on
            building robust solutions.
          </p>
          <p className="text-lg text-grey leading-8">
            My strong foundation in software engineering principles allows me to
            write clean, maintainable, and scalable code. I excel in both
            independent projects and collaborative team environments.
          </p>
          <p className="text-lg text-grey leading-8">
            Outside of coding, I enjoy experimenting with new technologies,
            contributing to open-source projects, and tackling challenges on
            platforms like <span className="font-semibold">LeetCode</span>.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={AboutMeImg}
              alt="Hasnain's Portrait"
              width={320}
              height={320}
              className="rounded-full object-cover shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
