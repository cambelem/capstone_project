/* global google */
import _ from "lodash";
import React, { Component } from 'react';
import Helmet from "react-helmet";
import { Router, Route, Link, browserHistory } from 'react-router';
//import TwitterTimeline from 'react-twitter-embedded-timeline';
import { withGoogleMap, GoogleMap, Marker, InfoWindow, HeatmapLayer} from "react-google-maps";
import NavBar from './navBar';

const Horizon = require('@horizon/client');
const horizon = Horizon({ secure: false });
const tweets = horizon('gpsData');

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={17}
    defaultCenter={{ lat: 36.214029, lng: -81.678850 }}
    //onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        //{...marker}
        key={index}
        position={marker.position}
        //onRightClick={() => props.onMarkerRightClick(marker)}
        onClick={() => props.onMarkerClick(marker)}
      >
        {/*
          show info window only if the showinfo key of the marker is true.
          that is when the marker pin has been clicked and oncloseclick has been
          successfully fired.
          */
        }
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    ))}
    <HeatmapLayer />
  </GoogleMap>
));


export default class App extends Component {
//class Test extends Component {
  state = {
    markers: []   //[{position: {lat: -25, lng: 131},defaultAnimation:2, key: "NZ"}]
  };

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
  purge = this.purge.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * Used to grab data from tweets table from the projec database
   */
  componentDidMount() {
    tweets.watch().subscribe(
       (messages) => {
          let t = messages.map(function(message) {
            //console.log(message.coordX)
            //console.log(message["id"])	
            //		this.props.handleMapClick(message);

            const nMarkers = {
                position: { lat: parseFloat(message.coordX), lng: parseFloat(message.coordY) },
                          defaultAnimation: 2,
                          key: message.id,
                showInfo: false,
                infoContent:(
                  <div>TEST</div>
                ),
              };

            //	this.setState({
            //	  markers: nMarkers,
            //	});

            //this.setState({test: t});
            console.log(nMarkers);

              return nMarkers
            });
          this.setState({markers: t});
          console.log(this.state.markers);
       },
       (err) => {
         console.log(err);
       }
    );
  }

 purge(){
   console.log("hi")
 }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
//console.log("made it");
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng, //{lat: m["newLat"], lng: m["newLong"]},
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });

    if (nextMarkers.length === 3) {
      this.props.toast(
        `Right click on the marker to remove it`,
        `Also check the code!`
      );
    }
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }
  
  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerCLose = this.handleMarkerClose.bind(this);

  // Toggle to true to show InfoWindow and re-renders component
  handleMarkerClick(targetMarker){
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
    console.log(this.state.markers);
  }

  handleMarkerClose(targetMarker) {
    console.log(this.state.markers);
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          console.log(marker);
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }

  render() {
    return (
      <div> 
        <NavBar />

        <div className="row">
          <div className="col-lg-3 col-md-6">
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-md-offset-1">
            <div style={{height: 100}}>
            <Helmet title="Temp Map" />
            <GettingStartedGoogleMap
              containerElement={
                <div style={{ height: 100 }} />
              }
              mapElement={
                <div style={{ height: 750 , width: 750 }} />
              }
              onMapLoad={this.handleMapLoad}
              //onMapClick={this.handleMapClick}
              markers={this.state.markers}
              //onMarkerRightClick={this.handleMarkerRightClick}
              onMarkerClick={this.handleMarkerClick}
              onMarkerClose={this.handleMarkerClose}
            />
          </div>
        </div>

        <div className="col-md-3"> </div>
        </div>
      </div>
    );
  }
}

