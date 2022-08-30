import React from 'react';
import Fetch from './Fetch';
import Weather from './Weather';
import Current from './Current';
import { useSelector } from 'react-redux/es/exports';

const Main = () => {
    const cityData = useSelector(state=>state.cityWeather);

  return (
    <main>
        <Fetch/>
        <Current/>
        {cityData.main?<Weather cityData={cityData}/>:""}
    </main>
  )
}

export default Main