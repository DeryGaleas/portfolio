"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {`Hello, I'm`} {""}{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Dery Galeas",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Engineer",
                1000,
                "Full Stack Web Developer",
                1000,
                "Mathematical Engineer Student",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div>
            <Link href="#footer">
              <button className="px-6 py-3 rounded-full w-full sm:w-fit bg-gradient-to-br from-tertiary via-primary to-secondary hover:bg-slate-200 text-white mr-4">
                Hire Me
              </button>
            </Link>

            <a href="https://drive.google.com/uc?export=download&id=1GVh4C0N1Wpxsdy8LAwf4uB8SNcN_XaLk">
              <button className="mt-4 px-1 py-1 rounded-full w-full sm:w-fit  bg-gradient-to-br from-tertiary via-primary to-secondary hover:bg-slate-800 text-white border">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-20 lg:mt-0"
        >
          <div className=" rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative">
            <Image
              src={"/Dery.png"}
              alt="Dery Galeas"
              width={285}
              height={285}
              className="rounded-lg absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
