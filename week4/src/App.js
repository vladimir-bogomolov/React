import { useState } from "react";
import "./App.css";
import Cities from "./Cities";
import Search from "./Search";
import Forecast from "./Forecast";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  return (
    <Router>
      <div id="app">
        <Switch>
          <Route path="/" exact>
            <h1>Weather</h1>
            <Search weatherData={weatherData} setWeatherData={setWeatherData} />
            {weatherData.length > 0 && (
              <Cities
                weatherData={weatherData}
                setWeatherData={setWeatherData}
              />
            )}
          </Route>
          <Route path="/:cityId" component={Forecast} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
