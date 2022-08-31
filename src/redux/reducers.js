const initState = {
    cityWeather : {},
    totalCities : [],
}


function weatherCast(state=initState, action) {
    switch (action.type) {
        case "WEATHER_DATA":
            function addUniqeObj(data) {
                let index = -1;
              
                for(let i = 0; i < state.totalCities.length; i++) {
                  if(state.totalCities[i].name === data.name) {
                    index = i;
                  }
                }
              
                if(index > -1) {
                  state.totalCities[index] = data;
                } else {
                  state.totalCities.push(data)
                }
              
              }
              addUniqeObj(action.payload);
              
            return{
                ...state,
                cityWeather: action.payload,

            }    

        default:
            return state;
    }
}

export default weatherCast;