import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  return (
    <div>
      <div className="row">
        <div className="col">
          {props.weekDay}
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col forecast-image">
            <WeatherIcon code="01d" size={35}/>
          </div>
          <div>
            <div className="row forecastMaxTemp">
              <div className="col">
                <img
                  src="/images/007-high-temperature.png"
                  alt="Max Temp"
                  className="maxLogo"
                />{" "}
                {props.maxTempValue}
              </div>
            </div>
            <div className="row forecastMinTemp">
              <div>
                <div className="col">
                  <img
                    src="/images/006-low-temperature.png"
                    alt="Min Temp"
                    className="minLogo"
                  />{" "}
                  {props.minTempValue}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
