"use client";
import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";

const ProjectData = [
  {
    id: 1,
    title: "Meraki Website",
    description: "Professional Business Website",
    image: "/meraki_website.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Professional Business Website",
    image: "/meraki_website.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Professional Business Website",
    image: "/meraki_website.png",
    tag: ["All", "Mobile"],
  },
];

export const ProjecsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  return (
    <>
      <h2 className="text-white text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};
