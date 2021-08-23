import React from "react";
import "./Weather.css";
export default function Weather() {
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
    <h1>Barcelona</h1>
    <ul>
      <li>Wednesday 07:00</li>
      <li>Sunny</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix"></div>
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny" 
        className="float-left"/>
        <div className="float-left"></div>
        <span className="temperature">27</span>
        <span className="unit">°C</span>
        </div>
      <div className="col-6">
        <ul>
          <li> Precipitation: 10%</li>
          <li> Humidity: 80%</li>
          <li> Wind: 4km/h</li>
        </ul>
      </div>
    </div>
  </div>




}