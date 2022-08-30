import React from 'react';
import Fetch from './Fetch';
import Weather from './Weather';
import Current from './Current';
import { useSelector } from 'react-redux/es/exports';

const Main = () => {
    const cityData = useSelector(state=>state.cityWeather);
    const currentCityData = useSelector(state=>state.currentCity);

    const chooseData = () =>{
        if(cityData.main && !currentCityData.main){
            return  <Weather cityData={cityData}/>
        } else if(currentCityData.main){
            return  <Weather cityData={currentCityData}/>
        }
    }

  return (
    <main>
        <Fetch/>
        <Current/>
        {/* {cityData.main?<Weather cityData={cityData}/>:""} */}
        {chooseData()}
    </main>
  )
}

export default Main