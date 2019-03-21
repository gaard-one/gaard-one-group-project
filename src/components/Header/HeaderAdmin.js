import React, { Component } from 'react';
import './Header.css';
import LogOutButton from '../LogOutButton/LogOutButton.js';


class HeaderAdmin extends Component {
    render() {
        return (
  <div className="header-main">
    <img className="cover-image" src="/images/logo.svg" alt="gaard one"/>
    <br/>
    <LogOutButton className="log-in" />
    <br/>
  </div>
);
}
}
export default HeaderAdmin;