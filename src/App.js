import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (<div className="app">
      <div className="navbar">
        <input type="search" placeholder="type a city name" />
        <button >Find weather</button>
      </div>

      <div className="main">
        <div className="live">
          <img src="http://placekitten.com/200/200"/>
            <p className="details">Temperature <span>10&deg;</span><span> to </span><span>11&deg;C</span></p>
          <p className="more">hmidtly <span> 78% </span>pessure <span> 100<sup>8</sup>4<sup>8 </sup></span></p>
        </div>
        <div className="all">
          <div className="box">
            <span>03:00</span>
            <img src="http://placekitten.com/100/100" />
            <span>11&deg;C</span>
          </div>
          <div className="box">
            <span>03:00</span>
            <img src="http://placekitten.com/100/100" />
            <span>11&deg;C</span>
          </div>
          <div className="box">
            <span>03:00</span>
            <img src="http://placekitten.com/100/100" />
            <span>11&deg;C</span>
          </div>
          <div className="box">
            <span>03:00</span>
            <img src="http://placekitten.com/100/100" />
            <span>11&deg;C</span>
          </div>
          <div className="box">
            <span>03:00</span>
            <img src="http://placekitten.com/100/100" />
            <span>11&deg;C</span>
          </div>
          <div className="box">
            <span>03:00</span>
            <img src="http://placekitten.com/100/100" />
            <span>11&deg;C</span>
          </div>
          <div className="box">
            <span>03:00</span>
            <img src="http://placekitten.com/100/100" />
            <span>11&deg;C</span>
          </div>
        </div>
      </div>
    </div>

    )
  }
}

export default App;
