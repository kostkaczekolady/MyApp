// import axios from 'axios';
//
//
// export function getWeather (){
//         // e.preventDefault();
//     const API_KEY = '8d2de98e089f1c28e1a22fc19a24ef04';
//     const city = e.target.elements.city.value;
//     const country = e.target.elements.country.value;
//         return function (dispatch){
//             axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`).then((response)=>{
//
//
//             })
//
//         }
// }

import axios from 'axios';

const API_KEY = '8d2de98e089f1c28e1a22fc19a24ef04';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
