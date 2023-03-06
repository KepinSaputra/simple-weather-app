import React from "react"

export default function Forecast({ forecast }) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const day = forecast.date
  const dateObject = new Date(day)
  const getDay = weekday[dateObject.getDay()]
  return (
    <>
      <div className="forecast">
        <div>{getDay}</div>
        <p>Temp:</p>
        <div style={{ marginTop: "15px" }}>{forecast.day.avgtemp_c}</div>
      </div>
    </>
  )
}
