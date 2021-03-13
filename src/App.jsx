
import React, { useState, useEffect } from 'react';
import './App.css';
import SecondPage from "./components/SecondPage/SecondPage"
import MainPage from './components/MainPage/MainPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSun, faCloud, faCloudShowersHeavy, faSnowflake, faTemperatureLow, faTachometerAlt, faTint, faCaretUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./App.module.scss";

const App = () => {
  library.add(fab, faCheckSquare, faCoffee, faSun, faCloud, faCloudShowersHeavy, faSnowflake , faTemperatureLow, faTachometerAlt, faTint, faCaretUp)
  
  const [forecast, setForecast] = useState({
    list: [
      { dt_txt: "init", main: { temp: "0" }, weather: [{ description: "sun", main:"Rain" }] }
    ],
    city: {
      name: "init"
    }

  });
  
  

  const [weather, setWeather] = useState({
    name: "init",
    main: [
      { humidity: "0", temp: "0", max_temp: "0", min_temp: "0" }
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
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=3bb95bedbc9f725d4f39cf19227f4aca`, requestOptions)
      .then((response) => response.json())
      .then((forecastRes) => {
        setForecast(forecastRes)
        
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
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=3bb95bedbc9f725d4f39cf19227f4aca`, requestOptions)
      .then((response) => response.json())
      .then((weatherRes) => {
        setWeather(weatherRes)
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    
    getForecast()
    getWeather()
    
    


  }, []);
  return (
    <div className="App">
      
      <MainPage className={styles.main} weather={weather} />
      <SecondPage forecast={forecast} weather={weather} />
    </div>
  );
}

export default App;
