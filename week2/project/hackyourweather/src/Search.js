import React, { useState } from "react";

const Search = ({ weatherData, setWeatherData }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsoading] = useState(false);

  const getWeatherData = async (e) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
    setError("");
    if (city !== "") {
      setIsoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.cod == "404") {
          setError("City is not found!");
        } else {
          let duplicateCity = false;
          duplicateCity = weatherData.find((elem) => {
            if (elem.id == data.id) {
              return true;
            }
            return false;
          });
          if (!duplicateCity) {
            setWeatherData([...weatherData, data]);
          }
          setCity("");
        }
      } catch (err) {
        console.log(err);
        setError("Something went wrong with fetching data...");
      } finally {
        setIsoading(false);
      }
    } else {
      setError("Fill in the city field");
    }
  };

  return (
    <div>
      <div className="search-container">
        <div className="search-groupe">
          <i className="fas fa-search"></i>
          <input
            type="text"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            placeholder="Search City"
          />
        </div>

        <button
          type="submit"
          onClick={() => {
            getWeatherData(city);
          }}
        >
          Search
        </button>
      </div>
      <div>
        {isLoading && <div className="loader"></div>}
        {error !== "" ? <p className="error">{error}</p> : ""}
      </div>
    </div>
  );
};
export default Search;
