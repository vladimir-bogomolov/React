import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

export const toCelsius = (kelvin) => {
  return Math.round((kelvin - 273.15) * 10) / 10;
};

const CityCard = ({ city, setWeatherData }) => {
  const { name, sys, weather, main, coord, id } = city;
  let iconId;
  const styles = {
    color: "black",
    textDecoration: "none",
  };
  switch (weather[0].main) {
    case "Thunderstorm":
      iconId = "11n";
      break;
    case "Drizzle":
      iconId = "09n";
      break;
    case "Rain":
      iconId = "10n";
      break;
    case "Snow":
      iconId = "13n";
      break;
    case "Clear":
      iconId = "01d";
      break;
    case "Clouds":
      iconId = "03n";
      break;
    default:
      iconId = null;
  }
  return (
    <div className="cityCard">
      <button
        className="close"
        onClick={() => {
          setWeatherData((prevData) => {
            return prevData.filter((elem) => elem.id !== id);
          });
        }}
      >
        X
      </button>
      <Link style={styles} to={`/${id}`}>
        <h1>
          {name}, {sys.country}
        </h1>
        {iconId && (
          <img
            src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
            alt="weather description"
          />
        )}
        <h4>{weather[0].main}</h4>
        <p>{weather[0].description}</p>
        <div className="temp">
          <p>min temp: {toCelsius(main.temp_min)}</p>
          <p>max temp: {toCelsius(main.temp_max)}</p>
        </div>
        <p>
          Location: {coord.lon}, {coord.lat}
        </p>
      </Link>
    </div>
  );
};

const Cities = ({ weatherData, setWeatherData }) => {
  return (
    <div id="citiesWrapper">
      {weatherData.map((city) => {
        return (
          <CityCard city={city} key={city.id} setWeatherData={setWeatherData} />
        );
      })}
    </div>
  );
};
export default Cities;
