import React, { useState } from "react";
import "./Weather.css";
// eslint-disable-next-line 
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: response.data.main.humidity,
      wind: response.data.main.speed,
      city: response.data.name
      

    })
    setReady(true);

  }
  if (weatherData.ready) {
    
    return <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on" />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w100" />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix"></div>
          <img src={weatherData.iconUrl}
          alt={weatherData.description}></img>
          <div className="float-left"></div>
          <span className="temperature">{Math.round(weatherData.temperature)}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 10%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>




  } else {
    const apiKey = "a6105b25a2bdbe419f9a7bbe7361c93e";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metrics`;
    axios.get(apiUrl).then(handleResponse)

    return "Loading...";
}
}