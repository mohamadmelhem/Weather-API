import React from "react";
import cloudy from "../img/weather-icons/cloudy.svg"
import drizzle from "../img/weather-icons/drizzle.svg"
import clear from "../img/weather-icons/clear.svg"
class WeatherDetails extends React.Component{
    state = {
        data : ""
    }
    render(){
        return(
            <div className="all">
            <div className="box">
              <span>03:00</span>
              <img alt="batata" src={cloudy} />
              <span>11&deg;C</span>
            </div>
            <div className="box">
              <span>03:00</span>
              <img alt="batata" src={drizzle} />
              <span>11&deg;C</span>
            </div>
            <div className="box">
              <span>03:00</span>
              <img alt="batata" src={clear} />
              <span>11&deg;C</span>
            </div>
            <div className="box">
              <span>03:00</span>
              <img alt="batata" src={clear} />
              <span>11&deg;C</span>
            </div>
            <div className="box">
              <span>03:00</span>
              <img alt="batata" src={clear} />
              <span>11&deg;C</span>
            </div>
            <div className="box">
              <span>03:00</span>
              <img alt="batata" src={drizzle} />
              <span>11&deg;C</span>
            </div>
            <div className="box">
              <span>03:00</span>
              <img alt="batata" src={drizzle} />
              <span>11&deg;C</span>
            </div>
          </div>
       
        )
    }
}
export default WeatherDetails