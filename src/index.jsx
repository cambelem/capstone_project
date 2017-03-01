import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
//import Bootstrap from 'startbootstrap-sb-admin-2/dist/css/sb-admin-2.css';

import MainView from './components/mainView';
import App from './components/app';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={MainView}/>
    <Route path="/map" component={App}/>
  </Router>
), document.querySelector('.attach'));
