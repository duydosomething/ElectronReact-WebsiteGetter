import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';


const styles = theme => ({
  container: {
    display: 'flex'
  },
  margin: {
    margin: theme.spacing.unit,
    flexDirection: 'row'
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },

});

class InputForm extends React.Component {
  render(){
  const { classes } = this.props;
  return (
    <div className={classes.container}>
      <FormControl className={classes.margin}>
        <InputLabel
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
          Add a URL
        </InputLabel>

        <Input
          classes={{
            underline: classes.cssUnderline,
          }}
        />
      </FormControl>
      <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
            <AddIcon />
      </Button>
    </div>
  )};
}

InputForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputForm);
