import React from 'react';

const AllCities = (props) => {

  return (
    <section id='sectionAllCities'>
        {props.totalCities.map((total,i)=>{
     return <div className='divTotalCities' key={i}>
                <img style={{width: "25px", height: "20px"}} src={`https://countryflagsapi.com/png/${total.sys.country}`}alt="" />
                <h3>{total.name}</h3> 
                <p>{(total.main.temp-273.15).toFixed(2)} Cº</p>
                <p>{total.weather[0].description}</p>
            </div>
        })}
    </section>
  )
}

export default AllCities