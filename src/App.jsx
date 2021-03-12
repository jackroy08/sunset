import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState([{ cnt: 8 }])

  const getWeather = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&appid=3bb95bedbc9f725d4f39cf19227f4aca`, requestOptions)
      .then((response) => response.json())
      .then((weatherRes) => {
        setWeather(weatherRes)
        console.log(weather)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getWeather()
    

  }, []);
  return (
    <div className="App">
      <p>{weather.cod}</p>
    </div>
  );
}

export default App;
