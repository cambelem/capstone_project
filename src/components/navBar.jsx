import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return(
      <div className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBtoom: 0}}>
          <div className="nabar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navication</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand"><Link to="/">Weather Analysis</Link></a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Main</Link></li>
              <li><Link to="/map">Map</Link></li>
              <li><Link to="/settings"><i className="fa fa-cog"></i>Settings</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      </div>
    );
  }
}


