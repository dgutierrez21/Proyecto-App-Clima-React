import { useEffect, useRef, useState } from "react";
import { REACT_APP_KEY, REACT_APP_URL } from "../../setup";
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";

import styles from "./modulesCss/WeatherApp.module.css";
import { Loading } from "./Loading";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    try {
      document.title = `Weather | ${weather?.location.name ?? ""}`;
    } catch (error) {
      document.title = "Weather | Not Found";
    }
  }, [weather]);

  async function loadInfo(city = "Washington") {
    try {
      const request = await fetch(
        `${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`
      );

      const json = await request.json();

      setTimeout(() => {
        setWeather(json);
        inputRef.current.focus();
      }, 1000);

      console.log(json);
    } catch (error) {
      console.log("Catch Error.");
    }
  }

  function handleChangeCity(city) {
    setWeather(null);

    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm inputRef={inputRef} onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
};

export default WeatherApp;
