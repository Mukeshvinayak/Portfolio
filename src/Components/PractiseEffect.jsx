import { useEffect ,useState } from "react";

function PractiseEffect(){
  const[count, setCount]=useState(0);

     useEffect(()=>{
        console.log("Count changed")
     },[count])

    
  return(
 <div>

 <h1> {count}</h1>


 <button
  onClick={()=>
    setCount(count+1)
  }
 > increase</button>
 </div>


  )

}
export default PractiseEffect;