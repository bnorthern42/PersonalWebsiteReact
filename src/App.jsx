import React from 'react';
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Navbar from './components/navbar/nav';
import "./global.css";


import { 
  BrowserRouter as Router,
   Routes, 
   Route,  } from "react-router-dom";

const App = () => {
  return ( 
  <Router>
    <Navbar/>
    <Routes>
      
      
      <Route exact path="/" element={<Intro />} />
        
      <Route exact path="/about" element={<About />} />
      
      
      </Routes>
    </Router>
    
  );
};

export default App;