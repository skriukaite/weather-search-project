import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weatherProperties">
        <h1>New York </h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly cloudy</li>
        </ul>
      </div>
      <div className="temperatureColumn">
        <div className="currentTemperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="Rain"
          />
          <div>
            7 <span className="units">C°|F°</span>{" "}
          </div>
        </div>
        <div className="temperatureProperties">
          <div>Precipitation: 90%</div>
          <div>Humidity: 94%</div>
          <div>Wind: 5 m/s</div>
        </div>
      </div>
    </div>
  );
}
