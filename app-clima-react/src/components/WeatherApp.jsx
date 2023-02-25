import { useEffect, useRef, useState } from "react";
import { REACT_APP_KEY, REACT_APP_URL } from "../../setup";
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";

import styles from "./modulesCss/WeatherApp.module.css";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "Washington") {
    try {
      const request = await fetch(
        `${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`
      );

      const json = await request.json();

      setWeather(json);

      console.log(json);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);

    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm inputRef={inputRef} onChangeCity={handleChangeCity} />

      <WeatherMainInfo weather={weather} />
    </div>
  );
};

export default WeatherApp;
