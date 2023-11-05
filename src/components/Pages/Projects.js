import React from 'react';
import HeroProj from '../Projects/HeroProj';
import '../Projects/HeroProj.css'
import ProjSection from "../Projects/ProjSection";
function Projects(props) {
    return (
        <div className='projPage'>
            <HeroProj title='Projects'/>
            <ProjSection/>
        </div>
    );
}

export default Projects;