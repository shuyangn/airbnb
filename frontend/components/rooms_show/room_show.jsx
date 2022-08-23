import React from 'react';
import { Link } from 'react-router-dom';

import RoomDetail from './room_detail';
import { ProtectedRoute } from '../../util/route_util';
import NavBar2Container from "../nav_bar2/nav_bar2_container";
import RoomMap from '../map/map';

const RoomShow = ({ room, roomId, fetchRoom }) => {

  return(
    <div className="single-room-show">
      <NavBar2Container />
        <Link to="/rooms">Back to Index</Link>
        <div className="single-room-map">
        <RoomMap
          room={room}
          roomId={roomId}
          fetchRoom={fetchRoom}
        />
      </div>
      <div className="right-half room-details">
        <RoomDetail room={room} />
      </div>
    </div>
  );
};

export default RoomShow;