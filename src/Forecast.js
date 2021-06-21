import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState (false);
  let [forecast, setForecast] = useState (null);
  
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

function load() {
  const apiKey = "655cc338645c52514e1df31b37348c78";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
}

  if (loaded) {
    return (
        <div>
          <div className="row">
            {forecast.map(function(dailyForecast, index) {
              if (index < 5) {
                return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
              } else {
                return null;
              }
               })}
          </div>
        </div>
      );
  } else {
      load();

      return null;    
  }
}
