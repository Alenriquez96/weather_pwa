import React, { useState } from 'react';
import Fetch from './Fetch';
import Weather from './Weather';
import Current from './Current';
import AllCities from './AllCities';
import { useSelector } from 'react-redux/es/exports';
import { FadeLoader } from 'react-spinners';
import { motion } from 'framer-motion';

const Main = () => {
    const cityData = useSelector(state=>state.cityWeather);
    const totalCities = useSelector(state=>state.totalCities);

    const [showAll, setShowAll] = useState(false);

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
      } 
      else if (showAll===false && cityData.main) {
         return <Weather cityData={cityData}/>
      } 
      else if(!cityData.main){
        return <div id='divSpinner'><FadeLoader color='#fdf8f8' height={20}/></div>
      }
    }

  return (
    <main>
        {totalCities.length>0?
          <motion.button
            id='btnSearchs' 
            onClick={handleClick}
            whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} 
           >
            {showAll===true?"Back":"Your searchs"}
          </motion.button>:""}
        {showAll===false?<Fetch/>:""}
        {chooseData()}
        {showAll===false?<Current/>:""}
    </main>
  )
}

export default Main