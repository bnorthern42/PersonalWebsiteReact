import React from 'react';
import './App.css';
import {BrowserRouter as Router, useLocation}
    from "react-router-dom";

import Navbar from "./components/Navbar";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {

  return (
    <>
        <Router>
            <Navbar/>
            <AnimatedRoutes/>
        </Router>

    </>
  );
}

export default App;
