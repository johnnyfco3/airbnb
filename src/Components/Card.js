import React from "react";
import {FaStar} from "react-icons/fa"

export function Card({element}){
    let badgeText
    if(element.openSpots === 0){
        badgeText = "SOLD OUT";
    } else if(element.location === "Online"){
        badgeText = "ONLINE";
    }

    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={element.img} alt="card pic"></img>
            <div className="rating">
                <p><FaStar style={{color: "red"}}/>{element.stats.rating}<span className="gray">({element.stats.reviews}) {element.country}</span></p>
            </div>
            <p className="title">{element.title}</p>
            <p className="price"><b>From ${element.price}</b> / person</p>
        </div>
    )
}

export default Card;