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

const skillsData = [
  { icon: HtmlIcon, name: "Html", proficiency: 90 },
  {
    icon: CssIcon,
    name: "Css",
    proficiency: 80,
  },
  { icon: JavaScriptIcon, name: "JavaScript", proficiency: 90 },
  { icon: TypeScriptIcon, name: "TypeScript", proficiency: 85 },
  { icon: ReactIcon, name: "React", proficiency: 95 },
  { icon: NextJSIcon, name: "Next.js", proficiency: 90 },
  { icon: NodeIcon, name: "Node.js", proficiency: 88 },
  { icon: TailwindCSSIcon, name: "Tailwind CSS", proficiency: 80 },
  { icon: GitIcon, name: "Git", proficiency: 85 },
  { icon: MongoDBIcon, name: "MongoDB", proficiency: 75 },
  { icon: CPlusPlusIcon, name: "C++", proficiency: 70 },
  { icon: Python, name: "Python", proficiency: 65 },
];

const Skills: React.FC = () => {
  return (
    <section className="bg-bg-1 min-h-screen py-16 flex flex-col items-center justify-center">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl text-brand-1 font-bold border-b-4 border-brand-1 inline-block mb-6">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-bg-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-brand1 hover:text-white"
            >
              <BallCanvas icon={skill.icon.src} />
              <h3 className="mt-3 text-brand-1 text-lg font-semibold">
                {skill.name}
              </h3>
              <div className="w-full mt-3">
                <div className="bg-gray-300 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-brand-1 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <p className="mt-1 text-xs text-grey">
                  {skill.proficiency}% Proficient
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
