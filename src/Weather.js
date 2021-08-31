import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
// eslint-disable-next-line 
import axios from "axios";


export default function Weather(props) {
  // eslint-disable-next-line
  const [ready, setReady] = useState();
  // eslint-disable-next-line
  const [weatherData, setWeatherData] = useState({ ready: false });
  // eslint-disable-next-line
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: response.data.main.humidity,
      wind: response.data.main.speed,
      city: response.data.name


    })
    setReady(true);

  }

  function search() {
    const apiKey = "a6105b25a2bdbe419f9a7bbe7361c93e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)

  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
    // search for a city
  }

  function handleCityChange(event) {
    setCity(event.target.value)

  }
  if (weatherData.ready) {

    return <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange} />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w100" />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />

    </div>

  } else {
    search();
    return "Loading...";
  }
}