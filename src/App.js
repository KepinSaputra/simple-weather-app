import { useEffect, useState } from "react"
import "./App.css"
import Cards from "./Cards"
import { getWeather, forecastWeather } from "./FetchWeatherAPI"
import Forecast from "./Forecast"

function App() {
  const [condition, setCondition] = useState([])
  const [location, setLocation] = useState([])
  const [current, setCurrent] = useState([])
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    getWeather().then((res) => {
      console.log(res)
      setLocation(res.location)
      setCurrent(res.current)
      setCondition(res.current.condition)
    })
    forecastWeather().then((result) => {
      setForecast(result)
    })
  }, [])
  return (
    <>
      <div className="heading">
        <div className="weather-content">
          <Cards location={location} current={current} condition={condition} />
        </div>
        <br />
        <div className="forecastDay">
          {forecast.map((day) => {
            return <Forecast key={day.date} forecast={day} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
