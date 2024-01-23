import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { ContactData } from "./ContactAchivementsData";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer border border-t-[#33353F] z-10 border-l-transparent border-r-transparent text-white"
    >
      <div className="container p-12 flex justify-between  ">
        <div>
          <span>Contact Me</span>
          {ContactData.map((contact, index) => (
            <Link
              key={index}
              href={contact.name !== "Email" ? contact.url : ""}
            >
              <div className="conatainer flex flex-row items-center space-x-2">
                {contact.icon}
                <h2>
                  {contact.name}: {contact.url}
                </h2>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-slate-200">All rights reserved</p>
      </div>
    </footer>
  );
};
