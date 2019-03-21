import React, { Component } from 'react';
// import UserTabNav from './UserTabNav';
import './UserLanding.css';
import Header from '../Header/Header';
// / import UserHomePage from './../UserLandingPage/UserHomePage';
import SocialMedia from './../SocialMedia/SocialMedia';
import QRScanner from './../UserInterface/qRScanner';
import BaseMap from '../Map/BaseMap';
import Legend from '../Map/Legend/Legend';
import { connect } from 'react-redux';

// base of user landing page view -Tiana
class UserLandingPage extends Component {



  componentDidMount = () => {
    let urlParts = this.props.location.pathname.split('/')
    console.log(urlParts)
    let productId = urlParts[ urlParts.length -1 ]
    this.props.dispatch({
      type: 'FETCH_PLOT',
      payload: productId
    });
  }


  render() {

    let totalArea = this.props.squares.length;

    return (
      <div>
        <Header />
        <div className="ui-home-addons">
          <h3>Thank You!!!</h3>
          <h4>Your purchase preserved {totalArea} square feet</h4> 
        <QRScanner />
        <BaseMap />
        <br/>
        <Legend />
        <SocialMedia />
        </div>
        </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  squares: state.unitSq.displaySquare,
});

export default connect(mapStatetoProps)(UserLandingPage);
//end base of user landing page view -Tiana