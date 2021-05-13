import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
    return (
            <div>
            <div className="introCityDate">
      {" "}
      <span className="cityName">{props.data.city}</span>{" "}
      <span className="countryID">({props.data.country})</span>
      <FormattedDate  date={props.data.date} />
    </div>
    <div className="currentWeatherInfo">
      <div className="row">
        <div className="col-4 currentImgColumn">
          <img
            src={props.data.iconUrl}
            className="currentWeatherImg"
            alt={props.data.description}
          />
          <figcaption className="currentWeatcherCaption text-capitalize">
            {props.data.description}
          </figcaption>
        </div>
        <div className="col-2 currentTemperatureDegrees">
          <h1 className="currentTemperature">{Math.round(props.data.temperature)}</h1>
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
          <span className="maxTempValue">{Math.round(props.data.maxTemp)}º</span>
          <p />
          <img
            src="/images/006-low-temperature.png"
            alt="Minimum Temperature"
            className="MinTempImg"
          />
          <span className="minTempValue">{Math.round(props.data.minTemp)}º</span>
        </div>
        <div className="col-3 humidityAndWind">
          <img
            src="/images/012-drops.png"
            alt="Humidity"
            className="humidityImg"
          />
          <span>{props.data.humidity}%</span>
          <p />
          <img src="/images/035-blowing.png" alt="Wind" className="windImg" />
          <span>{Math.round(props.data.wind*3.6)} Km/H</span>
        </div>
      </div>
    </div>
    </div>
    );
}