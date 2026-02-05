import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact"
import User from "./pages/user"
import Navbar from "./pages/Components/navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App(){
    return(<BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/user" element={<User/>}/>
    </Routes>
    </BrowserRouter>)
}


























































// import React from "react";
// import Home from "./pages/home";
// import User from "./pages/user";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Navbar from "./pages/Components/navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// export default function App(){
//     return(<BrowserRouter>
// <Navbar />
//     <Routes>
//          <Route path="/Home" element={<Home />} />
//         <Route path="/user" element={<User />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//     </Routes>
//     </BrowserRouter>)
// }