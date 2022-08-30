import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";


const Current = () => {
    const dispatch = useDispatch();


    const handleClick = () =>{
        try {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(async(position) => {
                    let lat = position.coords.latitude;
                    let lng = position.coords.longitude;
                    const req = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_API_KEY}`);
                    const data = req.data;
                    console.log(data);
                    dispatch({
                        type: "CURRENT_CITY",
                        payload: data
                    })
                });
            } else {
            console.warn("Tu navegador no soporta Geolocalización!! ");
            }

        } catch (error) {
            console.log(error);
        }
    }


    return (
    <button id='currentLocBtn' onClick={handleClick}>Search current location</button>
    )
}

export default Current