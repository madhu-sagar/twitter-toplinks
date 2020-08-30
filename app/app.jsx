import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './static/index.css';
import Index from './views/index';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />

    </Switch>
  </Router>,
);
