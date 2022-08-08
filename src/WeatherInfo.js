import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-center">{props.data.city}</h1>
      <div className="text-center">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="row mt-3 ">
        <div className="col-8">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={64} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
