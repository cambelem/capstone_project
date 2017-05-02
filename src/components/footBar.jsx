import React, { Component } from 'react';
import { Link } from 'react-router';
import Style from 'style-it';

export default class FootBar extends Component {
  render() {
    return Style.it(`
		.navbar-fixed-bottom {
			background:#2a2c36;;
			color:#fff;
			padding:40px 0 0 0;
			
			position: fixed;
			right: 0;
			left: 0;
			z-index: 1030;
				
			height: 100px;
		}
		.bottomFooter {
			height: 500px;
		}
    `,
		<div className="row">
			<div className="col-md-12">
				<div className="bottomFooter">
				<nav className="navbar navbar-fixed-bottom">
			
				
				</nav>
				</div>
			</div>
		</div>
    );
  }
}


