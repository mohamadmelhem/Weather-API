import React from "react";
import clear from "../img/weather-icons/clear.svg"
class WeatherItem extends React.Component {  
  render () {
    return (
        <div className="live">
          <img src={clear} alt="weather"/>
          <h3>{this.props.mainData.weather[0].main}</h3>
            <p className="details">Temperature <span>{Math.trunc(this.props.mainData.main.temp_min - 273.15)}&deg;</span><span> to </span><span>{Math.trunc(this.props.mainData.main.temp_max - 273.15)}&deg;C</span></p>
          <p className="more">hmidtly <span> {this.props.mainData.main.humidity}% </span>pessure <span> {this.props.mainData.main.pressure}</span></p>
        </div>
        
    )
  }
}
export default WeatherItem