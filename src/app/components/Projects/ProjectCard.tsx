import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  technologies,
}) => {
  return (
    <motion.div
      className="bg-[#1a1a1a] border border-[#333] shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold text-brand-1">{title}</h3>
        <span className="text-xs text-brand-2 bg-[#86ffce20] px-2 py-1 rounded-full">
          Public
        </span>
      </div>
      <p className="text-grey mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-brand-2 text-[#1a1a1a] rounded-full font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-2 hover:text-brand-1 font-medium transition-colors duration-200"
      >
        View on GitHub &rarr;
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
