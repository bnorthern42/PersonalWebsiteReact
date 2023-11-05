import React from 'react';
import PageTitle from "../PageTitle";
import { Spacer } from "@nextui-org/react";
import MediaCard from "../CardComps/MediaCard";
import '../../PageCSS/Education.css';
import HeroProj from "../Projects/HeroProj";
function Education(props) {



    return (
        <div className='edu'>

            <HeroProj title='Education'/>
        <div className='page'>


            <div className='SchoolInfo-Wrapper'>
                <div className='schoolBox'>
                <div className='SchoolInfo'>
                    <MediaCard DegreeInfo="PhD Engineering"
                            source="/videos/pexels-Server.mp4"
                            SchoolingTime="Aug 2022 - Present"
                            SchoolName="Tennessee Tech University"
                            DegreeConc="Emphasis: Computer Science"/>

                </div>
                <div className='schoolVideo'>
                    <video autoPlay loop muted className='videoBanner' src={process.env.PUBLIC_URL +"/videos/pexels-Server.mp4"}>

                    </video>
                </div>
                </div>
                <div className='schoolBox'>
                    <div className='SchoolInfo'>
                        <MediaCard DegreeInfo="M.S. Computer Science"
                                   source="/videos/pexels-cyber.mp4"
                                   SchoolingTime="Aug 2020 - May 2022"
                                   SchoolName="Tennessee Tech University"
                                   DegreeConc="Concentration: Cyber Security"/>

                    </div>
                    <div className='schoolVideo'>
                        <video autoPlay loop muted className='videoBanner' src={process.env.PUBLIC_URL +"/videos/pexels-cyber.mp4"}/>
                    </div>
                </div>
                <div className='schoolBox'>
                <div className='SchoolInfo'>
                    <MediaCard DegreeInfo="B.S. Manufacturing and Engineering Technology"
                               source="/videos/pexels-manufacturing.mp4"
                               SchoolingTime="Aug 2012 - May 2020"
                               SchoolName="Tennessee Tech University"
                               DegreeConc="Concentration: Mechatronics Engineering"/>

                </div>
                <div className='schoolVideo'>
                    <video autoPlay loop muted className='videoBanner' src={process.env.PUBLIC_URL +"/videos/pexels-manufacturing.mp4"}/>
                </div>
                </div>
                <h3>Current Research:</h3>
                    <ul>
                        <li>
                            Renewable Energy Simulations
                        </li>
                    </ul>

            </div>


        </div>
        </div>
    );
}

export default Education;
