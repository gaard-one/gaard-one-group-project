import React, {Component} from 'react';
import UserTabNav from './UserTabNav';
import './UserLanding.css';
import Header from './../Header/Header';
import QRScanner from './../UserInterface/qRScanner';
import BaseMap from '../Map/BaseMap';


class UserLandingPage extends Component {

  
    render() {
      
      let totalArea = 5;

        return (
  <div className="ui-home-main">
    
      <Header />
      <h3 className="userHeader">Thank You!!!</h3>
      <h4 className="userSubHeader">Your purchase perserved {totalArea} </h4>
    
    <UserTabNav />
    <QRScanner />
    <BaseMap />
  </div>
);
}
}
export default UserLandingPage;