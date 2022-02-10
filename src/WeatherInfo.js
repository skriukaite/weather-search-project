import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Weather row">
        <div className="weatherProperties col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="temperatureColumn">
          <div className="currentTemperature">
            <div>
              {Math.round(props.data.temperature)}{" "}
              <span className="celsius">°C</span>
            </div>
            <WeatherIcon code={props.data.icon} size={60} />
          </div>
          <div className="temperatureProperties">
            <div>Humidity: {props.data.humidity} %</div>
            <div>Wind: {props.data.wind} m/s</div>
            <div>Pressure: {props.data.pressure} hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
}
