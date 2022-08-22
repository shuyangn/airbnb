import React from 'react';



const RoomDetail = ({ room }) => {
  return (
    <div>
      <ul className="room-list">
        {/* <img className="index-image" src={room.image_urls}/> */}
        <li>Price: {room.price}</li>
        <li>Description: {room.description}</li>
        <li>max_guests: {room.max_guests}</li>
        <li>num_beds: {room.num_beds}</li>
        <li>num_baths: {room.num_baths}</li>
        <li>city: {room.city}</li>
        <li>Latitude: {room.lat}</li>
        <li>Longitude: {room.long}</li>
      </ul>
    </div>
  );
};

export default RoomDetail;