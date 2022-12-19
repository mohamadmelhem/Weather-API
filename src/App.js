import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import WeatherDetails from "./components/WeatherDetails";
import FakeWeather from "./Data/fakeWeatherData.json"
import "./App.css";
FakeWeather.list.lengh=24
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={

  //   }
  // }
  

  render() {

    // function timeArray(FakeWeather) {
    //   let time= []
    //   for (let i = 5; i <= 11; i++) {
    //     time.push(FakeWeather.list[i].dt_txt.slice(11,17));

    //   }
     
    //   return time;
    // }
    // function weatherArray(FakeWeather){
    //   let weatherA= []
    //   for (let i=5; i <=11; i++){
    //     weatherA.push(FakeWeather.list[i].temp)
    //   }
    //   return weatherA
    // }
    return (<div className="app">
      <Search />
      
      <div className="main">
        <WeatherItem mainData={FakeWeather.list[0]}/>
        <WeatherDetails data={FakeWeather}/>
      </div>
    </div>

    )
  }
}

export default App;
