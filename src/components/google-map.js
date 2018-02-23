import React, {Component} from 'react';


export default class GoogleMapComponent extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }

  render() {
    return (
      // this.refs.map will directly refer to this div
      <div ref="map"/>
    );
  }
}