import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Navbar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    // this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    return null;
  }
}

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// const mapDispatchToProps = (dispatch) => {

// };

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
