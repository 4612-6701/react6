import react from "react";
import {WeatherIcons} from '../Constants.js' 
function WeatherComponent(weather){

    weather = `${weather?.main?.temp}`  
    const description = `${weather?.weather[0]?.description}`

    return(
        <>
            <div className="WeatherContainer">
                <span className="Condition">
                    <span>`${Math.floor(weather-273)} ${description}` </span>
                    
                </span>
                <img className="WeatherIcon" src={WeatherIcons[weather?.weather[0]?.icon]}/>
            </div>
            <span className="Location"> Name, Country</span>
            <span className="WeatherInfoLabel">Weather Info</span>
        </>
    );
}





export default WeatherComponent;