import React, { Component } from 'react';

class B3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Rikkei Academy'
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      message: prevState.message === 'Rikkei Academy' ? 'RikkeiSoft' : 'Rikkei Academy'
    }));
  };

  render() {
    return (
      <div>
        <p>Company: {this.state.message}</p>
        <button onClick={this.handleClick}>Change State</button>
      </div>
    );
  }
}

export default B3;
