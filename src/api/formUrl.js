const formUrl = (params) => {
  return `${params}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
}

export default formUrl