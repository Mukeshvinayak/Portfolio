function SkillsCard({icon,name}){
    return(
 <div className=" p-2 md:p-4 rounded-lg hover:scale-105 shadow-lg transition-all duration-300 ">

   <div className="flex items-center gap-2">
  {icon}
  <span>{name}</span>
</div>
 </div>


    );
}

export default SkillsCard;