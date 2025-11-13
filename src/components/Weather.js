import React, { useState } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ API Key setup — uses .env key or fallback for testing
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || "Your_API_KEY";

  const fetchWeather = async (cityName) => {
    if (!cityName) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      // ✅ Correct API endpoint
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      // ✅ Validate response
      if (response.data && response.data.cod === 200) {
        setWeather(response.data);
      } else {
        setError("City not found. Please check spelling and try again.");
      }
    } catch (err) {
      // ✅ Handles wrong city name or network issues
      if (err.response && err.response.status === 404) {
        setError("City not found. Please enter a valid city name.");
      } else {
        setError("Unable to fetch weather data. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchWeather(city.trim());
  };

  return (
    <div className="weather-container">
      <h1 className="title">🌦️ Weather App</h1>

      <SearchBox city={city} setCity={setCity} handleSearch={handleSearch} />

      {loading && <p className="loading">Fetching weather details...</p>}
      {error && <p className="error">{error}</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default Weather;
