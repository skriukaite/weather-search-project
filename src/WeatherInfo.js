import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Weather">
        <div className="weatherProperties">
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
            <WeatherIcon code={props.data.icon} size={60} />
            <div>
              {Math.round(props.data.temperature)}{" "}
              <span className="units">C°|F°</span>{" "}
            </div>
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
