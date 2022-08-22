import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  long: latLng.long()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    long: -122.431297
  },
  zoom: 13
};

class RoomMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.singleRoom) {
      this.props.fetchRoom(this.props.roomId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.rooms);
    }
  }

  componentDidUpdate() {
    if (this.props.singleRoom) {
      const targetRoomKey = Object.keys(this.props.rooms)[0];
      const targetRoom = this.props.rooms[targetRoomKey];
      this.MarkerManager.updateMarkers([targetRoom]); //grabs only that one bench
    } else {
      this.MarkerManager.updateMarkers(this.props.rooms);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, long: east },
        southWest: { lat: south, long: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(room) {
    this.props.history.push(`rooms/${room.id}`);
  }


  render() {
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(RoomMap);