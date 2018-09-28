import React, { Component } from 'react';
import render from 'react-dom';

class WebBrowser extends Component {
  render(){
    return (
      <webview
        style={{width: "100%"}}
    src="https://www.google.com"
    allowpopups
  />
  )}
}

export default WebBrowser;
