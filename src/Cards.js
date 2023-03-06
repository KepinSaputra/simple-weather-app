import React from "react"

export default function Cards({ location, current, condition }) {
  return (
    <>
      <div className="location">
        <h1>{location.name}</h1>
      </div>
      <div className="head-content">
        <h3 className="current-temp">{current.temp_c}&#x2103;</h3>
        <h3 className="feels-like">
          Feels like: {current.feelslike_c}&#x2103;
        </h3>
        <img className="weather-img" src={condition.icon} alt="" />
        <h4 className="condition-text">{condition.text}</h4>
      </div>
      <div className="grid-content">
        <p>Cloud: {current.cloud}</p>
        <p>Humidity: {current.humidity}</p>
        <p>UV: {current.uv}</p>
        <p>Wind: {current.wind_mph} MPH</p>
        <p>Gust: {current.gust_mph} MPH</p>
        <p>Pressure: {current.pressure_in}</p>
      </div>
    </>
  )
}
