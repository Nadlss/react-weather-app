import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="row searchForm">
      <div className="col">
        <form id="search-City-Form">
          <div className="col searchBarAndButtons">
            <input
              type="text"
              className="searchBar"
              placeholder="Type a city..."
              autoComplete="off"
              autoFocus="off"
              id="city-input"
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
  );
}