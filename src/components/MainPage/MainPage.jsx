import React from "react";
import styles from "./MainPage.module.scss";

const MainPage = (props) => {
  
  const getWeatherJsx = (weather) => (
    
    <div>
        <p>{weather.main}</p>
    </div>

    );

  return (
    <div>
      
      <p>{props.weather.name}</p>
      <p>{props.weather.main.temp-300}</p>
      <div>
      {props.weather.weather.map(getWeatherJsx)}
      </div>
      <p>------------------------</p>
    </div>
  );
};

export default MainPage;
