import axios from 'axios';


export function getWeather (){
        // e.preventDefault();
    const API_KEY = '8d2de98e089f1c28e1a22fc19a24ef04';
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
        return function (dispatch){
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`).then((response)=>{


            })

        }
}

