import React, { Component } from 'react';
import './UserLanding.css'; // css location
import QRScanner from './../UserInterface/qRScanner';
import BaseMap from '../Map/BaseMap';
import Legend from '../Map/Legend/Legend';
import { connect } from 'react-redux';


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
const mapReduxStoreToProps = reduxStore => ({
  plots: reduxStore.unitSq.displaySquare,
});

export default connect(mapReduxStoreToProps)(UserHomePage);

// end Single side view of User Tab -Tiana