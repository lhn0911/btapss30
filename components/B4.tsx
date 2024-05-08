import React, { Component } from 'react';

export default class B4 extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      message: 'Học code để đi làm'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event:any) {
    event.preventDefault();
    console.log("Đã click nhưng không sửa");
    
  }

  render() {
    return (
      <div>
        <p>Slogan: {this.state.message}</p>
        <button onClick={this.handleClick}>Change state</button>
      </div>
    );
  }
}
