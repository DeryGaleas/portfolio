"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementSec = ({ achievement }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-4">
      <h2 className="text-white text-4xl font-bold flex flex-row">
        {achievement.prefix}
        <AnimatedNumbers
          includeComma
          animateToNumber={parseInt(achievement.value)}
          locale="en-US"
          className="text-white"
          configs={(_, index) => {
            return {
              mass: 1,
              friction: 100,
              tensions: 140 * (index + 1),
            };
          }}
        />
        {achievement.postfix}
      </h2>
      <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
    </div>
  );
};

export const AchievmentRendering = ({ achievement }) => {
  return <AchievementSec achievement={achievement} />;
};
