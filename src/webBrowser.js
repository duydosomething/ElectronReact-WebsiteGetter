import React, { Component } from 'react';


class WebBrowser extends Component {
  render(){
    return (
      <webview
        style={{width: "100%"}}
    src="https://www.google.com"
  />
  )}
}

export default WebBrowser;
