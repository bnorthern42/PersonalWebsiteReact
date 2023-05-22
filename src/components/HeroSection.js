import React from 'react';
import './HeroSection.css';
import {Button} from "./Button";

function HeroSection(props) {
    return (
        <div className='hero-container'>
            <video src="/videos/pexels-tech-01.mp4" autoPlay loop muted/>
            <h1>Brad Northern</h1>
            <p>Information Site</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>Download Resume</Button>
            </div>
        </div>
    );
}

export default HeroSection;