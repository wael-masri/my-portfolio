import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";
import Work4 from "./assets/project-4.png";
import Work5 from "./assets/project-5.png";
import Work6 from "./assets/project-6.png";
import Work7 from "./assets/project-7.png";
import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Wael",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Masri",
  },

  {
    id: 3,
    title: "Age : ",
    description: "27 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Lebanese",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Tripoli",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+961 71 620 485",
  },

  {
    id: 8,
    title: "Email : ",
    description: "wael.el.masri.1996@gmail.com",
  },

  {
    id: 9,
    title: "Instagram : ",
    description: "wael.el.masri",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Arabic, English, French",
  },
];

export const stats = [
  {
    id: 1,
    no: "3+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "15+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "81+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "15+",
    title: " Programming <br /> Languages",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2017 - 2023",
    title: "Matte Restaurant <span> Supervisor </span>",
    desc: "Employee Emotional Support, Active Listening at Work, Clarity of Thought.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2021",
    title: "Telepaty <span> Junior </span>",
    desc: "Design and build advanced web site, the correlation between frontend and backend.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020",
    title: "AmcTag <span> Junior </span>",
    desc: "Work on bug fixing and improving application perfomance",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017 - 2019",
    title: "Bachelor Degree <span> Lebanese French University (ULF) </span>",
    desc: "Computer Science",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2013-2015",
    title: "Secondary Degree <span> Saba Zreik High School </span>",
    desc: "General science (SG)",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012",
    title: "Appreciation Certificate <span> Moubdioun Association </span>",
    desc: "Computer - Math",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "80",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "89",
  },

  {
    id: 3,
    title: "Css",
    percentage: "75",
  },

  {
    id: 4,
    title: "React",
    percentage: "80",
  },

  {
    id: 5,
    title: "Wordpress",
    percentage: "80",
  },

  {
    id: 6,
    title: "Node js",
    percentage: "60",
  },

  {
    id: 7,
    title: "php",
    percentage: "65",
  },

  {
    id: 8,
    title: "Laravel",
    percentage: "45",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "MadinaShop",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personal",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React, nodejs, mongoDB",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://madina-shop-frontend.onrender.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Speed Dashboard",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personal",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React, nodejs, mongoDB",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://main--joyful-lokum-bc9316.netlify.app/",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Masri Perfume",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personal",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React, nodejs, mongoDB",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://masri-perfume-frontend.onrender.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "WMCar",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personal",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React js",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://vibrant-snyder-2202d7.netlify.app/",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Portfolio Motion",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Personal",
      },
      {
        title: "Language : ",
        desc: "React JS, motion",
      },
      {
        title: "Preview : ",
        desc: "https://wael-portfoilio1996.netlify.app/",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "wardorganization",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "ward organization",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "html, css, js, php,phpmyAdmin",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://wardorganization.com/",
      },
    ],
  },
  {
    id: 6,
    img: Work7,
    title: "Magic Map",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Personal",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React, nodejs, mongoDB, mapbox",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://map-app-3pv3.onrender.com/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
