import React from 'react';
import {WeatherIcons} from '../Constants.js'
import WeatherInfoComponent from './WeatherInfoComponent.jsx';

function WeatherComponent({weather}){

    const description = `${weather?.weather[0]?.description}`

    const isDay = `weather?.weather[0].icon`.includes()
    if (isDay === false){
        console.log('Сейас ночь')
    }
    else{
        console.log('Сейчас день')
    }
    function getTime(timeStamp){
        return(
            `${new Date(timeStamp*1000).getHours()} : ${new Date(timeStamp*1000).getMinutes()}`
        )
    }
    console.log(getTime(1703743585))
    return(
        <>
            <div className="WeatherContainer">
                <span className="Condition">
                    <span>{Math.floor(`${weather?.main?.temp}` -273)}℃ | {description} </span>
                    
                </span>
                <img className="WeatherIcon" src={WeatherIcons[weather?.weather[0]?.icon]} alt=' '/>
            </div>
            <span className="Location">{weather?.name} {weather?.sys?.country}</span>
           <span className="WeatherInfoLabel">Weather Info</span>
           <div className='WeatherInfoContainer'>
            <WeatherInfoComponent />
            <WeatherInfoComponent />
            <WeatherInfoComponent />
            <WeatherInfoComponent />
           </div>
        </>
    );

}





export default WeatherComponent;