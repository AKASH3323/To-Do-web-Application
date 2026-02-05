import React from "react"
import {Link} from "react-router-dom"
import "./navbar.css"
export default function Navbar(params) {
    return(<nav>
        <ul >
        <h1 className="navlinks"> 
<Link to="/Home">Home</Link>
<Link to="/About">About Me</Link>
<Link to="/Contact">Contact Me</Link>
<Link to="/User">User</Link>
</h1>   

        </ul>
    </nav>)
    
}







































// import React from "react";
// import "./navbar.css"
// import { Link } from "react-router-dom";
// export default function Navbar(){
//     return(<nav>
//         <ul>
//             <Link to="/Home">Home</Link>
//             <Link to="/About">About</Link>
//             <Link to="/User">User</Link>
//             <Link to="/Contact">Contact</Link>
//         </ul>
//     </nav>)
// }