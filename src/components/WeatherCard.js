import React from "react";
import "./WeatherCard.css";

function WeatherCard({ weather }) {
  const { name, main, weather: weatherDetails } = weather;
  const condition = weatherDetails[0].main;
  const icon = weatherDetails[0].icon;
  const description = weatherDetails[0].description;

  return (
    <div className="weather-card">
      <h2 className="city-name">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="weather-icon"
      />
      <p className="temperature">{Math.round(main.temp)}°C</p>
      <p className="condition">{condition}</p>
      <p className="humidity">💧 Humidity: {main.humidity}%</p>
    </div>
  );
}

export default WeatherCard;
