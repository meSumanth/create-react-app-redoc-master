import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RedocStandalone } from 'redoc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RedocStandalone specUrl="http://eduplus-devenv.eba-wumy3ddc.ap-south-1.elasticbeanstalk.com/v2/api-docs" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
