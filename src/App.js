import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.decrement}>-</button>
        <div className="count">{this.state.count}</div>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default App;
