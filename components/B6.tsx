import React, { Component } from 'react';

class MyComponent extends Component {
  shouldComponentUpdate(nextProps:any) {
    return nextProps.data !== this.props.data;
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <p>Message: {data}</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      newData: 'Interface rendering'
    };
  }

  updateData = () => {
    this.setState({ newData: 'Interface rendering' });
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
