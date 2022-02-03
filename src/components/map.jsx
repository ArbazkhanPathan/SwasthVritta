
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react-17';
// const Mapcontainer = () => {
//     return (
//         <Map google={this.props.google}
//         center={{
//           lat: 40.854885,
//           lng: -88.081807
//         }}
//         zoom={15}
//         onClick={this.onMapClicked}>

//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />

//         <InfoWindow onClose={this.onInfoWindowClose}>
            
//         </InfoWindow>
//       </Map>
//     )
// }

// export default GoogleApiWrapper({
//     apiKey:"AIzaSyCMoBnwX2BEnRCfBeGqP1SVEgjyHZrMjoU"
// })(Mapcontainer)
 
// Mapcontainer



// import "./map.css";
import React, { Component} from "react"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react-17';

export class MapContainer extends Component {
  render() {
    return (
      
      <Map className="mapswas" google={this.props.google}
      // style={{width: '50%', height: '300px'}}
      initialCenter={{
        lat: 22.316588217772278,
        lng:  73.13782837637855
      }}
      zoom={15}
      onClick={this.onMapClicked}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCMoBnwX2BEnRCfBeGqP1SVEgjyHZrMjoU")
})(MapContainer)




