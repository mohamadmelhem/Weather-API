import React from "react";
import cloudy from "../img/weather-icons/cloudy.svg"
import drizzle from "../img/weather-icons/drizzle.svg"
import clear from "../img/weather-icons/clear.svg"
import fog from "../img/weather-icons/fog.svg"
import partlycloudy from "../img/weather-icons/partlycloudy.svg"
import rain from "../img/weather-icons/rain.svg"
import snow from "../img/weather-icons/snow.svg"
import storm from "../img/weather-icons/storm.svg"
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
class WeatherDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        const imageSrc = (image) => {
            if (image == "Clouds") return cloudy
            else if (image ==="Clear") return clear
            else if (image === "Mostlycloudy") return mostlycloudy
            else if (image === "Partlycloudy") return partlycloudy
            else if (image === "Snow") return snow
            else if (image === "Storm") return storm
            else if (image === "Rain") return rain
            else if (image === "Fog") return fog
            else if (image === "Drozzle") return drizzle
            

        }

        return(
            
            <div className="all">
            <div className="box">
              <span>{this.props.data.list[1].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={imageSrc(this.props.data.list[1].weather[0].main)} />
              <span>{Math.trunc(this.props.data.list[1].main.temp )}&deg;C</span>
            </div>
            <div className="box">
              <span>{this.props.data.list[2].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={imageSrc(this.props.data.list[2].weather[0].main)} />
              <span>{Math.trunc(this.props.data.list[2].main.temp )}&deg;C</span>
            </div>
            <div className="box">
              <span>{this.props.data.list[3].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={imageSrc(this.props.data.list[3].weather[0].main)} />
              <span>{Math.trunc(this.props.data.list[3].main.temp )}&deg;C</span>
            </div>
            <div className="box">
              <span>{this.props.data.list[4].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={imageSrc(this.props.data.list[4].weather[0].main)} />
              <span>{Math.trunc(this.props.data.list[4].main.temp )}&deg;C</span>
            </div>
            <div className="box">
              <span>{this.props.data.list[5].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={imageSrc(this.props.data.list[5].weather[0].main)} />
              <span>{Math.trunc(this.props.data.list[5].main.temp )}&deg;C</span>
            </div>
            <div className="box">
              <span>{this.props.data.list[6].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={imageSrc(this.props.data.list[6].weather[0].main)} />
              <span>{Math.trunc(this.props.data.list[6].main.temp )}&deg;C</span>
            </div>
            <div className="box">
              <span>{this.props.data.list[7].dt_txt.slice(11,16)}</span>
              <img alt="batata" src={imageSrc(this.props.data.list[7].weather[0].main)} />
              <span>{Math.trunc(this.props.data.list[7].main.temp )}&deg;C</span>
            </div>
          </div>
       
        )
    }
}
export default WeatherDetails