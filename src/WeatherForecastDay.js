import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={34} />
      </div>
      <div>
        <span className="WeatherForecast-day-temperature">
          {Math.round(props.data.temp.day)}°
        </span>
        <span className="WeatherForecast-night-temperature">
          {Math.round(props.data.temp.night)}°
        </span>
      </div>
    </div>
  );
}
