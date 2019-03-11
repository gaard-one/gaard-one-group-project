import React, {Component} from 'react';
import UserTabNav from './UserTabNav';
import './UserLanding.css';


class UserLandingPage extends Component {

  
    render() {
      
      let totalArea = 5;

        return (
  <div>
    
    <p>
      <h3 className="userHeader">Thank You!!!</h3>
      <h4 className="userSubHeader">Your purchase perserved {totalArea} </h4>
    </p>
    <UserTabNav />
  </div>
);
}
}
export default UserLandingPage;