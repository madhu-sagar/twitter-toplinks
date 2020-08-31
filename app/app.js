/* eslint-disable react/jsx-filename-extension */
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Provider } from 'react-redux';

import './static/homepage.css';

import store from './store';

// import Landing from './views/landing';

// import Homepage from './views/homepage';
// import Register from './views/register';
// import UserHome from './views/userHome';
// import Search from './views/learch';
// import Login from './views/login';

// import Navbar from './layout/Navbar';
import Footer from './layout/footer';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <div className="container">
              <Route exact path="/" component={Landing} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Router>
//           <div className="app">
//             <Navbar />
//             <div className="container">
//               <Route exact path="/" component={Landing} />
//               <Route exact path="/register" component={Register} />
//               <Route exact path="/login" component={Login} />
//               <Switch>
//                 <PrivateRoute exact path="/home" component={UserHome} />
//               </Switch>
//               <Switch>
//                 <PrivateRoute exact path="/search" component={Search} />
//               </Switch>
//             </div>
//             <Footer />
//           </div>
//         </Router>
//       </Provider>
//     );
//   }
// }

module.exports = App;
