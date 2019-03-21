import React, { Component } from 'react';
import './UserLanding.css';
import Header from '../Header/Header';
import SocialMedia from './../SocialMedia/SocialMedia';
import QRScanner from './../UserInterface/qRScanner';
import BaseMap from '../Map/BaseMap';
import Legend from '../Map/Legend/Legend';
import { connect } from 'react-redux';

// base of user landing page view -Tiana
class UserLandingPage extends Component {



  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_PLOT',
      // this.props.location.pathname.substring(6) takes the url after #/
      // and grabs the rest of it ignoring the first 6 characters
      // effectively grabbing everything after /home/
      payload: this.props.location.pathname.substring(6)
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