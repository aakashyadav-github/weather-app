import axios from "axios";

// initialise axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    console.log(config.url)
    // if any custom headers needs to be attached
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // if response is truthly return response
    return response;
  },
  function (error) {
    // return error
    console.log('before setting error', error);
    return Promise.reject(error);
  }
);

export default api;