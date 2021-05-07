import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready,setReady] = useState(false);
  const [temperature,setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
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
      <span className="cityName">London</span>{" "}
      <span className="countryID">(PT)</span> -{" "}
      <span className="dateInfo">
        <span className="monthID">
          April
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
            alt="Current Weather"
          />
          <figcaption className="currentWeatcherCaption">
            "Sunny"
          </figcaption>
        </div>
        <div className="col-2 currentTemperatureDegrees">
          <h1 className="currentTemperature">{temperature}</h1>
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
          <span className="maxTempValue">{26}º</span>
          <p />
          <img
            src="/images/006-low-temperature.png"
            alt="Minimum Temperature"
            className="MinTempImg"
          />
          <span className="minTempValue">{19}º</span>
        </div>
        <div className="col-3 humidityAndWind">
          <img
            src="/images/012-drops.png"
            alt="Humidity"
            className="humidityImg"
          />
          <span>{17}%</span>
          <p />
          <img src="/images/035-blowing.png" alt="Wind" className="windImg" />
          <span>{12}Km/H</span>
        </div>
      </div>
    </div>
    </div>
  );
} else {
  const apiKey = "655cc338645c52514e1df31b37348c78";
  let city = "London"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";

}  
}


  
  
  
    
  