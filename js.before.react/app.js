import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Hello React
          </h1>
          <a href="https://reactjs.org">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;