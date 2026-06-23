
import { FaGraduationCap } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import {FaMapMarkerAlt  } from "react-icons/fa";
import { useState } from "react";
function Aboutme(){
    
    
    const[showdetails,setshowdetails] = useState(false);
    
    
    
    return(



<section  id="about" className="py-20 max-w-4xl mx-auto">



    <h1 className="text-2xl md:text-4xl font-bold mb-8">About Me</h1>
    <p className="text-lg text-slate-700 leading-relaxed mb-10"> Passionate Full Stack Developer with a background in Electronics and Communication Engineering. I have developed projects in Web Development and IoT, and I enjoy creating innovative solutions that bridge the gap between hardware and software.</p>
<button
 onClick={()=> setshowdetails(!showdetails)}
 className="px-4 py-2 rounded-lg shadow-lg"

> {showdetails? "showless" : "showmore"}</button>
 {
    showdetails&& (
        <div className="mt-4 p-4 rounded-lg shadow-lg">
        <p>✓ React Developer</p>
    <p>✓ Java Developer</p>
    <p>✓ IoT Enthusiast</p>
    <p>✓ Open to Opportunities</p>
        </div>
    )
 }

       <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 px-2 md:px-8 ">

         <div className="  p-4 rounded-lg shadow-lg hover:scale-105 transition-all font-semibold text-xl text-slate-400">
              
             <div className="flex items-center gap-2">
            <FaGraduationCap />
                <span>Degree</span>
               </div>
              <p>B.E. Electronics & Communication Engineering</p>
      
         </div>
          <div className="  p-4 rounded-lg shadow-lg  hover:scale-105 transition-all font-semibold text-xl text-slate-400">
              <div className="flex items-center gap-2">
            <FaLaptopCode />
                <span>Interested</span>
               </div>
              <p>Full Stack Development</p>
         </div>
           <div className=" p-4 rounded-lg shadow-lg hover:scale-105 transition-all font-semibold text-xl text-slate-400">
              <div className="flex items-center gap-2">
            <FaProjectDiagram />
                <span>Projects</span>
               </div>
              <p>Web Development & IoT</p>
         </div>
          <div className=" p-4 rounded-lg shadow-lg hover:scale-105 transition-all font-semibold text-xl text-slate-400">
             <div className="flex items-center gap-2">
            <FaMapMarkerAlt/>
                <span>Location</span>
               </div>
              <p>TamilNadu,India</p>
         </div>
         
       </div>



</section>



    )

}
export default Aboutme;