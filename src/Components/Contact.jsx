
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
function Contact(){
    return(

<section id ="contact" className=" flex flex-col  items-center text-center mb-4" >

<h1 className="text-2xl font-extrabold p-4"> Contact Me</h1>
<div className=" flex flex-col  md:flex-row gap-4  px-1 md:px-6  text-sm md:text-xl ">
  <div className="flex gap-2 items-center hover:scale-105 rounded-xl shadow-xl p-2 md:p-4">
  < FaEnvelope/>
 <a href="mailto:mukeshvinayak44@gmail.com">mukeshvinayak44@gmail.com</a>
  </div>

   <div className="flex gap-2 items-center hover:scale-105 rounded-xl shadow-xl p-2 md:p-4">
< FaGithub/>
<span>GitHub</span>
  </div>

   <div className="flex gap-2 items-center hover:scale-105 rounded-xl shadow-xl p-2 md:p-4">
  <FaLinkedin/>
<a
  href="https://www.linkedin.com/in/mukesh-v-2905832ab"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 hover:text-blue-700"
>
  LinkedIn
</a>
  </div>

  <a  href="/resume.pdf"
   download
   className="flex gap-2 items-center hover:scale-105 rounded-xl shadow-xl p-2 md:p-4"> 
  Download CV
  <FaFileDownload/>
  </a>
</div>
</section>

    )
}
export default  Contact;