import React, { useState, useEffect } from "react";
import styles from "./SecondPage.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SecondPage = (props) => {


  const getWeatherInfoJsx = (weather) => {
    let wIcon = "sun";
    switch (weather.main) {
      case "Rain":
        wIcon = "cloud-showers-heavy";
        break;
      case "Clouds":
        wIcon = "cloud";
        break;
      case "Clear":
        wIcon = "sun";
        break;
      case "Snow":
        wIcon = "snowflake";
        break;

      default:
        break;
    }
    return (
      <div>
        <p>{weather.description}</p>
        <FontAwesomeIcon icon={wIcon} />
      </div>
    )
  };
  const getForecastJsx = (list) => (
    <div>
      <p>{list.main.temp}</p>
      <div>
        {list.weather.map(getWeatherInfoJsx)}
      </div>
      <p>{list.dt_txt.slice(11, 16)}</p>
      <p>{list.main.humidity}</p>



    </div>

  );



  return (
    <div>
      <h2>Details</h2>
      
      <h4>current weather</h4>
      <h5>{props.weather.main.temp}</h5>
      <h5>{props.weather.main.pressure}</h5>
      <h5>{props.weather.main.humidity}</h5>
      <h5>{props.weather.clouds.all}</h5>
      <h4>24h Forecast</h4>
      {props.forecast.list.map(getForecastJsx)}

    </div>
  );
};


export default SecondPage;
