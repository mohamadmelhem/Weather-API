import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import WeatherDetails from "./components/WeatherDetails";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (<div className="app">
<Search/>
<div className="main">
  <WeatherItem />
  <WeatherDetails />
 </div>
    </div>

    )
  }
}

export default App;
