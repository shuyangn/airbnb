import React from 'react';
import { Link } from 'react-router-dom';

import RoomDetail from './room_detail';
import { ProtectedRoute } from '../../util/route_util';
import NavBar2Container from "../nav_bar2/nav_bar2_container";
import RoomMap from '../map/map';

class RoomShow extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchRoom(this.props.roomId);
  }


  render() {
    const{ room, roomId, fetchRoom } = this.props;

    return(
      <div className="single-room-show">
        <NavBar2Container />
          <Link to="/rooms">Back to Index</Link>
          
        <div className="all-room-details">
          <RoomDetail room={room ? room : ''} />
        </div>
        <div className="single-room-map">
          <RoomMap
            roomId={roomId}
            fetchRoom={fetchRoom}
          />
        </div>
      </div>
    );

  }

}


export default RoomShow;