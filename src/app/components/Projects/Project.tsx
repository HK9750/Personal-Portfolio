import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "LMS Backend",
    description:
      "The LMS Backend is built with Node.js and Express, providing a RESTful API for managing educational resources, courses, users, and assignments. Key features include user authentication, role-based access, and scalable architecture.",
    link: "https://github.com/HK9750/LMS-BACKEND",
    technologies: ["Node.js", "Express", "TypeScript"],
  },
  {
    title: "LMS Frontend",
    description:
      "The LMS Frontend is a responsive web application built with Next.js, providing optimized performance and modern UI components for an intuitive user experience.",
    link: "https://github.com/HK9750/LMS_FRONTEND",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "OmniNote",
    description:
      "OmniNote is a web app like Notion built with Next.js, Supabase, Drizzle ORM, ShadCN, and more, providing a rich set of note-taking and organization features.",
    link: "https://github.com/HK9750/OmniNote",
    technologies: ["Next.js", "Supabase", "TypeScript"],
  },
  {
    title: "Scalable ChatApp Backend",
    description:
      "This backend utilizes Socket.io and Aiven's managed Redis with Pub/Sub for efficient, real-time communication, providing low-latency messaging and support for high volumes.",
    link: "https://github.com/HK9750/Scalable-ChatApp-Backend",
    technologies: ["Node.js", "Socket.io", "Redis"],
  },
  {
    title: "Evo Ecommerce",
    description:
      "Evo Ecommerce is a full-stack ecommerce platform built with MERN stack, providing a rich set of features including user authentication, product management, and order processing.",
    link: "https://github.com/HK9750/E-commerce-MERN-",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "JWT",
    ],
  },
  {
    title: "Scalable ChatApp Frontend",
    description:
      "The frontend for the chat app built with Socket.io for real-time messaging, supporting efficient broadcasting and low-latency interactions.",
    link: "https://github.com/HK9750/Scalable-ChatApp-Frontend",
    technologies: ["React", "Socket.io", "TypeScript"],
  },
  {
    title: "DSA Problems",
    description:
      "A repository featuring C++ solutions to a variety of LeetCode DSA problems, emphasizing efficient algorithms and well-documented solutions.",
    link: "https://github.com/HK9750/DSA-Problems",
    technologies: ["C++"],
  },
  {
    title: "Multithreaded Web Server",
    description:
      "A multithreaded web server built in Node.js, utilizing TypeScript for scalability and efficiency. It supports high-concurrency handling and asynchronous processing.",
    link: "https://github.com/HK9750/Multithreaded-Server-in-Nodejs",
    technologies: ["Node.js", "TypeScript", "Multithreading", "Express.js"],
  },
];

const Projects = () => (
  <section id="projects" className="py-16 bg-gradient-to-br bg-[#1a1a1a] ">
    <div className="container mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-6 text-brand-1 animate-fadeIn">
        Projects
      </h2>
      <div className="h-1 w-20 bg-brand-1 mx-auto rounded mt-2 mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
