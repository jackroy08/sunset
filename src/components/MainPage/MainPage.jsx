import React, { useState, useEffect } from "react";
import styles from "./MainPage.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainPage = (props) => {
  const [TOD, setTOD] = useState ( "\"https://i.imgur.com/jBJSAhf.png\"");

  const changeBackground = () => {
    
    let timeNow = Date(Date.now()).slice(16, 18);
    console.log(timeNow);
    if (timeNow<=17 && timeNow>=8) {
      setTOD("\"https://i.imgur.com/6nen5df.png\"");
    }
    if (timeNow<=8 && timeNow>=5) {
      setTOD("\"https://i.imgur.com/Hd9QIYF.png\"");
    }
    if (timeNow<=20 && timeNow>=18) {
      setTOD("\"https://i.imgur.com/ukHtbVK.png\"");
      console.log("op")
    }
    console.log(TOD)
    // setTOD("\"https://i.imgur.com/6nen5df.png\"");
    
    
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  }
  
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



  useEffect(() => {
    changeBackground();
    getLocation();


  }, []);

  return (
    
      <div className={styles.mainPage} style={{backgroundImage: "url(" + TOD + ")"}}>
      <div className={styles.topbar}>
        <div>
          {props.weather.weather.map(getWeatherJsx)}
        </div>
        <div className={styles.description}>
          <h5>{props.weather.name}</h5>
          <p>{Date(Date.now()).slice(0, 10)}</p>
          <h4>{(Math.round(props.weather.main.temp)+ "°C")}</h4>
        </div>
      </div>

      <FontAwesomeIcon className={styles.icon, styles.arrow} icon="caret-up" />
    </div>
  );
};

export default MainPage;
