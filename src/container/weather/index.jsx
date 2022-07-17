import React, { useState } from 'react'
import Search from '../../components/search'
import CurrentWeather from '../../components/weather/currentWeather'
import Forecast from '../../components/weather/forcast'
import http from '../../services/httpService';

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const getWeather = async location => {
    let appid = process.env.REACT_APP_WEATHER_APP_ID
    let openweathermap = process.env.REACT_APP_WEATHER_API_URL
    let currentResponse = await http.get(`${openweathermap}/weather?q=${location}&appid=${appid}`)
    setCurrentWeather(currentResponse.data)
    let forcastResponse = await http.get(`${openweathermap}/forecast?q=${location}&appid=${appid}`)
    setForecast(forcastResponse.data)
  }

  const handleOnSearchChange = async (location) => {
    await getWeather(location)
  }
  
  return (
    <div>
        <Search onSearchChange={handleOnSearchChange} />
        { currentWeather && <CurrentWeather data={currentWeather} /> }
        { forecast && <Forecast data={forecast} /> }
    </div>
  )
}

export default Weather