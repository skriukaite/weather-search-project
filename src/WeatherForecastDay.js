import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function dayTemperature() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}°`;
  }

  function nightTemperature() {
    let temperature = Math.round(props.data.temp.night);
    return `${temperature}°`;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={34} />
      </div>
      <div>
        <span className="WeatherForecast-day-temperature">
          {dayTemperature()}
        </span>
        <span className="WeatherForecast-night-temperature">
          {nightTemperature()}
        </span>
      </div>
    </div>
  );
}
