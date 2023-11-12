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

function AnimatedRoutes() {
    return(
    <AnimatePresence mode='wait'>

        <Routes location={useLocation()} key={useLocation().pathname}>
            <Route exact path="/" element={<PageTransition Page={ <Home/>} /> }/>
            <Route path="/skills" element={<PageTransition Page={<Skills/>}  />}/>
            <Route path="/workexp" element={<PageTransition Page={<WorkExp/>}  />}/>

            <Route path="/education" element={<PageTransition Page={<Education/>}  />}/>
            <Route path="/achievements" element={<PageTransition Page={<Achiev/>}  />}/>
            <Route path="/pubsnpats" element={<PageTransition Page={<PubNPats/>}  />}/>
            <Route path="/projects" element={<PageTransition Page={<Projects/>}  />}/>

        </Routes>
    </AnimatePresence>
    );
};


export default AnimatedRoutes;

