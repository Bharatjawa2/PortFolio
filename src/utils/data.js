import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

import { BiLogoJavascript } from "react-icons/bi";
import { DiGithub, DiJava } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiPython, SiGit, SiLaravel, SiPhp, SiKotlin, SiAndroidstudio, SiLeetcode, SiMysql } from "react-icons/si";
import { VscVscode, VscCommentUnresolved, VscGithub, VscTerminalPowershell } from "react-icons/vsc"
import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { MdGroups3, MdEmojiEvents } from "react-icons/md";

import hireverse from "../assets/images/Hireverse.png"
import imagify from "../assets/images/imagify.png"
import JawaShop from "../assets/images/JawaShop.png";
import gemini from "../assets/images/Gemini.png";
import sparkspectra from "../assets/images/sparkspectra.png"
import qrivo from "../assets/images/Qrivo.png"
import tic from "../assets/images/Tic.png"

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -80, to: "skills" },
  { id: "03", label: "About Me", offset: -80, to: "about" },
  { id: "04", label: "Projects", offset: -80, to: "projects" },
  { id: "05", label: "Contact", offset: -80, to: "contact" },
]

export const STATS = [
  { id: "01", count: "Fresher", label: "" },
  { id: "02", count: "12", label: "Certifications \nEarned" },
  { id: "03", count: "10-12", label: "Projects \nCompleted" },
  { id: "04", count: "8.73", label: "CGPA \n(2022-2026)" },
]

export const SKILLS_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Coding", value: "coding" },
  { id: "05", label: "Tools", value: "tools" },
  { id: "06", label: "Skills", value: "skills" },
]

export const SKILLS = [
  // Frontend
  {
    id: "01",
    icon: FaReact,
    skill: "React Js",
    progress: 90,
    type: "frontend",
    description:
      "Experienced in building responsive, scalable, and reusable component-based UI using ReactJs. Familiar with React Hooks, Context API, and integrating REST APIs."
  },
  {
    id: "02",
    icon: FaHtml5,
    skill: "HTML",
    progress: 96,
    type: "frontend",
    description:
      "Expert in creating semantic and accessible web content. Strong understanding of HTML5 structure, tags, and best practices for SEO and performance."
  },
  {
    id: "03",
    icon: FaCss3,
    skill: "CSS",
    progress: 85,
    type: "frontend",
    description:
      "Skilled in responsive design, Flexbox, Grid, animations, and building maintainable stylesheets using modern CSS techniques and frameworks like Tailwind CSS."
  },
  {
    id: "04",
    icon: BiLogoJavascript,
    skill: "JavaScript",
    progress: 92,
    type: "frontend",
    description:
      "Proficient in JavaScript ES6+ features, DOM manipulation, event handling, asynchronous programming, and modern frontend development practices."
  },

  // Backend
  {
    id: "05",
    icon: FaNodeJs,
    skill: "Node.js",
    progress: 88,
    type: "backend",
    description:
      "Proficient in building RESTful APIs, real-time applications, and backend logic using Node.js with Express framework. Experience with middleware, routing, and async operations."
  },
  {
    id: "06",
    icon: SiExpress,
    skill: "Express.js",
    progress: 85,
    type: "backend",
    description:
      "Experienced in developing RESTful APIs, managing routes, middlewares, and error handling using Express. Integrated various third-party libraries and built scalable backend services."
  },
  {
    id: "07",
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 80,
    type: "backend",
    description:
      "Hands-on experience with MongoDB for building NoSQL databases, designing schemas using Mongoose, performing CRUD operations, and handling relationships."
  },
  {
    id: "08",
    icon: SiLaravel,
    skill: "Laravel",
    progress: 75,
    type: "backend",
    description:
      "Proficient in building secure and efficient web applications using Laravel. Experienced in MVC structure, routing, Eloquent ORM, and API development."
  },
  {
    id: "09",
    icon: SiPhp,
    skill: "PHP",
    progress: 70,
    type: "backend",
    description:
      "Skilled in developing server-side logic using PHP, integrating databases, handling sessions, and building dynamic websites."
  },

  // Coding
  {
    id: "10",
    icon: DiJava,
    skill: "Java",
    progress: 78,
    type: "coding",
    description:
      "Strong command over Java fundamentals including OOP, exception handling, collections framework, multithreading, and backend development using Spring Boot."
  },
  {
    id: "11",
    icon: SiKotlin,
    skill: "Kotlin",
    progress: 72,
    type: "coding",
    description:
      "Capable of building modern Android apps using Kotlin with strong understanding of Android lifecycle, Jetpack components, and coroutines."
  },
  {
    id: "12",
    icon: SiAndroidstudio,
    skill: "Android Studio",
    progress: 80,
    type: "coding",
    description:
      "Proficient in using Android Studio for native mobile app development, debugging, and integrating third-party libraries and APIs."
  },
  {
    id: "13",
    icon: SiLeetcode,
    skill: "DSA",
    progress: 85,
    type: "coding",
    description:
      "Strong understanding of Data Structures and Algorithms including arrays, trees, graphs, dynamic programming, and problem solving on platforms like LeetCode and GFG."
  },

  // Database
  {
    id: "14",
    icon: SiMysql,
    skill: "SQL Database",
    progress: 80,
    type: "database",
    description:
      "Experienced in writing complex SQL queries, managing relational databases, designing normalized schemas, and optimizing performance."
  },

  // Tools
  {
    id: "15",
    icon: VscVscode,
    skill: "VS Code",
    progress: 95,
    type: "tools",
    description:
      "Primary code editor with extensive customization using extensions, snippets, and integrated terminal. Efficient workflow with Git integration and debugging support."
  },
  {
    id: "16",
    icon: SiPostman,
    skill: "Postman",
    progress: 90,
    type: "tools",
    description:
      "Used extensively for testing APIs, managing environments, automating requests with collections, and validating response status, headers, and payloads."
  },
  {
    id: "17",
    icon: SiGit,
    skill: "Git",
    progress: 88,
    type: "tools",
    description:
      "Proficient in using Git for version control, branching strategies, merge conflict resolution, and collaborating using platforms like GitHub and GitLab."
  },

  // Soft Skills
  {
    id: "18",
    icon: MdGroups3,
    skill: "Teamwork",
    progress: 95,
    type: "skills",
    description:
      "Highly collaborative and supportive team player. Experienced in working on group projects, effective communication, and resolving team conflicts constructively."
  },
  {
    id: "19",
    icon: MdEmojiEvents,
    skill: "Leadership",
    progress: 90,
    type: "skills",
    description:
      "Demonstrated leadership in academic and project settings by guiding teams, delegating tasks, and driving successful project deliveries with responsibility and initiative."
  }
];

