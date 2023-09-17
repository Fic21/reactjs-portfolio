import React from "react";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Skills from "../page/Skills";
import Work from "../page/Work";

//import routes route  use location hook

import {Routes, Route, useLocation} from 'react-router-dom';

const AnimRoutes = () =>{
    const location = useLocation();
    return (
        <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="work" element={<Work/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    );
};
export default AnimRoutes;