import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData,setWeatherData] = useState({ready:false});
  const [city,setCity] = useState(props.defaultCity)
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      maxTemp: response.data.main.temp_max,
      minTemp:response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: require(src=`https://mystifying-poincare-0681d1.netlify.app/${response.data.weather[0].icon}@2x.png`),
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description});

  }

function search(){
  const apiKey = "655cc338645c52514e1df31b37348c78";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value);
  }
  
  if (weatherData.ready) {
    return (
    <div className="searchWeather">
      <div className="row searchForm">
      <div className="col">
        <form className="search-City-Form" onSubmit={handleSubmit}>
          <div className="col searchBarAndButtons">
            <input
              type="text"
              className="searchBar"
              placeholder="Type a city..."
              autoComplete="off"
              autoFocus="off"
              onChange={handleCityChange}
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
    <WeatherInfo data={weatherData} />
    </div>
  );
} else {
  search();
  return "Loading...";

}  
}


  
  
  
    
  