"use client";

import React from "react";
import BallCanvas from "./BallCanvas";
import HtmlIcon from "../../../../public/html.png";
import CssIcon from "../../../../public/css.png";
import JavaScriptIcon from "../../../../public/javascript.png";
import ReactIcon from "../../../../public/reactjs.png";
import TypeScriptIcon from "../../../../public/typescript.png";
import NodeIcon from "../../../../public/nodejs.png";
import NextJSIcon from "../../../../public/nextjs.svg";
import TailwindCSSIcon from "../../../../public/tailwind.png";
import GitIcon from "../../../../public/git.png";
import MongoDBIcon from "../../../../public/mongodb.png";
import CPlusPlusIcon from "../../../../public/cpp.png";
import Python from "../../../../public/python.svg";
import ReduxToolkit from "../../../../public/redux.png";
import Docker from "../../../../public/docker.png";

const skillsData = [
  { icon: HtmlIcon, name: "HTML", proficiency: 90 },
  { icon: CssIcon, name: "CSS", proficiency: 80 },
  { icon: JavaScriptIcon, name: "JavaScript", proficiency: 90 },
  { icon: TypeScriptIcon, name: "TypeScript", proficiency: 85 },
  { icon: ReactIcon, name: "React", proficiency: 95 },
  { icon: NextJSIcon, name: "Next.js", proficiency: 90 },
  { icon: ReduxToolkit, name: "Redux Toolkit", proficiency: 85 },
  { icon: NodeIcon, name: "Node.js", proficiency: 88 },
  { icon: TailwindCSSIcon, name: "Tailwind CSS", proficiency: 80 },
  { icon: GitIcon, name: "Git", proficiency: 85 },
  { icon: MongoDBIcon, name: "MongoDB", proficiency: 75 },
  { icon: CPlusPlusIcon, name: "C++", proficiency: 70 },
  { icon: Python, name: "Python", proficiency: 65 },
  { icon: Docker, name: "Docker", proficiency: 70 },
];

const Skills: React.FC = () => {
  return (
    <section className="bg-bg-1 min-h-screen py-12 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-1 border-b-4 border-brand-1 inline-block pb-2 mb-8">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-bg-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <BallCanvas icon={skill.icon.src} />
              <p className="mt-4 text-sm md:text-base font-semibold text-gray-200">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
