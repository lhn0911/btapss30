import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleInputChange = (event:any) => {
    this.setState({ inputValue: event.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      document.title = this.state.inputValue || "Tiêu đề ban đầu";
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
      </div>
    );
  }
}

export default MyComponent;
