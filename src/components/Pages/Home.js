import React, {useEffect} from 'react';
import '../../App.css'
import HeroSection from "../HeroSection";
import Cards from "../CardComps/Cards";

function Home() {
    useEffect(() => {
        document.title = "B_Northern"
    }, []);
    return (
        <>
        <HeroSection/>

        </>
    );
}

export default Home;