import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import WeatherDetails from "./components/WeatherDetails";
import FakeWeather from "./Data/FakeWeatherData.json"
import "./App.css";
FakeWeather.list.lengh = 24
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{}
    }
  }

  // componentDidMount() {
  //   fetch('http://api.openweathermap.org/data/2.5/forecast?q=$london&cnt=8&units=metric&appid=$55229a9d8ce6b656375eedca5a3be0ca')
  //     .then(function (response) {
  //       // handle the response
  //       console.log(response)
  //     })
  // }
  render() {
    // .catch(function() {
    //   // handle the error
    // });
    return (<div className="app">
      <Search />

      <div className="main">
        <WeatherItem mainData={FakeWeather.list[0]} />
        <WeatherDetails data={FakeWeather} />
      </div>
    </div>

    )
  }
}

export default App;
