import React, { useState } from "react";

export default function UnitsConversion(props) {
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {
        return (
        <div className="unitsButtons">
        <h1 className="currentTemperature">{Math.round(props.celsius)}</h1>
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
            onClick={convertToFahrenheit}
          />
        </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32
        return (
        <div className="unitsButtons">
        <h1 className="currentTemperature">{Math.round(fahrenheit)}</h1>
          <input
            type="image"
            className="btn-celsius temperatureButton"
            src="/images/038-celsius.png"
            alt="Celsius"
            onClick={convertToCelsius}
          />
          <input
            type="image"
            className="btn-fahrenheit temperatureButton"
            src="/images/039-fahrenheit.png"
            alt="Fahrenheit"
          />
        </div>
        );
    }}