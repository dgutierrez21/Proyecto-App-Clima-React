import { useState } from "react";
import { REACT_APP_KEY, REACT_APP_URL } from "../../setup";
import { WeatherForm } from "./WeatherForm";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  async function loadInfo(city = "london") {
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
    <>
      <WeatherForm onChangeCity={handleChangeCity} />

      <div>{weather?.current.temp_c}</div>
    </>
  );
};

export default WeatherApp;
