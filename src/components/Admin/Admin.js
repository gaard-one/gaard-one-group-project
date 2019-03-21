import React, { Component } from 'react';
import AdminTabNav from './AdminTabNav';
import LogOutButton from '../LogOutButton/LogOutButton.js';


class Admin extends Component {
  render() {
    return (
      <div>
        <LogOutButton className="log-in" />
        <AdminTabNav />

        
      </div>
    );
  }
}
export default Admin;