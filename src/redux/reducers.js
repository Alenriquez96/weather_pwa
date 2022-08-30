const initState = {
    cityWeather : {},
    totalCities : [],
    currentCity : {}
}


function weatherCast(state=initState, action) {
    switch (action.type) {
        case "WEATHER_DATA":
            return{
                ...state,
                cityWeather: action.payload,
                totalCities: initState.totalCities.push(action.payload)
            }    
        
        case "CURRENT_CITY":
            return{
                ...state,
                currentCity: action.payload
            }
        default:
            return state;
    }
}

export default weatherCast;