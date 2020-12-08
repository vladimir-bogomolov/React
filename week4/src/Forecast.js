import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";
import { toCelsius } from "./Cities";

export default function Forecast({ match }) {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const url = `https://api.openweathermap.org/data/2.5/forecast?id=${match.params.cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
      setError("");

      setIsoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.cod === "404") {
          setError("City is not found!");
        } else {
          let newData = {
            name: data.city.name,
            country: data.city.country,
            list: data.list.map((item) => ({
              date: item.dt_txt,
              temp: toCelsius(item.main.temp),
            })),
          };
          setForecast(newData);
        }
      } catch (err) {
        setError("Something went wrong with fetching data...");
      } finally {
        setIsoading(false);
      }
    }
    fetchData();
  }, [match.params.cityId]);
  const styles = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <div>
      <div>
        {isLoading && <div className="loader"></div>}
        {error !== "" ? <p className="error">{error}</p> : ""}
      </div>
      {forecast && (
        <h1>
          {forecast.name}, {forecast.country}: 5 day forecast
        </h1>
      )}
      {forecast && (
        <div className="forecastCard">
          <div style={{ width: "100%", height: 300, fontSize: 9 }}>
            <ResponsiveContainer>
              <AreaChart
                data={forecast.list}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="temp"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
      <Link style={styles} to="/">
        <div className="buttonBack">Go Back</div>
      </Link>
    </div>
  );
}
