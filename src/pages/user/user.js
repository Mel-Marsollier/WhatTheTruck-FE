import React, { Component } from 'react';
import Nav from "../../components/Nav";
import GoogleMapReact from 'google-map-react';
import * as firebase from "firebase"
import ResultsCard from "../../components/Results Card"

var config = {
  apiKey: "AIzaSyDBJH8z5eJDf7cgAWMiRGXE2U1vBnQVa2g",
    authDomain: "truck-firebase.firebaseapp.com",
    databaseURL: "https://truck-firebase.firebaseio.com",
    projectId: "truck-firebase",
    storageBucket: "truck-firebase.appspot.com",
    messagingSenderId: "810502901238"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database()

const AnyReactComponent = ({ text }) => <div>{text}</div>;




class User extends Component {
  static defaultProps = {
    center: {
      lat: 37.77,
      lng: -122.45
    },
    zoom: 15
  };

    state = {
      lat: 37.77, 
      lng: -122.45,
      trucks: []
    }
  

  componentDidMount() {
  
    // anyReactComponent();
    console.log("I mounted")
    // const rootRef = db.ref().child("Location")
    // const lngRef = rootRef.child("lng")
    db.ref().on("value", snap => {
      console.log("Value change")
      console.log(snap.val())
      let allTrucks = []
      let location = snap.val();
      for(let key in location){
        let truck = {
          name: location[key].name,
          lat: location[key].lat,
          lng: location[key].lng
        }
        allTrucks.push(truck)
      }

      this.setState({
        // lat: snap.val().location.truck.lat,
        // lng: snap.val().location.truck.lng,
        trucks: allTrucks
      })

      console.log(this.state)
    })

    // db.ref().set({
    //   location:{
    //     lat: 37.77, 
    //     lng: -122.45
    //   }
    // })
  }


  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="beachBackground">
        <Nav 
        home="/user/dashboard"
        firstPage="/"
        firstPageName="Back"
        />
        <div style={{ height: '50vh', width: '50%', marginLeft: "25%", marginTop: "5%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCC9CsEo4ZXBb-6M2d9TfG8DgvcTXXcEo0" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          {this.state.trucks.map(truck => (
            <AnyReactComponent
            text = {truck.name}
            lat = {truck.lat}
            lng = {truck.lng}
            />
          ))}
            {/* <AnyReactComponent
              lat={this.state.lat}
              lng={this.state.lng}
              text="hi"
            /> */}

            
          </GoogleMapReact>
        </div>
        <div className="resultsContainer">
        <ResultsCard />
        </div>

      </div>
    );
  }
}

export default User;
