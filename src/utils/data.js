import{
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa";

import {BiLogoJavascript} from "react-icons/bi";
import {SiExpress,SiMongodb,SiMysql,SiPhp} from "react-icons/si";
import {VscVscode,VscCommentUnresolved,VscGithub,VscTerminalPowershell} from "react-icons/vsc"
import {FaGitAlt,FaXTwitter,FaDribbble} from "react-icons/fa6";
import {MdGroups3} from "react-icons/md";

// {Projects Image Links}

export const MENU_LINKS=[
    {id:"01" , label:"Home", offset:-100 , to:"hero"},
    {id:"02" , label:"Skills", offset:-80 , to:"skills"},
    {id:"03" , label:"About Me", offset:-80 , to:"about"},
    {id:"04" , label:"Projects", offset:-80 , to:"projects"},
    {id:"05" , label:"Contact", offset:-80 , to:"contact"},
]

export const STATS=[
    {id:"01" , count:"10" , label:"Years of \nExperience"},
    {id:"02" , count:"12" , label:"Certifications \nEarned"},
    {id:"03" , count:"43" , label:"Projects \nCompleted"},
    {id:"04" , count:"37+" , label:"Happy \nClients"},
]

export const SKILLS_TABS=[
    {id:"01" , label:"All" , value:"all"},
    {id:"02" , label:"Frontend" , value:"frontend"},
    {id:"03" , label:"Backend" , value:"backend"},
    {id:"04" , label:"Coding" , value:"coding"},
    {id:"05" , label:"Tools" , value:"tools"},
    {id:"06" , label:"Skills" , value:"skills"},
]

export const SKILLS=[
    {
        id:"01",
        icon:FaReact,
        skill:"React Js",
        progress:90,
        type:"frontend",
        description:"Experinced in building scalable, component-driven web applications using ReactJs."
    },
    {
        id:"02",
        icon:FaHtml5,
        skill:"HTML",
        progress:96,
        type:"frontend",
        description:"Expert in structuring web content with semantic HTML."
    },
    {
        id:"03",
        icon:FaCss3,
        skill:"CSS",
        progress:74,
        type:"frontend",
        description:"Experinced in building scalable, component-driven web applications using ReactJs."
    },
    {
        id:"04",
        icon:FaReact,
        skill:"React Js",
        progress:90,
        type:"frontend",
        description:"Experinced in building scalable, component-driven web applications using ReactJs."
    },
    {
        id:"05",
        icon:FaNodeJs,
        skill:"React Js",
        progress:90,
        type:"frontend",
        description:"Experinced in building scalable, component-driven web applications using ReactJs."
    },
    {
        id:"06",
        icon:BiLogoJavascript,
        skill:"React Js",
        progress:90,
        type:"frontend",
        description:"Experinced in building scalable, component-driven web applications using ReactJs."
    },
    {
        id:"07",
        icon:SiExpress,
        skill:"React Js",
        progress:90,
        type:"frontend",
        description:"Experinced in building scalable, component-driven web applications using ReactJs."
    },
]

export const ABOUT_ME={
    content: `I'm a possionate Full-Stack Developer with a strong foundation in building responsive, user-friendly`,
    socailLinks:[
        {id:"01", label:"Instagram" , icon:FaInstagram ,link:"#"},
        {id:"01", label:"Twitter" , icon:FaXTwitter ,link:"#"},
        {id:"01", label:"Linkedin" , icon:FaLinkedin ,link:"#"},
    ],

    email:"jawabharat05@gmail.com",
    phone:"(91+) 83960-10179",   
}

export const PROJECTS=[
    {
        id:1,
        title:"Full Stack Notes App with MERN | MongoDB, Express, ReactJs, NodeJs",
        // image
        tags:['ReactJs','Express','Node','MongpDB']
    },
    {
        id:1,
        title:"Full Stack Notes App with MERN | MongoDB, Express, ReactJs, NodeJs",
        // image
        tags:['ReactJs','Express','Node','MongpDB']
    },
    {
        id:1,
        title:"Full Stack Notes App with MERN | MongoDB, Express, ReactJs, NodeJs",
        // image
        tags:['ReactJs','Express','Node','MongpDB']
    },
    {
        id:1,
        title:"Full Stack Notes App with MERN | MongoDB, Express, ReactJs, NodeJs",
        // image
        tags:['ReactJs','Express','Node','MongpDB']
    },
    {
        id:1,
        title:"Full Stack Notes App with MERN | MongoDB, Express, ReactJs, NodeJs",
        // image
        tags:['ReactJs','Express','Node','MongpDB']
    },
    {
        id:1,
        title:"Full Stack Notes App with MERN | MongoDB, Express, ReactJs, NodeJs",
        // image
        tags:['ReactJs','Express','Node','MongpDB']
    },
]