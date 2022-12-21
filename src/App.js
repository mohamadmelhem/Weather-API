import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import WeatherDetails from "./components/WeatherDetails";
import FakeWeatherData from "./Data/FakeWeatherData.json"
import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange=this.handleInputChange.bind(this)
    this.state = {
      city:"",
      isLoaded: false,
      melhem: FakeWeatherData,
    }
    
  }
  
  fetchData = (n) => {
    console.log(n)
    let key='55229a9d8ce6b656375eedca5a3be0ca'
    let fetchData=`http://api.openweathermap.org/data/2.5/forecast?q=${n}&cnt=8&units=metric&appid=55229a9d8ce6b656375eedca5a3be0ca`
    let url=`http://api.openweathermap.org/data/2.5/forecast?q=${n}&cnt=8&units=metric&appid=${key}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {console.log(data); this.setState({melhem: data}); this.setState({isLoaded:true})})
  }
  handleInputChange = value => {
    this.setState({ name: value });
    this.fetchData(value)
  };
  render() {

    return (
    <div className="app">
       <Search event={this.handleInputChange} />

      <div className="main">
        {this.state.isLoaded && <WeatherItem mainData={this.state.melhem.list[0]}  img={this.props.mainData}/>}
        {this.state.isLoaded && <WeatherDetails data={this.state.melhem} img={this.props.data}/>}
      </div>
    </div>

    )
  }
}

export default App;
