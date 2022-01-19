import React from "react";
import Grid from "../images/grid.png"

export function Hero(){
    return(
        <div className="hero">
            <div className="image">
                <img src={Grid} alt="Hero Top Content"></img>
            </div>
            <div className="content">
                <h1>Online Experiences</h1>
                <p className="paragraph">Join unique interactive activities led by one-of a kind hosts-
                    all without leaving home
                </p>
            </div>
        </div>
    )
}

export default Hero;