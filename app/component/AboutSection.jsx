"use client";
import React, {useState, useTransition} from 'react';
import Image from 'next/image';
import { TabButton } from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>Django</li>
                <li>React</li>
                <li>Next.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Software Engineer</li>
                <li>Mathematical Engineer Student</li>
                <li>Django</li>
                <li>React</li>
                <li>Next.js</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Full Stack Web Developer</li>
                <li>Express</li>
                <li>Django</li>
                <li>React</li>
                <li>Next.js</li>
            </ul>
        )
    },
]

export const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending,startTansition] = useTransition();

    const handleTabChange = (id) => {
        startTansition(()=>{
            setTab(id);
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image
                src={"/about.jpg"}
                alt='about'
                width={500}
                height={500}
            />

            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, non suscipit nisi, eum esse dignissimos aliquid consectetur ad voluptatibus corporis, obcaecati tempora numquam earum neque debitis et totam quis provident!</p>
            

                <div className='flex flex-row mt-8 justify-start'>
                    <TabButton selectTab={()=> handleTabChange("skills")} active={tab==="skills"}>
                        {""}
                        Skills{""}
                    </TabButton>
                    <TabButton selectTab={()=> handleTabChange("education")} active={tab==="education"}>
                        {""}
                        Education{""}
                    </TabButton>
                    <TabButton selectTab={()=> handleTabChange("experience")} active={tab==="experience"}>
                        {""}
                        Experience{""}
                    </TabButton>
                </div>
                <div className='mt-8 '>
                    {TAB_DATA.find((t)=> t.id === tab).content}
                </div>
            </div>

        </div>
    </section>
  )
}