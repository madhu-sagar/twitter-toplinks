import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

class Main extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="wrapper">
        <Helmet titleTemplate="%s | Twitter TopLinks" defaultTitle="Twitter TopLinks" />
        <Header />
        <div id="main">
          {...this.props}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Main.defaultProps = {
  children: null,
};

export default Main;
