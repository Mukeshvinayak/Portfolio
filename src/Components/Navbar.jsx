import { useState } from "react";

function Navbar() {
  const [menuopen,setmenuopen] =useState(false);
  return (
    <nav className="flex justify-between items-center px-8 h-20 bg-slate-700 text-gray-500 border-b border-slate-800 sticky top-0 z-50 " >
      <h1 className="text-lg md:text-2xl font-bold">Mukesh.Dev</h1>
  <button
  className="md:hidden"
  onClick={() => setmenuopen(!menuopen)}
>
{menuopen ? "✖" : "☰"}
</button>
   
  <div>
    {menuopen && (
  <ul className="absolute top-20 left-0 w-full bg-slate-700 flex flex-col items-center gap-4 py-4 md:hidden">
    <li className=" hover:text-purple-500 transition-all cursor-pointer"><a href="#home">Home</a></li>
    <li className=" hover:text-purple-500 transition-all cursor-pointer" ><a href="#about">About</a></li>
    <li className=" hover:text-purple-500 transition-all cursor-pointer"><a href="#projects">Projects</a></li>
    <li className=" hover:text-purple-500 transition-all cursor-pointer"><a href="#skills">Skills</a></li>
    <li className=" hover:text-purple-500 transition-all cursor-pointer"><a href="#contact">Contact</a></li>
  </ul>
)}
  </div> 

<ul className=" hidden md:flex items-center gap-1 md:gap-6 px-1 md:px-8 text-sm md:text-base">
   <li> <a className="hover:text-purple-500 transition-all cursor-pointer" href="#home"> Home </a></li> 
 <li> <a className="hover:text-purple-500 transition-all cursor-pointer" href="#about"> About </a></li> 
  <li> <a className="hover:text-purple-500 transition-all cursor-pointer" href="#contact"> Contact </a></li> 
   <li> <a className="hover:text-purple-500 transition-all cursor-pointer" href="#projects"> Projects</a></li> 
 <li> <a className="hover:text-purple-500 transition-all cursor-pointer" href="#skills"> Skills </a></li> 
</ul>

    </nav>
  );
}

export default Navbar;