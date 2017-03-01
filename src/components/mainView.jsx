import React, { Component } from 'react';
import NavBar from './navBar';
import Logo from '/home/cambelem/capstone/images/logo.jpg';

export default class MainView extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <div className="col-md-6">
            <h1> Capstone </h1> 
            <br />
            Weather Analysis Using Embedded Systems, Phone app, and RethinkDB/React
          </div>
          <div className="col-md-6">
            <h2> By Eric Cambel & Walt Scarboro </h2>
            <img src={Logo}/>
          </div>
        </div>
      </div>
    );
  }
}

