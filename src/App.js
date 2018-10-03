import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckboxList from './list';
import WebBrowser from './webBrowser';
import InputForm from './inputForm';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div style={{display:"flex", flexDirection:"row",borderTop: "5px solid red" }}>
          <div style={{display:"flex", flexDirection:"column", borderRight: "5px solid red", padding: "5px"}}>
            <InputForm/>
            <CheckboxList/>
          </div>
          <WebBrowser url="https://www.youtube.com"/>
        </div>


      </div>

    );
  }
}

export default App;
