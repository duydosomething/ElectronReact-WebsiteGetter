import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckboxList from './list'
import WebBrowser from './webBrowser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p className="App-intro">
          Hello Electron!
        </p>
        <div style={{display:"flex", flexDirection:"row"}}>
          <CheckboxList/>
          <WebBrowser/>
        </div>


      </div>

    );
  }
}

export default App;
