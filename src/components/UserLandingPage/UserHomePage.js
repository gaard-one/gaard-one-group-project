import React, { Component } from 'react';
import './UserLanding.css'; // css location
import QRScanner from './../UserInterface/qRScanner';
import BaseMap from '../Map/BaseMap';
import Legend from '../Map/Legend/Legend';


// Single side view of User Tab -Tiana
class UserHomePage extends Component {


  render() {

    return (
        <div className="ui-home-main">
          <QRScanner />
          <BaseMap />
          <br />
          <br />
          <Legend />
        </div>  
    );
  }
}
export default UserHomePage;
// end Single side view of User Tab -Tiana