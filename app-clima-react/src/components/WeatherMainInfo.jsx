import styles from "./modulesCss/WeatherMainInfo.module.css";

export const WeatherMainInfo = ({ weather }) => {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>

      <div className={styles.row}>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.text}
          />
        </div>

        <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {weather?.current.condition.text}
          </div>
          <div className={styles.current}>{weather?.current.temp_c}°C</div>
        </div>
      </div>

      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d43074.92228892402!2d${weather?.location.lon}8!3d${weather?.location.lat}9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1677332904485!5m2!1ses-419!2scr`}
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
