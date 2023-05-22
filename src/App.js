import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Route, Routes}
    from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Skills from "./components/Pages/Skills";
import WorkExp from "./components/Pages/WorkExp";
import Education from "./components/Pages/Education";
import Achiev from "./components/Pages/Achiev";
import PubNPats from "./components/Pages/PubNPats";

function App() {

  return (
    <>
        <Router>
            <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/skills" element={<Skills/>} />
                    <Route path="/workexp" element={<WorkExp/>} />
                    <Route path="/education" element={<Education/>} />
                    <Route path="/achievements" element={<Achiev/>} />
                    <Route path="/pubsnpats" element={<PubNPats/>} />
                </Routes>
        </Router>

    </>
  );
}

export default App;
