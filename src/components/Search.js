import React from "react";
import "./Search"

class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div className='Search'>
              <div className="navbar">
        <input onChange={e => this.setState({input: e.target.value})}
        type="search" placeholder="type a city name" />
        <button onClick={e => {
            this.props.event(this.state.input);}} >Find weather</button>
      </div>
        {/* {this.state.input}
        <input
          type="text"
          id="input-name"
          onChange={event => {
            this.setState({ input: event.target.value });
          }}
        />
        <button
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}
        >
          Say Hello
        </button> */}
      </div>
    );
  }
}
export default Search;
