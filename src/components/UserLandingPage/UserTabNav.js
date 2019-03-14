import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import UserHomePage from '../UserLandingPage/UserHomePage';
// import SavedLand from './../UserInterface/SavedLand';

// updated tabs with usable pages -Tiana
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
    const { value } = this.state;
    
    return (
      <div className="app-bar">
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
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><UserHomePage /></TabContainer>}
        {value === 1 && <TabContainer><SavedLand /></TabContainer>}
        {/* <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><UserHomePage /></TabContainer>
          <TabContainer dir={theme.direction}>Saved in 2018</TabContainer>
        </SwipeableViews> */}
      </div>
    );
  }
}

UserTabNav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UserTabNav);
// end...updated tabs with usable pages -Tiana