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
class WeatherItem extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render() {
    console.log(this.props.mainData)
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
    return (
         <div className="live">
            <img src={imageSrc(this.props.mainData.weather[0].main)} alt="weather" />
            <h3>{this.props.mainData.weather[0].main}</h3>
            <p className="details">Temperature <span>{Math.trunc(this.props.mainData.main.temp_min)}&deg;</span><span> to </span><span>{Math.trunc(this.props.mainData.main.temp_max)}&deg;C</span></p>
            <p className="more">hmidtly <span> {Math.trunc(this.props.mainData.main.humidity)}% </span>pessure <span> {Math.trunc(this.props.mainData.main.pressure)}</span></p>
          </div> 
    )
  }
}
export default WeatherItem