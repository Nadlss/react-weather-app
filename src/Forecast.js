import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState (false);
  let [forecast, setForecast] = useState (null);
  
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  if (loaded) {
    console.log(forecast);
    return (
        <div>
          <div className="row">
            <div className="col">
              <ForecastDay data={forecast[0]} />
            </div>
          </div>
        </div>
      );
  } else {
      const apiKey = "655cc338645c52514e1df31b37348c78";
      let latitude = props.coordinates.lat;
      let longitude = props.coordinates.lon;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
      axios.get(apiUrl).then(handleResponse);

      return null;    
  }
}
