import React from "react";
import "./Weather.css";
export default function Weather () {
    return (
      <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-light w-100"/>
            </div>
        </div>
        </form>
        <h1>Kyiv</h1>
        <ul>
          <li>Thursday 13:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
            <span className="temperature">26</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
                <li>Precipitation: 43%</li>
                <li>Humidity: 62%</li>
                <li>Wind: 18 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}