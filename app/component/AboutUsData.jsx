import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";

//Education
import { TbMathFunction } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";

//Experience
import { MdAddBusiness } from "react-icons/md";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BiDesktop } from "react-icons/bi";
import { BiNews } from "react-icons/bi";

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc md:grid md:grid-cols-2 space-y-2 pl-2">
        <li className="flex flex-row items-center space-x-2 ">
          <TbBrandDjango className="text-4xl" />
          <div>Django</div>
        </li>
        <li className="flex flex-row items-center space-x-2 ">
          <FaNode className="text-4xl" />
          <div>Node.js</div>
        </li>
        <li className="flex flex-row items-center space-x-2 ">
          <FaReact className="text-4xl" />
          <div>React</div>
        </li>
        <li className="flex flex-row items-center space-x-2 ">
          <TbBrandNextjs className="text-4xl" />
          <div>Next</div>
        </li>
        <li className="flex flex-row items-center space-x-2 ">
          <SiExpress className="text-4xl" />
          <div>Express</div>
        </li>{" "}
        <li className="flex flex-row items-center space-x-2 ">
          <SiNestjs className="text-4xl" />
          <div>Nest</div>
        </li>
        <li className="flex flex-row items-center space-x-2 ">
          <FaDatabase className="text-4xl" />
          <div>SQL</div>
        </li>
        <li className="flex flex-row items-center space-x-2 ">
          <SiPrisma className="text-4xl" />
          <div>Prisma ORM</div>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li className="flex flex-row items-center space-x-2 ">
          <TbMathFunction className="text-4xl" />
          <div>Ms. Mathematical Engineer (Student)</div>
        </li>
        <li className="flex flex-row items-center space-x-2 ">
          <FaLaptopCode className="text-4xl" />
          <div>Bs. Software Engineering</div>
        </li>
        <li className="flex flex-row items-center space-x-2 ">
          <IoMdAnalytics className="text-4xl" />
          <div>Dip. Patent Analysis</div>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li className="flex flex-row items-center space-x-2 ">
          <BiSolidBarChartAlt2 className="text-4xl" />
          <div>
            Software Developer and Business Consultant (Ostuma Consulting)
          </div>
        </li>
        <li className="flex flex-row items-center space-x-2 ">
          <BiDesktop className="text-4xl" />
          <div>Web and Product Developer (Linkage Academy)</div>
        </li>
        <li className="flex flex-row items-center space-x-2 ">
          <BiNews className="text-4xl" />
          <div>Web Developer and Content Manager (People and Teams)</div>
        </li>
        <li className="flex flex-row items-center space-x-2 ">
          <MdAddBusiness className="text-4xl" />
          <div>Web Developer (Elevate)</div>
        </li>
      </ul>
    ),
  },
];
