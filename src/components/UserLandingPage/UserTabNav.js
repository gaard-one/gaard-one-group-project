import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import UserInterface from './../UserInterface/UserInterface';
import SavedLand from './../UserInterface/SavedLand';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

class UserTabNav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            centered
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Land You Saved" />
            <Tab label="Saved in 2018" />
            {/* <Tab label="Item Three" /> */}
          </Tabs>
        </AppBar>
        <SwipeableViews

          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
         {/* {value === 0 && <UserInterface match={this.props.match} history={this.props.history}/>}  */}
         {/* {value === 1 && <SavedLand match={this.props.match} history={this.props.history}/>} */}
          <TabContainer dir={theme.direction}><UserInterface/></TabContainer>
          
          {/* <SavedLand/> */}
          <TabContainer dir={theme.direction}>Saved in 2018</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

UserTabNav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserTabNav);
