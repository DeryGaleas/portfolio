"use client";
import React, { useState, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    id: 1,
    title: "McSystem Pre-Employee Software",
    description: "Web System to Recollect Job Applications",
    image: "/preempleo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://vimeo.com/906080577/8cc04d60d5?share=copy",
    codeAvailable: false,
  },
  {
    id: 2,
    title: "Ostuma Consulting Website",
    description: "Professional Business Website",
    image: "/ostuma.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://vimeo.com/905834781/fa120075d1?share=copy",
    codeAvailable: false,
  },
  {
    id: 3,
    title: "Meraki Website",
    description: "Professional Business Website",
    image: "/meraki_website.png",
    tag: ["All", "Web"],
    codeAvailable: false,
  },
  {
    id: 4,
    title: "People and Teams Website",
    description: "Professional Business Website",
    image: "/peopleandteams.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://vimeo.com/905840634/e3e42472fd?share=copy",
    codeAvailable: false,
  },
  {
    id: 5,
    title: "Elevate Landing Page",
    description: "Landing Page",
    image: "/empleabilidaddigital.png",
    tag: ["All", "Mobile"],
    previewUrl: "https://vimeo.com/905999944/10bf34afa4?share=copy",
    codeAvailable: false,
  },
];

export const ProjecsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  return (
    <section id="projects">
      <h2 className="text-white text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
