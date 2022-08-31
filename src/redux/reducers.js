const initState = {
    cityWeather : {},
    totalCities : [],
}


function weatherCast(state=initState, action) {
    switch (action.type) {
        case "WEATHER_DATA":
            state.totalCities.push(action.payload)
            return{
                ...state,
                cityWeather: action.payload,

            }    

        default:
            return state;
    }
}

export default weatherCast;