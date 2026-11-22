import React from "react";
import { WeatherInfoIcons } from "../Constants";
function WeatherInfoComponent({name, value}){

    return(
        <div className="InfoConteiner">
            <img className="InfoIcon" src={WeatherInfoIcons[name]} />
            <span className="InfoLabel">{name} {value}</span>
            
        </div>
    )
}

export default WeatherInfoComponent;