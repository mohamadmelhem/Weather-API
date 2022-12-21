import React from "react";
import cloudy from "../img/weather-icons/cloudy.svg"
import drizzle from "../img/weather-icons/drizzle.svg"
import clear from "../img/weather-icons/clear.svg"
class WeatherDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){

        return(
            
            <div className="all">
            <div className="box">
              <span>{this.props.data.list[1].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={cloudy} />
              <span>{Math.trunc(this.props.data.list[1].main.temp )}&deg;C</span>
            </div>
            <div className="box">
              <span>{this.props.data.list[2].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={drizzle} />
              <span>{Math.trunc(this.props.data.list[2].main.temp )}&deg;C</span>
            </div>
            <div className="box">
              <span>{this.props.data.list[3].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={clear} />
              <span>{Math.trunc(this.props.data.list[3].main.temp )}&deg;C</span>
            </div>
            <div className="box">
              <span>{this.props.data.list[4].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={clear} />
              <span>{Math.trunc(this.props.data.list[4].main.temp )}&deg;C</span>
            </div>
            <div className="box">
              <span>{this.props.data.list[5].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={clear} />
              <span>{Math.trunc(this.props.data.list[5].main.temp )}&deg;C</span>
            </div>
            <div className="box">
              <span>{this.props.data.list[6].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={drizzle} />
              <span>{Math.trunc(this.props.data.list[6].main.temp )}&deg;C</span>
            </div>
            <div className="box">
              <span>{this.props.data.list[7].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={drizzle} />
              <span>{Math.trunc(this.props.data.list[7].main.temp )}&deg;C</span>
            </div>
          </div>
       
        )
    }
}
export default WeatherDetails