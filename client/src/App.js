import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          time: 'Go get it'
      };
  };
  
  updateName = ()=> {
    axios.get('https://qd7w5l6yx0.execute-api.us-east-1.amazonaws.com/dev/react/hello')
      .then(res => {
        console.log(res);
        this.setState({name: res.data.time})
      })      
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Time: {this.state.name}</h2>
          <button onClick={this.updateName}>Get Time</button>
        </header>
      </div>
  );
  }
}

export default App;