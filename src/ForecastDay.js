import React from "react";
import WeatherIcon from "./WeatherIcon"; 
import "./Forecast.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return days[day];
  }

  return (
    <div>
      <div>
        {day ()}
      </div> 
      <div className="row">
        <div className="col forecast-image">
          <WeatherIcon code={props.data.weather[0].icon} size={35}/>
        </div>
        <div className="row forecastMaxTemp">
          <div className="col">
            <img
            src="/images/007-high-temperature.png"
            alt="Max Temp"
            className="maxLogo"
            />{" "}
            {maxTemperature()}
          </div>
        </div>
        <div className="row forecastMinTemp">
          <div className="col">
            <img
            src="/images/006-low-temperature.png"
            alt="Min Temp"
            className="minLogo"
            />{" "}
            {minTemperature()}
          </div>
        </div>
      </div>
    </div>
  );
}
