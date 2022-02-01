import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);

  function getResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      pressure: response.data.main.pressure,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="weatherProperties">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Wednesday 07:00</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="temperatureColumn">
          <div className="currentTemperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
              alt="Rain"
            />
            <div>
              {Math.round(weatherData.temperature)}{" "}
              <span className="units">C°|F°</span>{" "}
            </div>
          </div>
          <div className="temperatureProperties">
            <div>Humidity: {weatherData.humidity} %</div>
            <div>Wind: {weatherData.wind} m/s</div>
            <div>Pressure: {weatherData.pressure} hPa</div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c9e949520b33b479d97265ad4b8693ed";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);
    return "Loading";
  }
}
