import React, { Component } from 'react';
import Style from 'style-it';
import NavBar from './navBar';
import FootBar from './footBar';
//import Logo from '../../images/logo.jpg';

export default class MainView extends Component {
  render() {
    return Style.it(`
		#backImg {
			position:relative;
			z-index:1;
			padding:200px 0 100px 0;
			background-repeat:repeat-x;
			background-image: linear-gradient(45deg, #5dc3e7, #340690); //#d86c20
			height: 700px
		}
		#backImg:before {
			position:absolute;
			content:'';
			top:0;left:0;
			height:100%;
			width:100%;
			background:url("../../images/hexagon4.png")repeat;
			z-index:2;
		}
		.text-xs-center {
			text-align: center !important;
		}
		.p-tag {
			color: white;
			font-size: 20px;
		}
    `,
    <div id="backImg">
		<NavBar />
        <div className="row">
			<div className="col-md-12">
				<div className="col-md-5 col-md-offset-3">
					<div className="container  text-xs-center">
					<h1 style={{color:"white"}}>
						<span className="text-uppercase">Tracking Weather</span>
					</h1>
					<p className="p-tag">
						Weather Analysis Using Embedded Systems, Phone Applications, and RethinkDB/React.
					</p>
					
					<p style={{fontSize:"17px", color:"white"}}>Eric Cambel & Walt Scarboro</p>
				
					</div>
				</div>
			</div>
        </div>
		<FootBar />
	</div>
   );
  }
}

/*
	<div className="col-md-6">
		<h1> Capstone </h1> 
		<br />
		
	  </div>
	  <div className="col-md-6">
		<h2> By  </h2>
	  </div>


        <div style={{backgroundImage:"url(../../images/logo.jpg)", backgroundSize:"cover"}}>
        
        <br /><br /><br /><br /><br /><br /><br /><br /><br />

      </div>
 */
