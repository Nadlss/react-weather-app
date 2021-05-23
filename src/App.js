import './App.css';
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="container wholeBody">
          <div className="headerPiece">
            <Weather defaultCity="Lisbon"/>
          </div>
          <p />
          <div className="forecastPiece">Forecast:</div>
          <div className="forecastWeather">
            <div className="row">
              <div className="col first-day-fc">
                <Forecast weekDay="Sat" maxTempValue={20} minTempValue={17} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="credits">This project was coded by {" "}
        <a href="https://github.com/Nadlss" className="appAuthor">
          Susana Simões
        </a> and is 
        <a href="https://github.com/Nadlss/react-weather-app" className="code"> open-sourced on GitHub</a>
      </p>
      <div className="iconCredits">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
