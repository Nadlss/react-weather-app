import React from "react";
import "./LocationAndDate.css";

export default function LocationAndDate() {
  let locationData = {
    city: "Lisbon",
    country: "(PT)"
  };
  let DateInfo = {
    day: "4th",
    month: "April",
    year: "2021"
  };
  return (
    <div className="introCityDate">
      {" "}
      <span className="cityName">{locationData.city}</span>{" "}
      <span className="countryID">{locationData.country}</span> -{" "}
      <span className="dateInfo">
        <span className="monthID">
          {DateInfo.month}
          <span className="dayID">{DateInfo.day}</span>,{" "}
          <span className="yearID">{DateInfo.year}</span>
        </span>
      </span>
    </div>
  );
}