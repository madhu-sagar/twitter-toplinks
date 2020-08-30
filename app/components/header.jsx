import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Header extends Component {
    _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // Upon successful login, a cookie session will be stored in the client
      window.open('http://localhost:4000/auth/twitter', '_self');
    };

  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage
    window.open('http://localhost:4000/auth/logout', '_self');
    this.props.handleNotAuthenticated();
  };

  render() {
    const { authenticated } = this.props;
    return (
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        {authenticated ? (
          <li onClick={this._handleLogoutClick}>Logout</li>
        ) : (
          <li onClick={this._handleSignInClick}>Login</li>
        )}
      </ul>
    );
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default Header;
