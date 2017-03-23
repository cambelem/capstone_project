import React, { Component } from 'react';
import NavBar from './navBar';
//import Logo from '../../images/logo.jpg';

export default class MainView extends Component {
  render() {
    return (
        <div style={{backgroundImage:"url(../../images/logo.jpg)", backgroundSize:"cover"}}>
        <NavBar />
        <div className="row">
          <div className="col-md-6">
            <h1> Capstone </h1> 
            <br />
            Weather Analysis Using Embedded Systems, Phone app, and RethinkDB/React
          </div>
          <div className="col-md-6">
            <h2> By Eric Cambel & Walt Scarboro </h2>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />

      </div>
    );
  }
}

