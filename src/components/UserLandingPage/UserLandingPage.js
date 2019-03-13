import React, { Component } from 'react';
import UserTabNav from './UserTabNav';
import './UserLanding.css';
import Header from '../Header/Header';
// import UserHomePage from './../UserLandingPage/UserHomePage';


class UserLandingPage extends Component {


  render() {

    let totalArea = 5;

    return (
      <div>

        <Header />
        <h3 className="userHeader">Thank You!!!</h3>
        <h4 className="userSubHeader">Your purchase perserved {totalArea} </h4>

        <UserTabNav />
        
      </div>
    );
  }
}
export default UserLandingPage;