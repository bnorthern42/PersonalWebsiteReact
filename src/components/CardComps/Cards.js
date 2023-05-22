import React from 'react';
import CardItem from "./CardItem";
import './Cards.css';

function Cards(props) {
    return (
        <div className="Cards">
            <h1>some prop title</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;