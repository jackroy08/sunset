import React, { useState, useEffect } from "react";
import styles from "./MainPage.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroadcastTower } from "@fortawesome/free-solid-svg-icons";

const MainPage = (props) => {
  const [TOD, setTOD] = useState("\"https://i.imgur.com/jBJSAhf.png\"");
let [tod1] = useState("");
  tod1=props.tod1
  
  const changeBackground = () => {

    let timeNow = Date(Date.now()).slice(16, 18);
    console.log(timeNow);
    if (tod1 == "default") {
      if (timeNow <= 17 && timeNow >= 8) {
        setTOD("\"https://i.imgur.com/6nen5df.png\"");
      }
      if (timeNow <= 8 && timeNow >= 5) {
        setTOD("\"https://i.imgur.com/Hd9QIYF.png\"");
      }
      if (timeNow <= 20 && timeNow >= 18) {
        setTOD("\"https://i.imgur.com/ukHtbVK.png\"");
        console.log("op")
      }
      console.log(tod1)
      console.log(TOD)
      

      }
      else{
        console.log(tod1 + "")
        setTOD(tod1);
        console.log("worked")
      }
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
        
        <h6>{weather.main}</h6>
      </div>
    )
  };



  useEffect(() => {
    changeBackground();
    getLocation();
    console.log(props.tod1)


  }, [props.tod1]);

  return (

    <div className={styles.mainPage} style={{ backgroundImage: "url(" + TOD + ")" }}>
      
        
          
        
        <div className={styles.temperature}>
          <h5>{props.weather.name}</h5>
          <p>{Date(Date.now()).slice(0, 10)}</p>
          
        </div>
        
     
      
      <div className={styles.bottom}>
      <h4>{(Math.round(props.weather.main.temp) + "°C")}</h4>
      {props.weather.weather.map(getWeatherJsx)}
      <FontAwesomeIcon className={styles.icon, styles.arrow} icon="caret-up" />
      </div>
    </div>
  );
};

export default MainPage;
