import React, { Component } from 'react';


class WebBrowser extends Component {
  render(){
    return (
      <webview
        style={{width: "100%"}}
    src={this.props.url}
  />
  )}
}

export default WebBrowser;
