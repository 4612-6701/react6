import React, { use, useState } from "react";
import './index.css';
import CityComponents from "./components/CityComponent.jsx";
import WeatherComponent from "./components/WeatherComponent.jsx";

function App (){

    const [City, setCity] = useState('')
    const [weather,setWeather] = useState(null)
    const fetchWeather= async(event)=>{
        event.preventDefault();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
        const data = await response.json()
        setWeather(data)
    }
    return(
        <div className="Container">
            <span className="AppLabel">React Weather App</span>
        {City && weather ? (
            <WeatherComponent weather={weather}/>
        ):(
            <CityComponents setCity={setCity} fetchWeather={fetchWeather}/>
        )}
        </div>
        
    );
}
export default App;