import { useState, useEffect } from "react";

 
function PractiseApi(){


    const [user , setUser]=useState([]);
    const[loading , setloading]=useState(true);
    const[error, seterror]=useState("");
    

   useEffect(()=>{

    async function user() {
        try {
        const reponse = await fetch( "https://jsonplaceholder.typicode.com/users");

        const data = await reponse.json();
        setUser(data);
        setloading(false);
     
      
    }
    catch (error){
        seterror("Failed to fetch users");
        setloading(false);
    } 
    
    }
     user();
       
   },[]

            )
            if (loading) {
  return <h1>Loading...</h1>;
}

  if(error){
    return(<h1> {error}</h1>)
  }
    return(

    <div>


         <h1> Practsie API</h1>


         {user.map((u)=>(
            <p key={u.id}>{u.name}</p>
         ))}


    </div>
    )









}export default PractiseApi;