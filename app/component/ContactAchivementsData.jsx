import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const AchievementsData = [
  {
    metric: "Programming Languages",
    value: "3",
  },
  {
    metric: "Projects",
    value: "10",
    prefix: "+",
  },
  {
    metric: "clients",
    value: "5",
    prefix: "+",
  },
  {
    prefix: "+",
    metric: "Years",
    value: "3",
  },
];

export const ContactData = [
  {
    name: "Email",
    icon: <BiLogoGmail />,
    url: "dery.reyna@gmail.com",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/derygaleas/",
  },
  {
    name: "Github",
    icon: <FaGithubSquare />,
    url: "https://github.com/DeryGaleas",
  },
];
