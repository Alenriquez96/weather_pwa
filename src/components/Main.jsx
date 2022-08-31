import React, { useState } from 'react';
import Fetch from './Fetch';
import Weather from './Weather';
import Current from './Current';
import AllCities from './AllCities';
import { useSelector } from 'react-redux/es/exports';
import { BounceLoader } from 'react-spinners';

const Main = () => {
    const cityData = useSelector(state=>state.cityWeather);
    const totalCities = useSelector(state=>state.totalCities);

    const [showAll, setShowAll] = useState(false);

    console.log(showAll);
    const handleClick = () =>{
      if (showAll===false) {
        setShowAll(true);
      } else{
        setShowAll(false);
      }
    }

    const chooseData = () =>{
      if (showAll===true) {
         return <AllCities totalCities={totalCities}/>
      } else if (showAll===false && cityData.main) {
         return <Weather cityData={cityData}/>
      } else if(!cityData.main){
        <BounceLoader color='#fdf8f8' size={300}/>
      }
    }

  return (
    <main>
        {totalCities.length>0?<button id='btnSearchs' onClick={handleClick}>{showAll===true?"Back":"Your searchs"}</button>:""}
        {showAll===false?<Fetch/>:""}
        {showAll===false?<Current/>:""}
        {chooseData()}
    </main>
  )
}

export default Main