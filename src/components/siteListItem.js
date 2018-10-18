import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class siteListItem extends Component {
  state = {
    checked: false
  }

  handleChange = name => event => {
    this.setState({ [name]: event.targed.checked});
  }
  render() {
    return (
    <ListItem key={this.props.id} button>
      <Checkbox
        checked={this.state.checked}
        onChange = {this.handleChange('checked')}
        value = 'checked'
      />
      <ListItemText
        primary={this.props.value}
      />
    </ListItem>
  )}

}

export default siteListItem;
