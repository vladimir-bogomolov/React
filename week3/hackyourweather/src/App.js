import { useState } from "react";
import "./App.css";
import Cities from "./Cities";
import Search from "./Search";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  return (
    <div id="app">
      <h1>Weather</h1>
      <Search weatherData={weatherData} setWeatherData={setWeatherData} />
      {weatherData.length > 0 ? (
        <Cities weatherData={weatherData} setWeatherData={setWeatherData} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
