import React, { Component } from 'react';
import UserTabNav from './UserTabNav';
import './UserLanding.css';
import Header from '../Header/Header';
import UserHomePage from './../UserLandingPage/UserHomePage';
import SocialMedia from './../SocialMedia/SocialMedia';
import { connect } from 'react-redux';

// base of user landing page view -Tiana
class UserLandingPage extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_PLOT',
                          // this.props.location.pathname.substring(6) takes the url after #/
                          // and grabs the rest of it ignoring the first 6 characters
                          // effectively grabbing everything after /home/
                          payload: this.props.location.pathname.substring(6)});
}


  render() {

    let totalArea = 5;

    return (
      <div>

        <Header />
        <h3 className="userHeader">Thank You!!!</h3>
        <h4 className="userSubHeader">Your purchase perserved {totalArea} </h4>
        <UserHomePage />
        {/* <UserTabNav /> */}
        <SocialMedia />
        
      </div>
    );
  }
}
export default connect()(UserLandingPage);
//end base of user landing page view -Tiana