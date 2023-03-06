import axios from "axios"

export async function getWeather() {
  const weather = await axios.get(
    `${process.env.REACT_APP_BASEURL}/current.json?key=${process.env.REACT_APP_APIKEY}&q=Jakarta`
  )
  return weather.data
}

export async function forecastWeather() {
  const search = await axios.get(
    `${process.env.REACT_APP_BASEURL}/forecast.json?key=${process.env.REACT_APP_APIKEY}&q=jakarta&days=7`
  )
  return search.data.forecast.forecastday
}
