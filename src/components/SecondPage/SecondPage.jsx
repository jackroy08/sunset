import React, { useState, useEffect } from "react";
import styles from "./SecondPage.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SecondPage = (props) => {
  const { getClick } = props;
  const { changeBG } = props;
  const [enabled, setEnabled] = useState("Enable")
  const [bgColour, setBgColour] = useState("white")
  const [primaryTextColour, setPrimaryTextColour] = useState("black")
  const [secondaryTextColour, setSecondaryTextColour] = useState("#707070")

  const darkModeToggle = () => {
    if (enabled == "Enable") {

      setBgColour("black");
      setPrimaryTextColour("white");
      setSecondaryTextColour("#dedede");
      setEnabled("Disable");
    }
    else {

      setBgColour("#FFFFFF");
      setPrimaryTextColour("black");
      setSecondaryTextColour("#707070");
      setEnabled("Enable");
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
        <p style={{ color: secondaryTextColour }} >{weather.description}</p>
        <FontAwesomeIcon style={{ color: secondaryTextColour }} className={styles.Icon} icon={wIcon} />
      </div>
    )
  };
  const getForecastJsx = (list) => (
    <div className={styles.forecastItem}>
      <p style={{ color: secondaryTextColour }} >{list.dt_txt.slice(11, 16)+ ""}</p>
      <div className={styles.forecastInfo}>


        {list.weather.map(getWeatherInfoJsx)}

        <p style={{ color: secondaryTextColour }} >{Math.round(list.main.temp) + " °C"}</p>
      </div>





    </div>

  );



  return (
    <div style={{ backgroundColor: bgColour }} className={styles.secondPage}>
      <button className={styles.lctButton} onClick={() => getClick()}><FontAwesomeIcon className={styles.pin} icon={"map-pin"} /><h5>Use Current Location</h5></button>
      <div className={styles.currentWeather}>
        <h2 style={{ color: primaryTextColour }}>Details</h2>
        <p style={{ color: secondaryTextColour }}>Current Weather</p>
        <div className={styles.currentInfoStats}>
          <div className={styles.pair}>
            <div className={styles.currentInfoItem}>
              <FontAwesomeIcon style={{ color: secondaryTextColour }} className={styles.Icon} icon={"temperature-low"} />
              <div className={styles.currentInfoItemFigure}>
                <h6 style={{ color: secondaryTextColour }}>Temperature</h6>
                <p style={{ color: secondaryTextColour }}>{Math.round(props.weather.main.temp) + " °C"}</p>
              </div>
            </div>

            <div className={styles.currentInfoItem}>
              <FontAwesomeIcon style={{ color: secondaryTextColour }} className={styles.Icon} icon={"tachometer-alt"} />
              <div className={styles.currentInfoItemFigure}>
                <h6 style={{ color: secondaryTextColour }}>Pressure</h6>
                <p style={{ color: secondaryTextColour }}>{(props.weather.main.pressure) / 1000 + " bar"}</p>
              </div>
            </div>
          </div>

          <div className={styles.pair}>
            <div className={styles.currentInfoItem}>
              <FontAwesomeIcon style={{ color: secondaryTextColour }} className={styles.Icon} icon={"tint"} />
              <div className={styles.currentInfoItemFigure}>
                <h6 style={{ color: secondaryTextColour }}>Humidity</h6>
                <p style={{ color: secondaryTextColour }}>{props.weather.main.humidity + " %"}</p>
              </div>
            </div>

            <div className={styles.currentInfoItem}>
              <FontAwesomeIcon style={{ color: secondaryTextColour }} className={styles.Icon} icon={"cloud"} />
              <div className={styles.currentInfoItemFigure}>
                <h6 style={{ color: secondaryTextColour }} >Cloud Cover</h6>
                <p style={{ color: secondaryTextColour }} >{props.weather.clouds.all + " %"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.forecast}>
        <h2 style={{ color: primaryTextColour }}>Forecast</h2>
        <p style={{ color: secondaryTextColour }} >For next 24H</p>
        <div className={styles.forecastList}>
        <div className={styles.forecastContainer}>
          {props.forecast.list.map(getForecastJsx)}
          </div>
        </div>
      </div>


      <div className={styles.settings}>

        <div className={styles.settingsContainer}>

          <h2>Settings</h2>

          <h4>Dark Mode</h4>
          <button className={styles.darkModeToggle} onClick={() => darkModeToggle()}><FontAwesomeIcon className={styles.phon} icon={"mobile-alt"} /> <h5>{enabled} Dark Mode</h5></button>
          <h4>Change Background</h4>
          <div className={styles.bgButtonContainer}>
            <button className={styles.bgButton} onClick={() => changeBG("\"https://i.imgur.com/Hd9QIYF.png\"")}><h5>Morn</h5></button>
            <button className={styles.bgButton} onClick={() => changeBG("\"https://i.imgur.com/6nen5df.png\"")}><h5>Day</h5></button>
            <button className={styles.bgButton} onClick={() => changeBG("\"https://i.imgur.com/ukHtbVK.png\"")}><h5>Eve</h5></button>
            <button className={styles.bgButton} onClick={() => changeBG("\"https://i.imgur.com/jBJSAhf.png\"")}><h5>Night</h5></button>
          </div>
        </div>
      </div>
    </div>

  );
};


export default SecondPage;
