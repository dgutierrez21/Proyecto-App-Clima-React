import { useState } from "react";

import styles from "./modulesCss/WeatherForm.module.css";

export const WeatherForm = ({ onChangeCity, inputRef }) => {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onChangeCity(city);
  }

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit} action="">
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          onChange={onChange}
        />
      </form>
    </>
  );
};
