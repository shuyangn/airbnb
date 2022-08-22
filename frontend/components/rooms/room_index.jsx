import React from "react";
import RoomIndexItem from './room_index_item';


const RoomIndex = ({ rooms }) => (
    <div className="index_page">
    <div className="index_page_all_rooms">
      {rooms.map(room => (
        <RoomIndexItem
          room={room}
          key={room.id}
        />
      ))}
    </div>
    </div>
  );
  
export default RoomIndex;
