import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import SecondPage from "./components/SecondPage/SecondPage"
import './App.css';
import MainPage from './components/MainPage/MainPage';

const App = () => {
  const [forecast, setForecast] = useState({ 
    list: [
      { dt_txt:"init",  main: {temp: "0"}, weather: [ {description: "sun"}]}
    ],
    city: {
      name: "init"
    }
    
  });

  const [weather, setWeather] = useState({
    name: "init", 
    main: [
      { humidity: "0", temp:"0", max_temp:"0", min_temp:"0" }
    ],
    weather: [
      { main: "sun" }
    ],
    clouds: [
      { all: "100" }
    ],
  });

  const getForecast = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&appid=3bb95bedbc9f725d4f39cf19227f4aca`, requestOptions)
      .then((response) => response.json())
      .then((forecastRes) => {
        setForecast(forecastRes)
        console.log(forecast)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const getWeather = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=3bb95bedbc9f725d4f39cf19227f4aca`, requestOptions)
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
    console.log(forecast)
    getForecast()
    getWeather()
    console.log(forecast.list)
    

  }, []);
  return (
    <div className="App">
      <MainPage weather={weather}/>
      <SecondPage forecast={forecast} weather={weather}/>
    </div>
  );
}

export default App;
