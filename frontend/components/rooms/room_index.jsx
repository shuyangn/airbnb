import React from "react";
import NavBar2Container from "../nav_bar2/nav_bar2_container";
import FakeFilter from '../fake_filter/fake_filter';
import RoomIndexItem from './room_index_item';


const RoomIndex = ({ rooms }) => (
    <div className="index_page">
        {/* <NavBar2Container />
        <FakeFilter /> */}
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
