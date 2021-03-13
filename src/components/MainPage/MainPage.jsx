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
    return (
      <div className={styles.description}>
        <FontAwesomeIcon className={styles.icon} icon={wIcon} />
        <h5>{weather.main}</h5>
      </div>
    )
  };

  return (
    <div className={styles.mainPage}>
      <div className={styles.topbar}>
        <div>
          {props.weather.weather.map(getWeatherJsx)}
        </div>
        <div>
          <h5>{props.weather.name}</h5>
          <p>{Date(Date.now()).slice(0, 10)}</p>
          <h4>{(Math.round(props.weather.main.temp)+ "°C")}</h4>
        </div>
      </div>


    </div>
  );
};

export default MainPage;
