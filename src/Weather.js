import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [temperature, setTemperature] = useState(null);
  const [ready, setReady] = useState(false);

  function getResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
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
              {temperature} <span className="units">C°|F°</span>{" "}
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
  } else {
    const apiKey = "c9e949520b33b479d97265ad4b8693ed";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);
    return "Loading";
  }
}
