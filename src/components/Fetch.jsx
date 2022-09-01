import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';



const Fetch = () => {
    const dispatch = useDispatch();

    const [cityName, setCityName] = useState("los angeles");
    const [error, setError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        setCityName(e.target.city.value)
    }

    useEffect(() => {
      const httpRequest = async()=>{
        try {
            const req = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`);
            const data = req.data;
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

    
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" id='cityName' name='city' placeholder='Introduce city'/>
            <motion.button             
            whileHover={{
            scale: 1.3,
            transition: { duration: 0.3 },
            }} type="submit" value="Submit"><img style={{borderRadius:"5px"}} src="https://i.pinimg.com/originals/b7/02/af/b702afc7b811840ebc49037cdc98bc45.jpg" alt="" /></motion.button>
        </div>
        {error==="ERR_BAD_REQUEST"?<h3 style={{color:"red"}}>City was not found</h3>:""}
    </form>
  )
}

export default Fetch