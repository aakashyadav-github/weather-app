
import React from "react";

const WeatherCard = (props) => {
  // set a const and get icon URL from env file
  const ICON_BASE_URL = process.env.REACT_APP_WEATHER_ICON_URL
  // TO DO - error boundary could be set 
    if(props.error.length > 0) {
      // if error prop has data
      return (
        <div className="flex flex-col items-center mt-10 mx-8 px-8 py-10 shadow-lg rounded-lg card-error-gradient md:mx-40 lg:w-5/12 xl:w-5/12 lg:mx-auto xl:mx-auto">
        <p className="text-xl font-sans font-semibold text-white">{props.error} </p>
        <i className="mt-4 text-6xl text-white fas fa-exclamation-triangle"></i>
      </div>
      )
    }
    else {
      // id weatherData prop has value
      return (
        <div className="flex flex-col items-center mt-10 mx-8 px-8 py-10 shadow-lg rounded-lg card-gradient md:mx-20 lg:w-5/12 xl:w-5/12 lg:mx-auto xl:mx-auto">
        <p className="text-xl font-sans font-semibold text-white">Right Now in</p>
        <p className="mt-4 text-2xl font-sans font-bold text-white">{props.weatherData.name}</p>
        <p className="mt-4 text-xl font-sans font-semibold text-white">It's {props.weatherData.weather[0].description}</p>
        <div className="md:flex-row md:gap-5 mt-4 flex flex-col items-center">
        <img className="w-full md:w-3/12 lg:w-4/12 xl:w-4/12" src={`${ICON_BASE_URL}${props.weatherData.weather[0].icon}@4x.png`} alt="weather Icon"/>
        <p className="mt-4 md:mt-0 text-4xl md:text-4xl font-sans font-bold text-white" >{props.weatherData.main.temp} &#8451;</p>
        <div className="flex flex-col items-center md:items-start">
          <p className="mt-4 md:mt-0 text-2xl md:text-xl font-sans font-bold text-white" >{props.weatherData.wind.speed} m/s</p>
          <p className="mt-2 md:mt-0 text-2xl md:text-xl font-sans font-bold text-white" >{props.weatherData.main.pressure} mm hg</p>
          <p className="mt-2 md:mt-0 text-2xl md:text-xl font-sans font-bold text-white" >{props.weatherData.main.humidity} %</p>
        </div>
        </div>
      </div>
      )
    }
    
  } 


export default WeatherCard
