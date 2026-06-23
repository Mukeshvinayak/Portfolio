
import { useState, useEffect } from "react";
function Practiseform (){

     const [name, setName] =useState("")
      const [mail, setMail] =useState("")

      useEffect(() => {

  const savedName = localStorage.getItem("name");
  const savedMail = localStorage.getItem("mail");

  if (savedName) {
    setName(savedName);
  }

  if (savedMail) {
    setMail(savedMail);
  }

}, []);

      function handlebutton(){

        if(!name || !mail){

           alert("Please Fill all the fields")
           return;
        }
        localStorage.setItem("name", name);
         localStorage.setItem("mail", mail);
        console.log(name)
        console.log(mail)
        alert("Form submitted")
        setName("");
        setMail("");
      }
    return(
        <div className="p-6">

            <input className="border p-2"
            value={name}
            placeholder="Type your Name"
            onChange={(e)=> setName(e.target.value)}/>

            <input className="p-2 border"  
                value={mail}
                placeholder="Enter You mail id"
                onChange={(e)=>setMail(e.target.value)}
            />

           {name && <h1>Hello {name}</h1>}
           {mail && <h1>Your mail id : {mail}</h1>}

           <button   className="bg-blue-500 text-white px-4 py-2 rounded"
           onClick={handlebutton}
           >Submit</button>
        </div>


    )
}
export default Practiseform;