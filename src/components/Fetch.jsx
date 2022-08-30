import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const Fetch = () => {
    const dispatch = useDispatch();

    const [cityName, setCityName] = useState("los angeles");
    const [error, setError] = useState("");

    useEffect(() => {
      const httpRequest = async()=>{
        try {
            const req = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`);
            const data = req.data;
            console.log(data);
            dispatch({
                type: "WEATHER_DATA",
                payload: data
            })
            setError("");
        } catch (error) {
            console.log(error);
            setError(error.code);
        }
      }
      httpRequest();
    }, [cityName]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setCityName(e.target.city.value)
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" id='cityName' name='city' placeholder='Introduce city'/>
            <button type="submit" value="Submit"><img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-512.png" alt="" /></button>
        </div>
        {error==="ERR_BAD_REQUEST"?<h3 style={{color:"red"}}>City was not found</h3>:""}
    </form>
  )
}

export default Fetch