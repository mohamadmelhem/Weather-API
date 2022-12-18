import React from "react";
import clear from "../img/weather-icons/clear.svg"
class WeatherItem extends React.Component {
  state = {
    data : ""
  }
  render () {
    return (
      
        <div className="live">
          <img src={clear} alt="weather"/>
            <p className="details">Temperature <span>10&deg;</span><span> to </span><span>11&deg;C</span></p>
          <p className="more">hmidtly <span> 78% </span>pessure <span> 100<sup>8</sup>4<sup>8 </sup></span></p>
        </div>
        
    )
  }
}
export default WeatherItem