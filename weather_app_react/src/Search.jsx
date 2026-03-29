import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css"
import API_KEY from "../config";
export default function Search(){
    let [city,setCity]=useState("");
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let getWeatherInfo=async ()=>{
        let response=await fetch(url);
        let res=await response.json();
        console.log(res);
    }
    function handleInput(evt){
        setCity(evt.target.value);
    }
    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }
    return(
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} required onChange={handleInput}/>
                <br></br><br></br>
                <Button variant="contained" type="submit">Search</Button>
            </form>

        </div>
    );
}