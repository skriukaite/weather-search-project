import React from "react";
import Weather from "./Weather";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header> Weather App</header>
        <Search />
        <Weather />
      </div>
      <footer>
        {" "}
        This project was coded by Sandra Kriukaitė and is open-sourced on{" "}
        <a
          href="https://github.com/skriukaite/weather-search-project"
          taget="_blank"
        >
          {" "}
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
