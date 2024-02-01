"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";
import { TAB_DATA } from "./AboutUsData";

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTansition] = useTransition();

  const handleTabChange = (id) => {
    startTansition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="drop-shadow-2xl rounded-md"
          src={"/about.png"}
          alt="about"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello everyone. I would like to introduce myself; I am Dery Galeas,
            a professional delighted to work in passionate teams in software
            development. My constant curiosity in the projects I have
            undertaken, has led me to embark on a new academic journey, by
            pursuing a Master's in Mathematical Engineering to gain a deeper
            knowledge of the subject.
            <br /> <br />I would love to help in any way possible. Feel free to
            contact me or reach out for any questions or concerns. It will
            always be a pleasure.
          </p>

          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}
              Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}
              Education{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {""}
              Experience{""}
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
