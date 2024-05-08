import React, { Component } from 'react';

class Counter extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState((prevState) => ({
      count: (prevState.count + 1) % 11 
    }));
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
