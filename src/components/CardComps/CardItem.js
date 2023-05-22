import React from 'react';
import {Link} from "react-router-dom";
import './Cards.css';
function CardItem(props) {
    return (
        <>
        <li className="cards__item">
            <Link cards_item_link>
                <figure className="cards__item__pic-wrap">
                    <img src="/" alt="Skills"
                        className="cards__item_img"/>
                </figure>
                <div className="cards__item__info">
                   <h5 className="cards__item__text"/>
                </div>
            </Link>
        </li>
        </>
    );
}

export default CardItem;