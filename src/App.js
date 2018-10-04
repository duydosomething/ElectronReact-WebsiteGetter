import React, { Component } from 'react';
import CheckboxList from './components/list';
import WebBrowser from './components/webBrowser';
import InputForm from './components/inputForm';

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
