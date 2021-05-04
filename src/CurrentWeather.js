import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let WeatherData = {
    caption: "Sunny",
    currentTemp: "24",
    currentMax: "26",
    currentMin: "19",
    humidity: "17",
    wind: "12"
  };

  return (
    <div className="currentWeatherInfo">
      <div className="row">
        <div className="col-4 currentImgColumn">
          <img
            src="/images/023-sun.png"
            className="currentWeatherImg"
            alt="Current Weather"
          />
          <figcaption className="currentWeatcherCaption">
            {WeatherData.caption}
          </figcaption>
        </div>
        <div className="col-2 currentTemperatureDegrees">
          <h1 className="currentTemperature">{WeatherData.currentTemp}</h1>
          <input
            type="image"
            className="btn-celsius"
            id="temperatureButton"
            src="/images/038-celsius.png"
            alt="Celsius"
            
          />
          <input
            type="image"
            className="btn-fahrenheit"
            id="temperatureButton"
            src="/images/039-fahrenheit.png"
            alt="Fahrenheit"
            
          />
        </div>
        <div className="col-3 maxAndMinTemp">
          <img
            src="/images/007-high-temperature.png"
            alt="Maximum Temperature"
            className="MaxTempImg"
          />
          <span className="maxTempValue">{WeatherData.currentMax}º</span>
          <p />
          <img
            src="/images/006-low-temperature.png"
            alt="Minimum Temperature"
            className="MinTempImg"
          />
          <span className="minTempValue">{WeatherData.currentMin}º</span>
        </div>
        <div className="col-3 humidityAndWind">
          <img
            src="/images/012-drops.png"
            alt="Humidity"
            className="humidityImg"
          />
          <span>{WeatherData.humidity}%</span>
          <p />
          <img src="/images/035-blowing.png" alt="Wind" className="windImg" />
          <span>{WeatherData.wind}Km/H</span>
        </div>
      </div>
    </div>
  );
}
