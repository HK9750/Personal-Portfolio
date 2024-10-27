import React from "react";
import Image from "next/image";
import AboutMeImg from "../../../../public/AboutMeImg.png";

const About: React.FC = () => {
  return (
    <section className="h-screen bg-bg-1 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-3/4 p-10 bg-bg-2 rounded-lg shadow-lg gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl text-brand-1 font-bold border-b-4 border-brand-1 inline-block pb-2">
            About Me
          </h1>
          <p className="text-base text-grey leading-7">
            Hello! I’m Hasnain Khan, a passionate Full-Stack Developer with a
            love for creating seamless and efficient web applications. With
            extensive experience in React, Next.js, Node.js, and TypeScript, I
            specialize in building robust front-end solutions while ensuring
            smooth backend integrations.
          </p>
          <p className="text-base text-grey leading-7">
            I have a strong foundation in software engineering principles, which
            allows me to write clean, maintainable, and scalable code. Whether
            working solo on a project or collaborating with a team, I am
            committed to delivering high-quality solutions that meet user
            requirements and exceed expectations.
          </p>
          <p className="text-base text-grey leading-7">
            Outside of work, you can find me experimenting with new
            technologies, contributing to open-source projects, or diving into
            the world of problem-solving on platforms like LeetCode.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Image
            src={AboutMeImg}
            alt="Hasnain's Portrait"
            width={300}
            height={300}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
