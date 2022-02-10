import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header> Weather App</header>
        <Weather defaultCity="New York" />
      </div>
      <footer>
        {" "}
        This project was coded by Sandra Kriukaitė and is open-sourced on{" "}
        <a
          href="https://github.com/skriukaite/weather-search-project"
          taget="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://weather-search-project.netlify.app/"
          taget="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Netlify
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
