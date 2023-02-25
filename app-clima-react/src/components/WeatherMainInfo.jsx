export const WeatherMainInfo = ({ weather }) => {
  return (
    <>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>

      <div>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.text}
          />
        </div>

        <div>
          <div>{weather?.current.condition.text}</div>
          <div>{weather?.current.temp_c}°C</div>
        </div>
      </div>
    </>
  );
};
