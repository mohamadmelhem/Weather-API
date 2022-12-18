import React from "react";

class Search extends React.Component {
  // state = {
  //   input: ""
  // };

  render() {
    return (
      <div>
              <div className="navbar">
        <input type="search" placeholder="type a city name" />
        <button >Find weather</button>
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
