import React from "react";
import styles from "./MainPage.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainPage = (props) => {
  
  const getWeatherJsx = (weather) => {
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
    return(
    <div>
        <p>{weather.main}</p>
        <FontAwesomeIcon icon={wIcon} />
    </div>
    )
  };

  return (
    <div>
      
      <p>{props.weather.name}</p>
      <p>{props.weather.main.temp}</p>
      <div>
      {props.weather.weather.map(getWeatherJsx)}
      </div>
      <p>------------------------</p>
    </div>
  );
};

export default MainPage;
