import React, { Component } from 'react';
// import UserTabNav from './UserTabNav';
import './UserLanding.css';
import Header from '../Header/Header';
import UserHomePage from './../UserLandingPage/UserHomePage';
import SocialMedia from './../SocialMedia/SocialMedia';
import { connect } from 'react-redux';

// base of user landing page view -Tiana
class UserLandingPage extends Component {
  
  

  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_PLOT',
                          // this.props.location.pathname.substring(6) takes the url after #/
                          // and grabs the rest of it ignoring the first 6 characters
                          // effectively grabbing everything after /home/
                          payload: this.props.location.pathname.substring(6)});
}


  render() {

    // let totalArea = this.props.squares.length;
    // let outPut;
    //     if (this.props.reduxStore.unitSq === false) {
    //         outPut = (<p>Welcome to Gaard One land </p>
    //     } else if (this.props.reduxStore.feedbackReducer === true) {
    //         outPut = (<Button variant="contained"
    //             onClick={this.updateFinish}
    //             color="primary" >
    //             Submit
    //                  </Button>)
    return (
      <div>

        <Header />
        {/* {outPut} */}
        {/* <h3 className="userHeader">Thank You!!!</h3>
        <h4 className="userSubHeader">Your purchase perserved {totalArea} square feet</h4> */}
        <UserHomePage />
        {/* <UserTabNav /> */}
        <SocialMedia />
        
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  squares: state.unitSq,
});

export default connect(mapStatetoProps)(UserLandingPage);
//end base of user landing page view -Tiana