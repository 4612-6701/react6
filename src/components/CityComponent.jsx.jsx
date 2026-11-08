import React from "react";
import perfectDay from '../assets/icons/perfect-day.svg'


function CityComponents ({setCity, fetchWeather}){


    return(
        <>
            <img className="WelcomeLogo" src={perfectDay} alt='perfectDay'/>
            <span className="ChooseCityLabel">Find Weather of your city</span>
            <form className="SearchBox" onSubmit={fetchWeather}>
                <input type="text" placeholder="City"  onChange={(event)=>setCity(event.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </>
    );
}

export default CityComponents;