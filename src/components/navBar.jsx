import React, { Component } from 'react';
import { Link } from 'react-router';
import Style from 'style-it';

export default class NavBar extends Component {
  render() {
    return Style.it(`
		.navbar {
			box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
			position:relative;
			padding:.5rem 1rem;
			background-color:#f8f9fa;
		}

		.navbar-fixed-top {
			top: 0;
			position: fixed;
			right: 0;
			left: 0;
			z-index: 1030;
		}
    `,
		<div className="row">
			<div className="col-md-12">
				<nav className="navbar navbar-fixed-top navbar-light bg-faded" role="navigation" style={{marginBtoom: 0}}>
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
						<li><Link to="/">Home</Link></li>
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


