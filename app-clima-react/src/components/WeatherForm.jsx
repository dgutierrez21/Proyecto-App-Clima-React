import { useRef, useState } from "react";

import styles from "./modulesCss/WeatherForm.module.css";

export const WeatherForm = ({ onChangeCity, inputRef }) => {
  const [city, setCity] = useState("");

  const prevCity = useRef();

  function onChange(e) {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const value = e.target[0].value;

    if (value !== "" && city !== prevCity.current) {
      onChangeCity(city);
    }

    prevCity.current = value;
  }

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit} action="">
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          onChange={onChange}
          placeholder="Search a city"
        />
        <button className="mt-2 w-50 btn btn-dark">Search</button>
      </form>
    </>
  );
};
