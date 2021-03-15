import React, { useState, useEffect } from "react";
import styles from "./SecondPage.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SecondPage = (props) => {
  const { getClick } = props;
  const [enabled, setEnabled] = useState("Enable")

  const darkModeToggle = () =>{
    if (enabled=="Enable"){
      setEnabled("Disable")
    }
    else {
      setEnabled("Enable")
    }
  }
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
      <div className={styles.horizontal}>
        <p>{weather.description}</p>
        <FontAwesomeIcon className={styles.Icon} icon={wIcon} />
      </div>
    )
  };
  const getForecastJsx = (list) => (
    <div className={styles.forecastItem}>
      <p>{list.dt_txt.slice(11, 16)}</p>
      <div className={styles.forecastInfo}>


        {list.weather.map(getWeatherInfoJsx)}

        <p>{Math.round(list.main.temp) + " °C"}</p>
      </div>





    </div>

  );



  return (
    <div className={styles.secondPage}>
      <button className={styles.lctButton} onClick={() => getClick()}><FontAwesomeIcon className={styles.pin} icon={"map-pin"} /><h5>Use Current Location</h5></button>
      <div className={styles.currentWeather}>
        <h2>Details</h2>
        <p>Current Weather</p>
        <div className={styles.currentInfoStats}>
          <div className={styles.pair}>
            <div className={styles.currentInfoItem}>
              <FontAwesomeIcon className={styles.Icon} icon={"temperature-low"} />
              <div className={styles.currentInfoItemFigure}>
                <h6>Temperature</h6>
                <p>{Math.round(props.weather.main.temp) + " °C"}</p>
              </div>
            </div>

            <div className={styles.currentInfoItem}>
              <FontAwesomeIcon className={styles.Icon} icon={"tachometer-alt"} />
              <div className={styles.currentInfoItemFigure}>
                <h6>Pressure</h6>
                <p>{(props.weather.main.pressure) / 1000 + " bar"}</p>
              </div>
            </div>
          </div>

          <div className={styles.pair}>
            <div className={styles.currentInfoItem}>
              <FontAwesomeIcon className={styles.Icon} icon={"tint"} />
              <div className={styles.currentInfoItemFigure}>
                <h6>Humidity</h6>
                <p>{props.weather.main.humidity + " %"}</p>
              </div>
            </div>

            <div className={styles.currentInfoItem}>
              <FontAwesomeIcon className={styles.Icon} icon={"cloud"} />
              <div className={styles.currentInfoItemFigure}>
                <h6>Cloud Cover</h6>
                <p>{props.weather.clouds.all + " %"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.forecast}>
        <h2>Forecast</h2>
        <p>For next 24H</p>
        <div className={styles.forecastList}>
          {props.forecast.list.map(getForecastJsx)}
        </div>
      </div>


      <div className={styles.settings}>
        <div className={styles.settingsContainer}>
          <h2>Settings</h2>
          <button onClick={() => darkModeToggle()}>{enabled} Dark Mode</button>
          
        </div>
      </div>
    </div>

  );
};


export default SecondPage;
