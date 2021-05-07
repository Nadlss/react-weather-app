import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready,setReady] = useState(false);
  const [weatherData,setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp:response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].main});
    setReady(true);
  }
  
  if (ready) {
    return (
    <div className="searchWeather">
      <div className="row searchForm">
      <div className="col">
        <form className="search-City-Form">
          <div className="col searchBarAndButtons">
            <input
              type="text"
              className="searchBar"
              placeholder="Type a city..."
              autoComplete="off"
              autoFocus="off"
            />

            <div className="searchButtons">
              <button className="searchButton" type="submit" value="search">
                <span role="img" aria-label="Planet Earth">
                  🌍
                </span>{" "}
                Search
                <div className="weather-forecast-temperature"></div>
              </button>
              <button className="locationButton" type="submit" value="location">
                <span role="img" aria-label="Location flag">
                  🚩
                </span>{" "}
                My Location
                <div className="weather-forecast-temperature"></div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="introCityDate">
      {" "}
      <span className="cityName">{weatherData.city}</span>{" "}
      <span className="countryID">({weatherData.country})</span> -{" "}
      <span className="dateInfo">
        <span className="monthID">
          April, 
          <span className="dayID">{4}</span>,{" "}
          <span className="yearID">{2021}</span>
        </span>
      </span>
    </div>
    <div className="currentWeatherInfo">
      <div className="row">
        <div className="col-4 currentImgColumn">
          <img
            src="/images/023-sun.png"
            className="currentWeatherImg"
            alt={weatherData.description}
          />
          <figcaption className="currentWeatcherCaption">
            {weatherData.description}
          </figcaption>
        </div>
        <div className="col-2 currentTemperatureDegrees">
          <h1 className="currentTemperature">{Math.round(weatherData.temperature)}</h1>
          <input
            type="image"
            className="btn-celsius temperatureButton"
            src="/images/038-celsius.png"
            alt="Celsius"
            
          />
          <input
            type="image"
            className="btn-fahrenheit temperatureButton"
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
          <span className="maxTempValue">{Math.round(weatherData.maxTemp)}º</span>
          <p />
          <img
            src="/images/006-low-temperature.png"
            alt="Minimum Temperature"
            className="MinTempImg"
          />
          <span className="minTempValue">{Math.round(weatherData.minTemp)}º</span>
        </div>
        <div className="col-3 humidityAndWind">
          <img
            src="/images/012-drops.png"
            alt="Humidity"
            className="humidityImg"
          />
          <span>{weatherData.humidity}%</span>
          <p />
          <img src="/images/035-blowing.png" alt="Wind" className="windImg" />
          <span>{Math.round(weatherData.wind*3.6)} Km/H</span>
        </div>
      </div>
    </div>
    </div>
  );
} else {
  const apiKey = "655cc338645c52514e1df31b37348c78";
  let city = "New Mexico"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";

}  
}


  
  
  
    
  