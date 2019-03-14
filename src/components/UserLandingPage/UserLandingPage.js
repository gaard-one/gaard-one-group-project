import React, { Component } from 'react';
import UserTabNav from './UserTabNav';
import './UserLanding.css';
import Header from '../Header/Header';
import UserHomePage from './../UserLandingPage/UserHomePage';
import SocialMedia from './../SocialMedia/SocialMedia';

// base of user landing page view -Tiana
class UserLandingPage extends Component {


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
export default UserLandingPage;
//end base of user landing page view -Tiana