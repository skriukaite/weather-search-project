import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  const apiKey = "c9e949520b33b479d97265ad4b8693ed";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Thu</div>
          <div>
            <WeatherIcon code="01d" size={34} />
          </div>
          <div>
            <span className="WeatherForecast-day">19°</span>
            <span className="WeatherForecast-night">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
