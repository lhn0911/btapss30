import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <p>Status: {data}</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: 'Open the form'
    };
  }

  updateData = () => {
    this.setState({ newData: 'Close the form' });
  };

  render() {
    return (
      <div>
        <MyComponent data={this.state.newData} />
        <button onClick={this.updateData}>Change props</button>
      </div>
    );
  }
}

export default App;
