import React from 'react';
import HeroProj from "../Projects/HeroProj";

import ATable from "../AchievTable/ATable";

function Achiev(props) {
    return (
        <div>

            <HeroProj title='Achievements, Awards, and Certifications'/>
            <ATable/>
        </div>
    );
}

export default Achiev;