export const ABOUT_ME = {
  content: `I'm a passionate and dedicated Full-Stack Developer pursuing a Bachelor of Technology (B.Tech) in Computer Science. With a strong foundation in both frontend and backend technologies, I specialize in crafting modern, responsive web applications using tools like React.js, Node.js, and MongoDB.
  
  I have hands-on experience in building scalable full-stack projects, integrating REST APIs, and working with databases. My interests span across software architecture, backend optimization, and creating seamless user experiences. I’m also skilled in Java, JavaScript, Express.js, Git, and Postman, and I consistently practice Data Structures and Algorithms (DSA) to improve problem-solving skills.
  
  Beyond development, I'm a quick learner and a strong believer in continuous improvement. I enjoy leading group projects and contributing to collaborative environments, showcasing leadership and teamwork qualities. Whether it's debugging code at midnight or helping peers in group assignments, I thrive in tech-driven environments that challenge me to grow.
  
  My journey in Computer Science is driven by curiosity, creativity, and a commitment to build solutions that make a meaningful impact.`,

  socailLinks: [
    { id: "01", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/bharat_jawa_" },
    { id: "02", label: "Twitter", icon: FaXTwitter, link: "https://x.com/bharat_jaw91783" },
    { id: "03", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/bharat-jawa/" },
    { id: "04", label: "Github", icon: DiGithub, link: "https://github.com/Bharatjawa2" },
    { id: "05", label: "Leetcode", icon: SiLeetcode, link: "https://leetcode.com/u/Bharat_Jawa/" },
  ],

  email: "jawabharat05@gmail.com",
  phone: "(91+) 83960-10179",
  website: "port-folio-omega-three.vercel.app/"
};


export const PROJECTS = [
  {
    id: 1,
    title: "Job Portal Website with MERN | MongoDB, Express, ReactJs, NodeJs",
    image: hireverse,
    url:"https://hireverse.vercel.app/",
    tags: ['ReactJs', 'Express', 'Node', 'MongpDB']
  },
  {
    id: 2,
    title: "Text to Image AI Convertor App with MERN | MongoDB, Express, ReactJs, NodeJs",
    image: imagify,
    url:"https://imagefrontier.onrender.com/",
    tags: ['ReactJs', 'Express', 'Node', 'MongpDB']
  },
  {
    id: 3,
    title: "SparkSpectra - Event Management Webiste | HTML, CSS, JavaScript",
    image: sparkspectra,
    url:"https://github.com/Bharatjawa2/SparkSpectra",
    tags: ['HTML','CSS','JavaScript']
  },
  {
    id: 4,
    title: "Gemini AI CLone | ReactJs",
    image: gemini,
    url:"https://vocal-marshmallow-1057e4.netlify.app/",
    tags: ['ReactJs','Gemini AI API Key']
  },
  {
    id: 5,
    title: "JawaShop Frontend using ReactJs",
    image: JawaShop,
    url:"https://jawa-shop-frontend.vercel.app/",
    tags: ['ReactJs', 'JavaScript']
  },
  
  {
    id: 6,
    title: "Qrivo - URL to QR Generator",
    image: qrivo,
    url:"https://capable-sherbet-54c6bf.netlify.app/",
    tags: ['HTML','CSS','JavaScript','API Key']
  },
  {
    id: 7,
    title: "Tic-Tak-Toe",
    image: tic,
    url:"https://coruscating-sawine-ded9d2.netlify.app/",
    tags: ['HTML','CSS','JavaScript']
  },
]