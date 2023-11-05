import React from 'react';
import '../Projects/HeroProj.css'
import PageTitle from "../PageTitle";
import '../../App.css'
function HeroProj({
                title
                  }) {
    return (
        <div>
            <div className='topShadow'></div>
            <div className='projHero'>
                <div className='head1'>{title}</div>
            </div>

        </div>
    );
}

export default HeroProj;