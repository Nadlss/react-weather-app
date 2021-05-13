import React from "react";
import "./FormattedDate.css"

export default function FormattedDate(props) {
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekDays[props.date.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let month = months[props.date.getMonth()];
let hours = props.date.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}

let minutes = props.date.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}

return (
<div className="dateInfo">  
        <span className="weekDay">{day}</span>, {""}
        <span className="monthID">
          {month}{" "}
          <span className="dayID">{props.date.getDate()}</span>,{" "}
          <span className="yearID">{props.date.getFullYear()}</span>
        </span>{""} - {""}
        <span>{hours}:{minutes}H</span>
      </div> );
}