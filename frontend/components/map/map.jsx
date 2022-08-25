import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';



class RoomMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoom(this.props.roomId).then(({room}) => {
      const mapOptions = {
        center:{ lat: room.lat, lng: room.long },
        zoom: 13
      };

    this.map = new google.maps.Map(this.mapNode, mapOptions); 
    new google.maps.Marker({position: mapOptions.center, map: this.map});
  })
}


  render() {
    return (
      <div id='div-map' ref={ map => this.mapNode = map }>
        </div>
    )
  }

}
export default withRouter(RoomMap);