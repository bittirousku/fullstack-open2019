import axios from 'axios';
import React, { useState, useEffect } from 'react';


const apiKey = ""

const Weather = ({location}) => {
  const [ weather, setWeather] = useState({});

  const weatherUrl = `http://api.apixu.com/v1/current.json?key=${apiKey}&q=${location}`


  const hook = () => {
    axios
      .get(weatherUrl)
      .then(response => {
        setWeather(response.data);
      });
  };
  useEffect(hook, []);

  if (Object.entries(weather).length === 0 && weather.constructor === Object) {
    // FIXME: How to prevent the program do the API call multiple times per render??
    // FIXME: Why is the first result always an empty object??????
    // This `if` is here to prevent dying from the aforementioned empty object
    return (
      <></>
    )
  }

  console.log(location);
  console.log(weatherUrl);
  console.log(weather);

  return (
    <>
      <h2>Weather in {location}</h2>
      <img alt={weather.current.condition.text} src={weather.current.condition.icon}/>
      <p>Temperature: {weather.current.temp_c} degrees C</p>
      <p>Wind: {weather.current.wind_kph} km/h direction {weather.current.wind_dir}</p>
    </>
  )
}



export default Weather;
