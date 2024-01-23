"use client";
import React from "react";
import { AchievmentRendering } from "./AchievmentRendering";
import { AchievementsData, ContactData } from "./ContactAchivementsData";

export const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-col md:flex-row items-center justify-between ">
        {AchievementsData.map((achievement, index) => {
          return (
            <div key={index}>
              <AchievmentRendering achievement={achievement} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
