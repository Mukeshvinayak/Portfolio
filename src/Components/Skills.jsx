
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import SkillsCard from "./SkillsCard";
function Skills(){
    const skills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <IoLogoJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiMysql />, name: "Mysql" },
    { icon: <SiTailwindcss />, name: "Tailwindcss" },
      { icon: < SiSpringboot />, name: "Springboot" },
        { icon: <FaGitAlt />, name: "Git" },
          { icon: <FaGithub />, name: "Github" },
          { icon: <FaNodeJs/> , name: "Nodejs"},
            { icon: <FaJava/> , name: " Java"},
              { icon: <FaNodeJs/> , name: "Nodejs 2"}
           
];
    return(

 <section id="skills" className="py-20 max-w-6xl mx-auto" >

 <h1  className=" text-2xl md:text-4xl font-bold text-center mb-10">Skill Sets</h1>



 <div  className=" grid grid-cols-1 md:grid-cols-3 gap-4">
     {skills.map((skill) => (

        <SkillsCard
        key={skill.name}
      icon={skill.icon}
      name={skill.name}
    />

        
     )

     )}
    </div>

 </section>






    )





}
export default Skills;