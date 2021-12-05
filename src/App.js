// weather app
// api key - done
// apiwrapper - done
// responsiveness - done
// api Integration - done
// validation and error handling - done
// icon mapping - done

import React, { useState } from 'react';
import api from "./api/Api"
import formUrl from './api/formUrl'
import WeatherCard from "./Components/WeatherCard"

import './App.css';

function App() {
  const [cityName, setCityName] = useState('')
  const [weatherData, setWeatherData] = useState('')
  const [error, setError] = useState('')
  const getWeather = () => {
    // api call get weather data for a city
    let completeURL = formUrl(`weather?q=${cityName}`)
    api.get(completeURL).then(data => {
      // if success
      if(data.status === 200) {
        setError('')
        setWeatherData(data.data)
        console.log('weather data', data.data)
      } 
    }).catch(err => {
      // if error
      setError(err.response.data.message)
      console.log('err', err.response.data.message)
    })
  }

  return (
    <div claaName="App"> 
      <p className="mt-10 text-4xl font-mono font-semibold text-center text-blue-900" >Weather app</p>
        <div className="flex flex-col items-center mt-8 mx-auto">
          <form className="w-full max-w-sm px-8">
            {/* Dynamic error binding */}
          <div className={`flex items-center border-b ${error.length > 0 ? "border-red-500" : "border-blue-500"} py-2 `}>
            <input value={cityName} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter City Name" onChange={(e) => setCityName(e.target.value)}></input>
            <button className={`flex-shrink-0 ${error.length > 0 ? "bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700" : "bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700"}  text-sm border-4 text-white py-1 px-2 rounded`} type="button" onClick={getWeather}>
              Get Weather
            </button>
          </div>
          {error.length > 0 && <p className="text-sm font-normal text-red-500" > Please Try Again </p>}
        </form>
        </div>
        {/* Initially when weather data is empty dont show the card */}
        {weatherData && <WeatherCard weatherData={weatherData} error={error}  />}
    </div>
  );
}

export default App;
