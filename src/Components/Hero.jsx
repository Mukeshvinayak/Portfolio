import profileImg from "../assets/images/profile.png";

function Hero(){
    return(

 <section   id="home" className="min-h-screen flex items-center justify-center overflow-hidden"> 

<div className="flex  flex-col md:flex-row gap-16 ">

 <div className="flex  flex-col items-start gap-4  text-left  w-full md:w-1/2 ">

<h1 className="text-4xl  font-bold text-slate-800">Hi! I'm Mukesh</h1>
<h1 className="text-2xl text-gray-700 ">I'm a Frontend Developer</h1>
 <p className="text-2xl text-gray-700 max-w-2xl leading-relaxed">
    I build modern, responsive, and user-friendly web applications
using React and Tailwind CSS.
 </p>
 <div className="text-2xl gap-4 flex  bg-olive-700 px-6 py-4 rounded-lg hover:bg-mist-700 hover:scale-105 transition-all duration-300 cursor-pointer"> 
 <a> View Projects</a>
 <a>Download Cv</a>
 </div>

 </div>
  <div  className=" w-full md:w-1/2  items-center flex flex-col font-extrabold"> 
 <h1 >Mukesh</h1>
 <img src={profileImg}  className="w-80 h-80 rounded-full object-cover border-4 shadow-lg  border-b-mist-950"/>
 
 </div>
 </div>
 </section>




    )
}
export default Hero;