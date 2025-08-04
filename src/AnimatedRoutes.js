import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./components/Pages/Home";
import Skills from "./components/Pages/Skills";
import WorkExp from "./components/Pages/WorkExp";
import Education from "./components/Pages/Education";
import Achiev from "./components/Pages/Achiev";
import PubNPats from "./components/Pages/PubNPats";
import Projects from "./components/Pages/Projects";
import PageTransition from "./components/PageTransition";
import Encompass from "./components/Pages/Encompass";
import Resume from "./components/Pages/Resume";

function AnimatedRoutes() {
    return(
    <AnimatePresence mode='wait'>

        <Routes location={useLocation()} key={useLocation().pathname}>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/skills" element={<PageTransition Page={<Skills/>}  />}/>
            <Route path="/workexp" element={<WorkExp/>}/>

            <Route path="/education" element={<Education/>}  />
            <Route path="/achievements" element={<Achiev/>}/>
            <Route path="/pubsnpats" element={<PubNPats/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/enc" element={<Encompass/>} />
            <Route path="/res" element={<Resume/>}/>

        </Routes>
    </AnimatePresence>
    );
};


export default AnimatedRoutes;

