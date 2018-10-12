import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const ListItem = (props) => {
  <ListItem key={props.id} button>
    <ListItemIcon>
      <FolderIcon />
    </ListItemIcon>
    <ListItemText
      primary={value}
    />
  </ListItem>
}
