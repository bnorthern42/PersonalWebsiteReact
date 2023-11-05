import React from 'react';
import './HeroSection.css';
import {Button} from "./Button";
import {Link} from "react-router-dom";

function HeroSection(props) {
    return (
        <div className='hero-container'>
            <div className='vidWrapper'>
            <video src={process.env.PUBLIC_URL +"/videos/pexels-tech-01.mp4"}
                   autoPlay
                   playsInline
                   loop
                   muted
                   preload
                    className='transition fading'
            />
            </div>
            <h1>Brad Northern</h1>
            <p>Information Site</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>

                    Download Resume</Button>
            </div>
        </div>
    );
}

export default HeroSection;