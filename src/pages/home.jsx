import React, { useState } from "react";
import "./home.css"
export default function Home(){
    const[forminput,setForminput]=useState({
        Name:"",
        Age:"",
        Email:"",
        Contact:""
    })
    
    const handle=(event)=>{
const{name,value}=event.target;
setForminput((currInput)=>{
    return{...currInput,[name]:value,}
})
console.log(setForminput)
    }
    
    return(<div><h1>Home</h1>
    <form>
        <label>Name</label><br/>
        <input  name="Name"type="text" value={forminput.Name} onChange={handle}></input><br/>
        <label>Age</label><br/>
        <input  name="Age"type="text" value={forminput.Age} onChange={handle}></input><br/>
        <label>Email</label><br/>
        <input  name="Email"type="text" value={forminput.Email} onChange={handle}></input><br/>
        <label>Contact</label><br/>
        <input  name="Contact"type="text" value={forminput.Contact} onChange={handle}></input><br/>
    </form>
    </div>)
}
// import React, { useState } from "react";
// import "./home.css"
// export default function Home(){
//     const[forminput,setForminput]=useState({
//         Name:"",
//         Age:"",
//         Email:"",
//         Contact:""
//     })
//     const handle=(event)=>{
//         const{name,value}=(event.target)
//         console.log(name,value)
//     }
//     return(<div><h1>Home</h1>
//      <form>
//         <label>Name</label><br/>
//         <input  name= "Name"
//         type="text" 
//         value={forminput.Name} 
//         onChange={handle}></input><br/>

//         <label>Age</label><br/>
//         <input  
//         name="Age"
//         type="number" 
//         value={forminput.Age} 
//         onChange={handle}></input><br/>

//         <label>Email</label><br/>
//         <input  name="Email"
//         type="text" 
//         value={forminput.Email}
//          onChange={handle}></input><br/>

//         <label>Contact</label><br/>
//         <input  name="Contact"
//         type="number" 
//         value={forminput.Contact} 
//         onChange={handle}></input><br/>

//      </form>
//     </div>)
// }






























// import React from "react";
// export default function Home(){
//     return(<h1>Home</h1>)
// }