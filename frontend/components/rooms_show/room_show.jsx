import React from 'react';
import { Link } from 'react-router-dom';

import RoomDetail from './room_detail';
import { ProtectedRoute } from '../../util/route_util';

const RoomShow = ({ room, roomId, fetchRoom }) => {
  const rooms = {
    [roomId]: room
  };

  return(
    <div className="single-room-show">
        <div className="single-bench-map">
        <Link to="/rooms">Back to Index</Link>
      </div>
      <div className="right-half room-details">
        <RoomDetail room={room} />
      </div>
    </div>
  );
};

export default RoomShow;