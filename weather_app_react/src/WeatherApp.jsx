import Search from "./Search"
import Weather from "./Weather";
import { useState } from "react";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
            city:"patna",
            humidity
            : 
            64,
            temp
            : 
            24.05,
            tempMax
            : 
            24.05,
            tempMin
            : 
            24.05,
            weather
            : 
            "haze",
            windSpeed
            : 
            1.54})


    let updateInfo=(result)=>{
        setWeatherInfo(result);
        console.log("Updated info",weatherInfo);
        console.log(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <Search updateInfo={updateInfo}/>
            <Weather info={weatherInfo}/>  
        </div>
    );
}