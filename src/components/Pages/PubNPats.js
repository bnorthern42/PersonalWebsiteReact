import React from 'react';
import Pub from "../Publications/pub";
import HeroProj from "../Projects/HeroProj";

function PubNPats(props) {
    return (
        <div>
            <HeroProj title='Publications and Patents'/>
            <Pub/>
        </div>
    );
}

export default PubNPats;
