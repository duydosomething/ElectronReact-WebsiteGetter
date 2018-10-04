import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';

let sites = [ "https://www.google.com", "https://www.facebook.com", "https://www.tumblr.com","https://www.youtube.com", "https://www.google.com",
"https://www.facebook.com", "https://www.tumblr.com", "https://www.tumblr.com", "https://www.tumblr.com", "https://www.tumblr.com", "https://www.tumblr.com", "https://www.tumblr.com", "https://www.tumblr.com", "https://www.tumblr.com","https://www.youtube.com", "https://www.google.com", "https://www.facebook.com", "https://www.tumblr.com"]
const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 300
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

function generateListItems(){
  return sites.map(value => (
    <ListItem key={Math.random() * 100} button>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText
        primary={value}
      />
    </ListItem>
  )
)
}

class CheckboxList extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} style={{ height:"600px", overflow:"scroll"}} >
              <List dense={true}>
                {generateListItems()}
              </List>
            </div>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxList);
