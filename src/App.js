import './App.css';
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="container wholeBody">
          <div className="headerPiece">
            <Weather />
          </div>
          <p />
          <div className="forecastPiece">Forecast:</div>
          <div className="forecastWeather">
            <div className="row">
              <div className="col three-hours-fc">
                <Forecast hours="3:00" maxTempValue={20} minTempValue={17} />
              </div>
              <div className="col six-hours-fc">
                <Forecast hours="6:00" maxTempValue={7} minTempValue={2} />
              </div>
              <div className="col nine-hours-fc">
                <Forecast hours="9:00" maxTempValue={15} minTempValue={12} />
              </div>
              <div className="col twelve-hours-fc">
                <Forecast hours="12:00" maxTempValue={12} minTempValue={7} />
              </div>
              <div className="col fifteen-hours-fc">
                <Forecast hours="15:00" maxTempValue={24} minTempValue={20} />
              </div>
            </div>
            <div className="lastUpdate"> Last updated: 08:00 </div>
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
