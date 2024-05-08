import React, { Component } from 'react';

class Notification extends Component {
  componentDidMount():void {
    console.log('Component đã được mount!');
  }

  render() {
    return(
        <div>
            <p></p>
        </div>
    ); 
  }
}

export default Notification;
